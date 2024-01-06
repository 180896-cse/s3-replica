import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { extraApis } from "../router/routes";
import swaggerJSDoc from "swagger-jsdoc";
import path, { join } from "path";
const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AWS-S3 Replica APIs",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: [
    join(__dirname, "../router/routes.ts"),
    join(__dirname, "../router/users.api.ts"),
    join(__dirname, "../router/objects.api.ts"),
    join(__dirname, "../router/buckets.api.ts"),
  ], // Path to the API routes
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
