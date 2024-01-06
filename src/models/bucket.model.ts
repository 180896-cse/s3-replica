import mongoose, { ObjectId } from "mongoose";
import { iBucket } from "../@types/iBucket";

const bucketSchema = new mongoose.Schema<iBucket>({
  userId: {
    type: mongoose.Types.ObjectId,
    required: [true, " User id is mandatory input"],
  },
  bucketName: {
    type: String,
    required: [true, "Bucket name is mandatory input"],
  },
});

const bucketModel = mongoose.model<iBucket>("Bucket", bucketSchema);
export default bucketModel;
