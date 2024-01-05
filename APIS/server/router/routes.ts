import express, { Router } from "express";
import {
  getHealth,
  getObject,
  listObjects,
  uploadFile,
  deleteObject,
  errPage,
} from "../Controllers/object.Controller";
import { createBucket, listBuckets } from "../Controllers/bucket.Controller";
import {createUser, validateUser} from "../Controllers/user.Controller"
import multer, { Multer } from "multer";
const upload = multer({ dest: "uploads/" });
const routers: Router = express.Router();


/**
 * @swagger
 * /api:
 *   get:
 *     description: Get API Health
 *     responses:
 *       200:
 *         description: Success
 */
routers.route("/api").get(getHealth);
routers.route("/get").post(getObject);
routers.route("/list").get(listObjects);
routers.route("/upload").post(upload.single("testImage"), uploadFile);
routers.route("/remove").delete(deleteObject);

//Bucket APIs
routers.route("/createBucket").post(createBucket);
routers.route("/listBucket").get(listBuckets);


//User APIs
routers.route("/newUser").post(createUser);
routers.route("/userLogin").post(validateUser);

//
routers.route("/*").get(errPage);

module.exports = routers;
