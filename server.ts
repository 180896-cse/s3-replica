import express, { NextFunction, Request, Response } from "express";
import path from "path";
import { Database } from "./src/config/mongoDb.connect";
import bodyParser from "body-parser";
import { specs, swaggerUi } from "./src/config/swagger.config";
import { userRoutes } from "./src/router/users.api";
import { objectRoutes } from "./src/router/objects.api";
import { bucketRoutes } from "./src/router/buckets.api";
import { extraApis } from "./src/router/routes";
import { validateLoggedinUser } from "./src/middlewares/validateLoggedInUser";

// database instance creation and connection function call .
try {
  const DBConnect = new Database();
  DBConnect.DBconnect();
} catch (error) {
  console.log(`error handled at app.ts with db_connection ${error}`);
}

const app = express();
const Port = 3001;
// have to use body parser if we wanna send something to server.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/", extraApis);
app.use("/user", userRoutes);
app.use("/object", validateLoggedinUser, objectRoutes);
app.use("/bucket", validateLoggedinUser, bucketRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(500).send({ error: err.message });
});

try {
  app.listen(Port, () => {
    console.log(`server listening on: http://localhost:${Port}`);
  });
} catch (err) {
  console.log(`err occurred ! : ${err}`);
}
