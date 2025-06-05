const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const apicache = require('apicache');
apicache.options({ debug: true }); // Mostrar cache hit/miss en consola
let cache = apicache.middleware;

const app = express();

// Middlewares base
app.use(cors());
app.use(express.json());

// Rate limiting: 100 solicitudes por IP cada minuto
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 100,
  message: '⚠️ Demasiadas solicitudes desde esta IP. Intenta de nuevo más tarde.',
});
app.use(limiter);

// Conexión a base de datos
const db = require('./models/db');

// Rutas con caché activo para GET /api/productos
const productoRoutes = require('./routes/productos.routes');
app.use(
  '/api/productos',
  cache('60 seconds', (req, res) => req.method === 'GET'),
  productoRoutes
);


// Documentación  Swagger UI y JSON
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
// Documentación interactiva en Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Exportar swagger.json directamente para Swagger Editor o Codegen
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📄 Swagger UI en http://localhost:${PORT}/api-docs`);
  console.log(`📦 Swagger JSON disponible en http://localhost:${PORT}/swagger.json`);
});
