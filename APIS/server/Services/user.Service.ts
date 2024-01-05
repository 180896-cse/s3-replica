import bcrypt from "bcrypt"
import userModel from "../Models/user.Model";

export class userServices {
  async createUser(userId: String, password: String) {
    try {
        if (!userId) {
            throw new Error('User ID is required');
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
    try {
      const user = await userModel.findOne({ userId: userId });

      if (!user) {
          return false; // User not found
      }

      const passwordMatch = await bcrypt.compare(password.toString(), user.password);

      return passwordMatch;
  } catch (error) {
      console.error('Error validating login:', error);
      throw error;
  }
    
  }


}
