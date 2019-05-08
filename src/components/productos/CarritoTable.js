import React from 'react';


class CarritoTable extends React.Component {

    render() {
        const { productos } = this.props;
        return (

            <div>
                <h1>Carrito de Compras</h1>
                <div>
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
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>

            </div>


        );

    }

}

export default CarritoTable;