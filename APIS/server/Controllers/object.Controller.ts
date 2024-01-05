import { NextFunction, Request, Response, request, response } from "express";
import { objectServices } from "../Services/object.Service";
import objectModel from "../Models/object.Model";
import { error } from "console";
import { ObjectId, Types, Mongoose } from "mongoose";

//creating an instance for Object service
var object = new objectServices();

const getHealth = async (req: Request, res: Response) => {
  res.send("Test Ok!!");
};

// function to get paticular object based on object id
const getObject = async (req: Request, res: Response) => {
  try {
    console.error(JSON.stringify(req.body));

    if (!req.body.objectId) {
      throw new Error("object id is required");
    }
    res.send(
      await object.getPaticularObject(new Types.ObjectId(req.body.objectId))
    );
  } catch (error) {
    return res.status(500).send(JSON.stringify(error));
  }
};

// function to list all objects in the DB
const listObjects = async (req: Request, res: Response) => {
  try {
    res.send(await object.listObjects());
    // response.end();
  } catch (error: any) {
    console.error("Error listing objects:", error.message);
    throw error;
  }
};

// function to create new record in DB
const uploadFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      throw error;
    } else {
      return res.send(
        await object.putObject(
          req.body.imgName,
          req.file.buffer,
          new Types.ObjectId(req.body.bucketId)
        )
      );
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// function to delete object in DB based on ID
const deleteObject = async (req: Request, res: Response) => {
  try {
    res.send(
      await object.deletedObject(
        new Types.ObjectId(req.query.objectId?.toString())
      )
    );
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
};

// function to show error page for other routes
const errPage = async (req: Request, res: Response) => {
  res.send("Not a listed route");
};

export { getHealth, getObject, listObjects, uploadFile, deleteObject, errPage };
