import express, { Router } from "express";
import { createUser, validateUser } from "../controllers/user.controller";

const routers: Router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       required:
 *         - userId
 *         - password
 *       properties:
 *         userId:
 *           type: string
 *           description: The user ID is mandatory input
 *         password:
 *           type: string
 *           description: Password will be mandatory input
 * /user/new:
 *   post:
 *     summary: Create new User
 *     description: Creates an User using provided useriD and password in the request body
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/user'
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad request
 */
routers.route("/new").post(createUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       required:
 *         - userId
 *         - password
 *       properties:
 *         userId:
 *           type: string
 *           description: The user ID is mandatory input
 *         password:
 *           type: string
 *           description: Password will be mandatory input
 * /user/login:
 *   post:
 *     summary: Login for User
 *     description: Login for user by providing UserID and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/user'
 *     responses:
 *       '200':
 *         description: User LogedIn successfully
 *       '404':
 *         description: Bad request, User Not found
 */
routers.route("/login").post(validateUser);

export const userRoutes = routers;
