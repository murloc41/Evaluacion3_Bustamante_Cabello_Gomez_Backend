# ApiTejelanas.DefaultApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProductosGet**](DefaultApi.md#apiProductosGet) | **GET** /api/productos | Obtener todos los productos
[**apiProductosIdDelete**](DefaultApi.md#apiProductosIdDelete) | **DELETE** /api/productos/{id} | Eliminar un producto
[**apiProductosIdGet**](DefaultApi.md#apiProductosIdGet) | **GET** /api/productos/{id} | Obtener un producto por ID
[**apiProductosIdPut**](DefaultApi.md#apiProductosIdPut) | **PUT** /api/productos/{id} | Actualizar un producto existente
[**apiProductosPost**](DefaultApi.md#apiProductosPost) | **POST** /api/productos | Crear un nuevo producto

<a name="apiProductosGet"></a>
# **apiProductosGet**
> apiProductosGet()

Obtener todos los productos

### Example
```javascript
import {ApiTejelanas} from 'api_tejelanas';

let apiInstance = new ApiTejelanas.DefaultApi();
apiInstance.apiProductosGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiProductosIdDelete"></a>
# **apiProductosIdDelete**
> apiProductosIdDelete(id)

Eliminar un producto

### Example
```javascript
import {ApiTejelanas} from 'api_tejelanas';

let apiInstance = new ApiTejelanas.DefaultApi();
let id = 56; // Number | ID del producto a eliminar

apiInstance.apiProductosIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID del producto a eliminar | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiProductosIdGet"></a>
# **apiProductosIdGet**
> apiProductosIdGet(id)

Obtener un producto por ID

### Example
```javascript
import {ApiTejelanas} from 'api_tejelanas';

let apiInstance = new ApiTejelanas.DefaultApi();
let id = 56; // Number | 

apiInstance.apiProductosIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiProductosIdPut"></a>
# **apiProductosIdPut**
> apiProductosIdPut(body, id)

Actualizar un producto existente

### Example
```javascript
import {ApiTejelanas} from 'api_tejelanas';

let apiInstance = new ApiTejelanas.DefaultApi();
let body = new ApiTejelanas.ProductosIdBody(); // ProductosIdBody | 
let id = 56; // Number | ID del producto a actualizar

apiInstance.apiProductosIdPut(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductosIdBody**](ProductosIdBody.md)|  | 
 **id** | **Number**| ID del producto a actualizar | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="apiProductosPost"></a>
# **apiProductosPost**
> apiProductosPost(body)

Crear un nuevo producto

### Example
```javascript
import {ApiTejelanas} from 'api_tejelanas';

let apiInstance = new ApiTejelanas.DefaultApi();
let body = new ApiTejelanas.ApiProductosBody(); // ApiProductosBody | 

apiInstance.apiProductosPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApiProductosBody**](ApiProductosBody.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

