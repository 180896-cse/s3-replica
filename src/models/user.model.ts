import mongoose from "mongoose";
import { iUser } from "../@types/iUser";
const userSchema = new mongoose.Schema<iUser>({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
