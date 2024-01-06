import { ObjectId, Types } from "mongoose";

export interface iObject {
  imgName: string;
  buffer: Buffer;
  bucketId: ObjectId;
  size: number;
  mime_type: string;
}
