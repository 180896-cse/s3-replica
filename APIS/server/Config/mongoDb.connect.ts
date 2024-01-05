import mongoose from "mongoose";
import path from "path";
// reading .env file
// require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

interface Idatabase {
  DBconnect(): void;
}

export class Database implements Idatabase {
  DBconnect(): void {
    var db: string = "mongodb+srv://shantanupratap180896:Shan%40754@cluster0.azhwnnq.mongodb.net/?retryWrites=true&w=majority";
    mongoose
      .connect(db)
      .then(() => {
        // return dbInstance;
        console.log("connection with MongoDB is sucess!!");
      })
      .catch((err) => {
        console.log(`Failed connection with error: ${err}`);
      });
  }
}