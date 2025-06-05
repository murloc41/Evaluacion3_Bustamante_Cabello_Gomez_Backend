import ApiClient from '../src/ApiClient.js';
import DefaultApi from '../src/api/DefaultApi.js';

const api = new DefaultApi();
ApiClient.instance.basePath = 'http://localhost:3000';

api.apiProductosGet((error, data, response) => {
  if (error) {
    console.error("❌ Error al listar:", error);
  } else {
    const productos = JSON.parse(response.text);
    console.log("✅ Productos:", productos);
  }
});
