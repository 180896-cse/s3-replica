// This file contain schema
import mongoose, { ObjectId } from "mongoose";
import mongooes, { model } from "mongoose";

//interface for schema
interface Iobject {
  imgName: string;
  image: Buffer;
  bucketId: ObjectId;
}

const objectSchema = new mongooes.Schema<Iobject>({
  imgName: {
    type: String,
    required: [true, " File name is mandatory input"],
  },
  image: {
    data:Buffer,
    contentType: String,
  },
  bucketId:{
    type:mongoose.Types.ObjectId,
    required: [true, " Bucket id is mandatory input"],
    ref :"buckets"
    
  }
});

const objectModel = model<Iobject>("objectSchema", objectSchema);

export default objectModel;
