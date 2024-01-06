import { NextFunction, Request, Response, request, response } from "express";
import { objectServices } from "../services/object.service";
import { error } from "console";
import { Types, Mongoose } from "mongoose";
import { iAuthenticatedUser } from "../@types/iAuthenticatedUser";

/**
 *
 */
const objectService = new objectServices();

const getHealth = async (req: Request, res: Response) => {
  return res.send("Test Ok!!");
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
const getObject = async (
  req: iAuthenticatedUser,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.objectId) {
      throw new Error("object id is required");
    }
    const object = await objectService.getParticularObject(
      req.user?._id || "",
      new Types.ObjectId(req.body.objectId)
    );
    res.setHeader("content-type", object.objectType);
    res.setHeader("length", object.objectSize);
    return object.objectBuffer.pipe(res);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param req
 * @param res
 * @param next
 */

const listObjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.send(await objectService.listObjects());
    // response.end();
  } catch (error: any) {
    console.error("Error listing objects:", error.message);
    throw error;
    next(error);
  }
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
const uploadFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      throw error;
    } else {
      return res
        .status(201)
        .send(
          await objectService.putObject(
            req.body.name,
            req.file,
            new Types.ObjectId(req.body.bucketId)
          )
        );
    }
  } catch (error) {
    next(error);
  }
};

// function to delete object in DB based on ID
const deleteObject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.query?.objectId) {
      throw new Error("Please provide objectId in query params");
    }
    res.send(
      await objectService.deletedObject(
        new Types.ObjectId(req.query.objectId?.toString())
      )
    );
  } catch (error) {
    next(error);
  }
};

export { getHealth, getObject, listObjects, uploadFile, deleteObject };
