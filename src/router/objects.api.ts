import express, { Router } from "express";
import {
  deleteObject,
  getObject,
  listObjects,
  uploadFile,
} from "../controllers/object.controller";
import multer, { memoryStorage } from "multer";

const routers: Router = express.Router();
const upload = multer({
  storage: memoryStorage(),
  limits: { fileSize: 1024 * 1024 * 4 },
});

/**
 * @swagger
 * components:
 *   schemas:
 *     object:
 *       type: object
 *       required:
 *         - objectId
 *       properties:
 *         objectId:
 *           type: string
 *           description: The object ID is mandatory input
 * /object/get:
 *   post:
 *     summary: Get paticular object
 *     description: Get paticular object based on object Id
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/object'
 *     responses:
 *       '200':
 *         description: Object found
 *       '404':
 *         description: Bad request, Object Not found
 */
routers.route("/get").post(getObject);

/**
 * @swagger
 * components:
 *   schemas:
 *     object:
 *       type: object
 * /object/all:
 *   get:
 *     summary: Get all objects
 *     description: Get all objects in DB
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: List found
 *       '404':
 *         description: Bad request, List Not found
 */
routers.route("/all").get(listObjects);

/**
 * @swagger
 * components:
 *   schemas:
 *     object:
 *       type: object
 *       required:
 *         - name
 *         - file
 *         - bucketId
 *       properties:
 *         name:
 *           type: string
 *           description: The name is mandatory input
 *         file:
 *           type: string
 *           format: binary
 *           description: The file is mandatory input
 *         bucketId:
 *           type: string
 *           description: The bucket ID is mandatory input
 * /object/new:
 *   post:
 *     summary: Upload a new object
 *     description: upload new object
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/object'
 *     responses:
 *       '201':
 *         description: Object created
 *       '404':
 *         description: Bad request, Object Not created
 */
routers.route("/new").post(upload.single("file"), uploadFile);

/**
 * @swagger
 * components:
 *   schemas:
 *     object:
 *       type: object
 *       required:
 *         - objectId
 *       properties:
 *         objectId:
 *           type: string
 *           description: The name is mandatory input
 *         file:
 *           type: string
 *           format: binary
 *           description: The file is mandatory input
 *         bucketId:
 *           type: string
 *           description: The bucket ID is mandatory input
 * /object/{objectId}:
 *   delete:
 *     summary: Delete a resource by ID
 *     description: Deletes a resource based on the provided ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *         - objectId: objectId
 *           in: path
 *           required: true
 *           type: string
 *           description: The ID of the resource to delete
 *     responses:
 *       '201':
 *         description: Object deleted
 *       '404':
 *         description: Bad request, Object Not Deleted
 */
routers.route("/delete").delete(deleteObject);

export const objectRoutes = routers;
