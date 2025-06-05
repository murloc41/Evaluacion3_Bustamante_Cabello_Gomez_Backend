import ApiClient from '../src/ApiClient.js';
import DefaultApi from '../src/api/DefaultApi.js';

const api = new DefaultApi();
ApiClient.instance.basePath = 'http://localhost:3000';

const producto = {
  nombre: "Producto desde test crear",
  descripcion: "Creado usando cliente separado",
  precio: "8800",
  stock: 12
};

api.apiProductosPost(producto, (error, data, response) => {
  if (error) {
    console.error("❌ Error al crear:", error);
  } else {
    const respuesta = JSON.parse(response.text);
    console.log("✅ Producto creado:", respuesta);
  }
});
