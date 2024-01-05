import multer, { Multer } from "multer";
import { request, response } from "express";
import objectModel from "../Models/object.Model";
import { ObjectId, Types } from "mongoose";

// function to get paticular object based on object id

export class objectServices {
  async getPaticularObject(objectId: Types.ObjectId) {
    try {
      const object = await objectModel.findById(objectId);
      if (!object) {
        throw new Error(`Object not found ${objectId}}`);
      }
      return object;
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
  async putObject(fileName: string, fileBuffer: Buffer, bucketId: Types.ObjectId) {
    const newImage = new objectModel({
      imgName: fileName,
      image: {
        data: fileBuffer,
        contentType: "image/png",
      },
      bucketId: bucketId
    });
    return await newImage.save();
  }

  async deletedObject(objectId: Types.ObjectId) {
    try {
      const deletedObject = await objectModel.findByIdAndDelete(objectId);
      
      
      if (!deletedObject) {
        throw new Error("Object not found");
      }

      return (`deleted successfully ${deletedObject}`);
    } catch (error: any) {
      console.error("Error deleting object:", error.message);
      throw error;
    }
  }
}
