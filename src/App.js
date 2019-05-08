import React from 'react';
import './App.css';
import ProductosIndex from './components/productos/ProductosIndex';

class App extends React.Component {

  render() {
    return (
      <div className="container" >
        <div className="App">
          <ProductosIndex />
        </div>
      </div>

    );
  }

}

export default App;
