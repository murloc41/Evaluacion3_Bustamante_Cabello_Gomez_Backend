const express = require('express');
const router = express.Router();
const controller = require('../controllers/productos.controller');

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtener todos los productos
 *     description: >
 *       Este endpoint devuelve todos los productos disponibles.
 *       
 *       🔄 **Caché:** Los resultados se almacenan durante 60 segundos para mejorar el rendimiento.
 *       
 *       🚫 **Rate limiting:** Limitado a 100 solicitudes por minuto por IP.
 *       
 *       ⏱️ **Tiempo de respuesta esperado:** entre 10 ms y 50 ms en condiciones normales.
 *       
 *       🧠 **Consejo de optimización:** Evite enviar múltiples solicitudes seguidas si los datos no cambian frecuentemente. El uso de cache ayuda a reducir la carga del servidor.
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nombre: "Lana Premium"
 *                 descripcion: "Suave y cálida"
 *                 precio: 9500
 *                 stock: 10
 */


/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     description: >
 *       Este endpoint devuelve los detalles de un producto según su ID.
 *       
 *       🚫 **Rate limiting:** Limitado a 100 solicitudes por minuto por IP.
 *       
 *       ⏱️ **Tiempo de respuesta esperado:** 10 a 40 ms.
 *       
 *       🧠 **Consejo:** Asegúrese de que el ID sea válido para evitar errores 404.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Un producto
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               nombre: "Algodón Natural"
 *               descripcion: "100% algodón"
 *               precio: 7800
 *               stock: 5
 *       404:
 *         description: Producto no encontrado
 */


/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     description: >
 *       Este endpoint permite crear un nuevo producto en la base de datos.
 *       
 *       🚫 **Rate limiting:** Limitado a 100 solicitudes por minuto por IP.
 *       
 *       ⏱️ **Tiempo de respuesta esperado:** 15 a 80 ms.
 *       
 *       🧠 **Consejo:** Valide los datos antes de enviarlos para evitar errores y ahorrar tráfico.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               precio:
 *                 type: number
 *               stock:
 *                 type: integer
 *           example:
 *             nombre: "Lana Merino"
 *             descripcion: "Color natural, ideal para invierno"
 *             precio: 8900
 *             stock: 15
 *     responses:
 *       201:
 *         description: Producto creado
 */


/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualizar un producto existente
 *     description: >
 *       Este endpoint permite modificar los datos de un producto por su ID.
 *       
 *       🚫 **Rate limiting:** Limitado a 100 solicitudes por minuto por IP.
 *       
 *       ⏱️ **Tiempo de respuesta esperado:** 15 a 100 ms.
 *       
 *       🧠 **Consejo:** Asegúrese de que el ID exista y de enviar todos los campos correctamente para evitar fallos.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               precio:
 *                 type: number
 *               stock:
 *                 type: integer
 *           example:
 *             nombre: "Lana actualizada"
 *             descripcion: "Cambio de descripción"
 *             precio: 9200
 *             stock: 20
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       404:
 *         description: Producto no encontrado
 */


/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     description: >
 *       Este endpoint elimina un producto por su ID.
 *       
 *       🚫 **Rate limiting:** Limitado a 100 solicitudes por minuto por IP.
 *       
 *       ⏱️ **Tiempo de respuesta esperado:** 10 a 50 ms.
 *       
 *       🧠 **Consejo:** Confirme que el ID sea válido antes de eliminar.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       404:
 *         description: Producto no encontrado
 */



// Swagger docs se agregarán encima después
router.get('/', controller.obtenerProductos);
router.get('/:id', controller.obtenerProducto);
router.post('/', controller.crearProducto);
router.put('/:id', controller.actualizarProducto);
router.delete('/:id', controller.eliminarProducto);

module.exports = router;
