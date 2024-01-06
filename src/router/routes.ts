import express, { Router } from "express";
import { getHealth } from "../controllers/object.controller";

const routers: Router = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Get Health of APIs
 *     description: Get API Health
 *     responses:
 *       200:
 *         description: Success
 */
routers.route("/health").get(getHealth);

// routers.route("/*").get(errPage);

export const extraApis = routers;
export default extraApis;
