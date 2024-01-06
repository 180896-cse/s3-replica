// This file contain schema
import mongoose, { Types, model } from "mongoose";
import { iObject } from "../@types/iObject";

const objectSchema = new mongoose.Schema<iObject>({
  imgName: {
    type: String,
    required: [true, " File name is mandatory input"],
  },
  buffer: {
    type: Buffer,
    required: true,
  },
  bucketId: {
    type: mongoose.Types.ObjectId,
    required: [true, " Bucket id is mandatory input"],
    ref: "buckets",
  },
  size: Number,
  mime_type: String,
});

const objectModel = model<iObject>("object", objectSchema);

export default objectModel;
