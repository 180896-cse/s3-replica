import { Types } from "mongoose";
import bucketModel from "../models/bucket.model";

export class bucketServices {
  async createBucket(userId: String, bucketName: String) {
    try {
      const newBucket = new bucketModel({
        userId: userId,
        bucketName: bucketName,
      });

      const savedBucket = await newBucket.save();
      return savedBucket;
    } catch (error) {
      console.error("Error creating bucket:", error);
      throw error;
    }
  }
  async getAllBucketsOfUserByUserId(userId: string) {
    try {
      const allObjects = await bucketModel.find({
        userId: new Types.ObjectId(userId),
      });
      return allObjects;
    } catch (error: any) {
      console.error("Error listing buckets:", error.message);
      throw error;
    }
  }
}
