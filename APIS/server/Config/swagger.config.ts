import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API with Swagger',
            version: '1.0.0',
            description: 'API documentation using Swagger',
        },
    },
    apis: ['../router/*.ts'], // Path to the API routes
};

const specs = swaggerJsdoc(options);

export {specs,swaggerUi};
