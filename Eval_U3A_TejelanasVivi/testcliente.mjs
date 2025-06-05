import ApiClient from './cliente-api/src/ApiClient.js';
import DefaultApi from './cliente-api/src/api/DefaultApi.js';

const api = new DefaultApi();
ApiClient.instance.basePath = 'http://localhost:3000';

const nuevoProducto = {
  nombre: "Test desde cliente aislado",
  descripcion: "Cliente separado usando ESM",
  precio: "9900",
  stock: 10
};

api.apiProductosPost(nuevoProducto, (error, data, response) => {
  if (error) {
    console.error("❌ Error:", error);
  } else {
    console.log("✅ Producto creado:", data);
  }
});
