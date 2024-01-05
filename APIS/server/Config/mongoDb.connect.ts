import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

interface Idatabase {
  DBconnect(): void;
}

export class Database implements Idatabase {
  DBconnect(): void {
    var db: string = process.env.MONGODB_CONN_STR || "MongourlRequired";
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