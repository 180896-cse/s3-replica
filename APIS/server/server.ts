import express from "express";
import path from "path";
import { Database } from "../server/Config/mongoDb.connect";
import bodyParser from "body-parser"


// database instance creation and connection function call .
try {
  var DBConnect = new Database();
  DBConnect.DBconnect();
} catch (error) {
  console.log(`error handled at app.ts with db_connection ${error}`);
}

const app = express();
const Port = 3002;

// have to use body parser if we wanna send something to server.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require(path.join(__dirname, "./router/routes")));



try {
  app.listen(Port, () => {
    console.log(`server listening on: http://localhost:${Port}`);
  });
} catch (err) {
  console.log(`err occured ! : ${err}`);
}
