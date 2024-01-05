import mongoose, { ObjectId } from "mongoose";

//interface for schema
interface Ibucket {
    userId: ObjectId;
    bucketName: string;
  }

const bucketSchema = new mongoose.Schema<Ibucket>({
    userId: {
        type: String,
        required: [true, " User id is mandatory input"],
    },
    bucketName: {
        type: String,
        required: [true, "Bucket name is mandatory input"],
    }
});

const bucketModel = mongoose.model<Ibucket>('Bucket', bucketSchema);
export default bucketModel;