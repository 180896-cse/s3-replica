import mongoose, { ObjectId } from "mongoose";

//interface for schema
interface Ibucket {
    userId: ObjectId;
    bucketName: string;
  }

const bucketSchema = new mongoose.Schema<Ibucket>({
    userId: {
        type: mongoose.Types.ObjectId,
        required: [true, " User id is mandatory input"],
        ref:"users"
    },
    bucketName: {
        type: String,
        required: [true, "Bucket name is mandatory input"],
    }
});

const bucketModel = mongoose.model<Ibucket>('Bucket', bucketSchema);
export default bucketModel;