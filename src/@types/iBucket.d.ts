import { ObjectId } from "mongoose";

export interface iBucket {
  userId: ObjectId;
  bucketName: string;
}
