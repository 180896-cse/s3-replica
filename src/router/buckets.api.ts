import express, { Router } from "express";
import { createBucket, listBuckets } from "../controllers/bucket.controller";

const routers: Router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     bucket:
 *       type: object
 *       required:
 *         - id
 *         - bucketName
 *       properties:
 *         id:
 *           type: string
 *           description: The  ID is mandatory input
 *         bucketName:
 *           type: string
 *           description: bucketname will be mandatory input
 * /bucket/new:
 *   post:
 *     summary: Creates new Bucket
 *     description: Creates an Bucket using provided Id and BucketName in the request body
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/bucket'
 *     responses:
 *       '201':
 *         description: Bucket created successfully
 *       '400':
 *         description: Bad request
 */
routers.route("/new").post(createBucket);

/**
 * @swagger
 * components:
 *   bucket:
 *     object:
 *       type: object
 * /bucket/all:
 *   get:
 *     summary: Get all Buckets
 *     description: Get all buckets in DB
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: List found
 *       '404':
 *         description: Bad request, List Not found
 */
routers.route("/all").get(listBuckets);

export const bucketRoutes = routers;
export default bucketRoutes;
