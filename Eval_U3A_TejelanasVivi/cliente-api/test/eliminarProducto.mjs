import ApiClient from '../src/ApiClient.js';
import DefaultApi from '../src/api/DefaultApi.js';

const api = new DefaultApi();
ApiClient.instance.basePath = 'http://localhost:3000';

const id = 1;

api.apiProductosIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(`❌ Error al eliminar el producto con ID ${id}:`, error);
  } else {
    const resultado = JSON.parse(response.text);
    console.log("✅ Producto eliminado:", resultado);
  }
});
