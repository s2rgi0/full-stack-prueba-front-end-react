import axios from 'axios';

class ProductosService {

  static getAllProductos() {
    const url = "http://localhost:8000/api/v1/products";
    console.log('hola men aqui estoy')
    return axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {},
    });
  }

  static createProducto(data) {
    const url = "http://localhost:8000/api/v1/products";
 
    return axios.post(url, {
      nombre: data.get('nombre'),
      precio: data.get('precio'),
      descripcion: data.get('descripcion'),
    }, {
        headers: {
          'Content-Type': 'application/json',
        },
      },
      );
  }

  static addProductoCarrito(id_orden,id_prod){
    
    const url = `http://localhost:8000/api/v1/orden/`+''+id_orden+'/'+id_prod;
    return axios.post(url, {
    }, {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  static deleteProductoCarrito(id_orden,id_prod){
    const url = `http://localhost:8000/api/v1/orden/`+''+id_orden+'/'+id_prod;
    return axios.delete(url, {
    }, {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

}

export default ProductosService;