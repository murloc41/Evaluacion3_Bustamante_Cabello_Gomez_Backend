const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Tejelanas',
      version: '1.0.0',
      description: 'Documentación del CRUD de productos para Tejelanas Vivi',
    },
    servers: [
      { url: 'http://localhost:3000' }
    ],
  },
  apis: ['./routes/*.js'], // Ruta de las rutas con anotaciones Swagger
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
