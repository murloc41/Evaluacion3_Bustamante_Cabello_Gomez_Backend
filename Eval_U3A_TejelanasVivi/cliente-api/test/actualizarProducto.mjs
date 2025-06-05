import ApiClient from '../src/ApiClient.js';
import DefaultApi from '../src/api/DefaultApi.js';

const api = new DefaultApi();
ApiClient.instance.basePath = 'http://localhost:3000';

const id = 1;

const actualizado = {
  nombre: "Lana mejorada",
  descripcion: "Actualizado desde test",
  precio: "9300",
  stock: 18
};

api.apiProductosIdPut(actualizado, id, (error, data, response) => {
  if (error) {
    console.error(`❌ Error al actualizar el producto con ID ${id}:`, error);
  } else {
    const resultado = JSON.parse(response.text);
    console.log("✅ Producto actualizado:", resultado);
  }
});
