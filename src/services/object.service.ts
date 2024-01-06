import multer, { Multer } from "multer";
import { request, response } from "express";
import objectModel from "../models/object.model";
import { ObjectId, Types } from "mongoose";
import { Readable } from "stream";

// function to get particular object based on object id

export class objectServices {
  async getParticularObject(userId: string, objectId: Types.ObjectId) {
    try {
      const object = await objectModel.findById(objectId);

      const temp = objectModel.aggregate([
        {
          $lookup: {
            as: "allBucketsOfUser",
            from: "buckets",
            localField: "bucketId",
            foreignField: "_id",
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$userId", new Types.ObjectId(userId)],
                  },
                },
              },
              { $project: { _id: 0, userId: 1 } },
            ],
          },
        },
        {
          $addFields: {
            allBucketsOfUser_size: {
              $size: "$allBucketsOfUser",
            },
          },
        },
        {
          $match: {
            allBucketsOfUser_size: {
              $gt: 0,
            },
          },
        },
        { $project: { allBucketsOfUser_size: 0, allBucketsOfUser: 0 } },
        // {
        //   $match: {
        //     bucketId: object?.bucketId,
        //   },
        // },
      ]);
      console.log(object, await temp, userId, object?.bucketId);

      if (!object || !(await temp).length) {
        throw new Error(`Object not found ${objectId}`);
      }

      return {
        objectBuffer: Readable.from(object.buffer),
        objectType: object.mime_type,
        objectSize: object.size,
      };
    } catch (error: any) {
      console.error("Error fetching object:", error.message);
      throw error;
    }
  }

  // service to list all objects in the DB
  async listObjects() {
    try {
      const allObjects = await objectModel.find({});
      return allObjects;
    } catch (error: any) {
      console.error("Error listing objects:", error.message);
      throw error;
    }
  }

  // service to to create new record in DB
  async putObject(
    fileName: string,
    file: Express.Multer.File,
    bucketId: Types.ObjectId
  ) {
    const newImage = new objectModel({
      imgName: fileName,
      buffer: file.buffer,
      mime_type: file.mimetype,
      size: file.size,
      bucketId: bucketId,
    });
    return await newImage
      .save()
      .then((e) => {
        console.log(e);

        const { buffer, ...res } = JSON.parse(JSON.stringify(e));
        return res;
      })
      .catch((e) => {
        console.log(e);
      });
    return "";
  }

  async deletedObject(objectId: Types.ObjectId) {
    try {
      const deletedObject = await objectModel.findByIdAndDelete(objectId);

      if (!deletedObject) {
        throw new Error("Object not found");
      }

      return `deleted successfully ${deletedObject}`;
    } catch (error: any) {
      console.error("Error deleting object:", error.message);
      throw error;
    }
  }
}
