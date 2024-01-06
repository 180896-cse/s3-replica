import bcrypt from "bcrypt";
import userModel from "../models/user.model";
import { creatToken } from "../helpers/jwtToken";

export class userServices {
  async createUser(userId: String, password: String) {
    try {
      if (!userId) {
        throw new Error("User ID is required");
      }
      const hashedPassword = await bcrypt.hash(password.toString(), 10);
      const newUser = new userModel({
        userId: userId,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async validateLogin(userId: String, password: String) {
    const user = await userModel.findOne({ userId: userId });

    if (!user || !(await bcrypt.compare(password.toString(), user.password))) {
      throw new Error("wrong credentials");
    }
    const authToken = creatToken({ id: user._id });
    return { authToken };
  }
}
export async function getUserByDbId(userId: string) {
  const user = await userModel.findById(userId);
  if (!user) {
    throw new Error("No user found");
  }

  return user;
}
