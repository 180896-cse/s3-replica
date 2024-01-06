import { bucketServices } from "../services/bucket.service";
import { NextFunction, Request, Response } from "express";
import { iAuthenticatedUser } from "../@types/iAuthenticatedUser";

const bucket = new bucketServices();

/**
 *
 * @param req
 * @param res
 * @param next
 */
const createBucket = async (
  req: iAuthenticatedUser,
  res: Response,
  next: NextFunction
) => {
  try {
    return res
      .status(201)
      .send(
        await bucket.createBucket(
          req.user?._id?.toString() || "",
          req.body.bucketName
        )
      );
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
const listBuckets = async (
  req: iAuthenticatedUser,
  res: Response,
  next: NextFunction
) => {
  try {
    return res
      .status(200)
      .send(await bucket.getAllBucketsOfUserByUserId(req.user?._id || ""));
  } catch (error) {
    next(error);
  }
};

export { createBucket, listBuckets };
