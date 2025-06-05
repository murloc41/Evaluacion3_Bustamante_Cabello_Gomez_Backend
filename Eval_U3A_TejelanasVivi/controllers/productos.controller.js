const db = require('../models/db');

exports.obtenerProductos = (req, res) => {
  db.query('SELECT * FROM productos', (err, resultados) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(resultados);
  });
};

exports.obtenerProducto = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM productos WHERE id = ?', [id], (err, resultados) => {
    if (err) return res.status(500).json({ error: err.message });
    if (resultados.length === 0) return res.status(404).json({ error: 'No encontrado' });
    res.json(resultados[0]);
  });
};

exports.crearProducto = (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;
  db.query(
    'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)',
    [nombre, descripcion, precio, stock],
    (err, resultado) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ mensaje: 'Producto creado', id: resultado.insertId });
    }
  );
};

exports.actualizarProducto = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock } = req.body;
  db.query(
    'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?',
    [nombre, descripcion, precio, stock, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ mensaje: 'Producto actualizado' });
    }
  );
};

exports.eliminarProducto = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM productos WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Producto eliminado' });
  });
};
