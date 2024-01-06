import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

interface iDatabase {
  DBconnect(): void;
}

export class Database implements iDatabase {
  DBconnect(): void {
    const db: string = process.env.MONGODB_CONN_STR || "MongourlRequired";
    mongoose
      .connect(db)
      .then(() => {
        // return dbInstance;
        console.log("connection with MongoDB is success!!");
      })
      .catch((err) => {
        console.log(`Failed connection with error: ${err}`);
      });
  }
}
