const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // tu contraseña, si aplica
  database: 'tejelanas'
});

connection.connect(err => {
  if (err) {
    console.error('❌ Error al conectar:', err);
    return;
  }
  console.log('✅ Conectado a MySQL');
});

module.exports = connection;
