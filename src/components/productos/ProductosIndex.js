
import React from 'react';
import ProductosService from './services/ProductosService';


class ProductosIndex extends React.Component {

    $id = window.$id;

    constructor(props) {
        super(props);
        this.agregarProducto = this.agregarProducto.bind(this);
        this.eliminarProducto = this.eliminarProducto.bind(this);
        this.state = {
            productos: [],
            productos2: [],
            id_ord: 0
        };

    }

    agregarProducto(index) {
        console.log(index);
        let id_ord = this.state.id_ord;

        console.log(id_ord);
        if (id_ord === 0) {
            this.state.id_ord = this.makeid(8);
            id_ord = this.state.id_ord;
            //$id = this.state.id_ord;
            this.setState({ id_ord: this.state.id_ord })

        }
        console.log(id_ord)
        ProductosService.addProductoCarrito(id_ord, index).then((response) => {
            console.log(response);
            const productoD = response.data;
            this.setState(prevState => ({
                productos2: [...prevState.productos2, productoD],
            }));
        });
    }

    eliminarProducto(index) {
        console.log(index)
        //console.log(id_ord)
        ProductosService.deleteProductoCarrito(index).then((response) => {
            console.log(response);
            const productoD = response.data;
        });

    }

    makeid(length) {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    render() {
        const { productos } = this.state;
        const { productos2 } = this.state;
        return (
            <div>
                <div className="row" >
                    <div className="col-12" >
                        <div>
                            <h1>Tiendita Web</h1>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripcion</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Comprar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productos.map(producto => (

                                            <tr key={producto.id} >
                                                <th scope="row">{producto.id}</th>
                                                <td>{producto.nombre}</td>
                                                <td>{producto.descripcion}</td>
                                                <td>${producto.precio}</td>
                                                <td><button type="button" onClick={this.agregarProducto.bind(null, producto.id)} className="btn btn-success" >Agregar</button></td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12" >
                        <div>
                            <h1>Carrito de Compras</h1>
                            <div>
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">id Orden</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Comprar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productos2.map(producto2 => (

                                                <tr key={producto2.id_producto} >
                                                    <th scope="row">{producto2.id_orden}</th>
                                                    <td>{producto2.nombre}</td>
                                                    <td>{producto2.descripcion}</td>
                                                    <td>${producto2.precio}</td>
                                                    <td><button type="button" onClick={this.eliminarProducto.bind(null, producto2.id_producto)} className="btn btn-danger" >Eliminar</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 col-md-6" >
                    <div className="b-form">
        
                <form onSubmit={this.handleSubmit} noValidate >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required/>                      
                    </div>
                    <button type="submit" className="btn btn-primary">Realizar Compra</button>
                </form>

            </div>
                    </div>
                </div>
            </div>
        );
    }

    handleOnCreateProduct = (producto) => {
        this.setState(prevState => ({
            productos: [...prevState.productos, producto],
        }));
    };

    componentDidMount() {
        ProductosService.getAllProductos().then(response => {
            console.log(response);
            this.setState({ productos: response.data })
        })
    }

}

export default ProductosIndex;
