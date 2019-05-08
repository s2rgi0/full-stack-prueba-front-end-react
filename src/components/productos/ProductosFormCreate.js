
import React from 'react';
import ProductosService from './services/ProductosService';

class ProductosFormCreate extends React.Component {


    handleSubmit = (event) => {
        event.preventDefault();
        if(!event.target.checkValidity()){
            console.warn('Invalid');
            return;
        }
        const data = new FormData(event.target);
        console.log(data.get('nombre'))
        console.log(data)
        
        ProductosService.createProducto(data).then((response) => {
            console.log(response);
            const producto = response.data;
            this.props.onCreateProduct(producto);
        });

        console.log('enviar datos al servidor remoto');
    }; 

    render() {
        return (

            <div className="b-form">
            <h1>Crear Productos</h1>
                <form onSubmit={this.handleSubmit} noValidate >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" required/>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" name="descripcion" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Precio</label>
                        <input type="text" className="form-control" id="precio" name="precio" required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

        );
    }

}

export default ProductosFormCreate;