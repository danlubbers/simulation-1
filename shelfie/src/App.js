import React, { Component } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard.js';
import Header from './Component/Header/Header.js';
import axios from 'axios';
import Form from './Component/Form/Form.js';



class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      baseURL: '/api'
    }
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addButton = this.addButton.bind(this);
    
  }

  componentDidMount() {
    axios.get(`${this.state.baseURL}/getAllProducts`).then(res=>{
      console.log("ARRAY is Loading!!!")
      this.setState({
        products: res.data
      })
      console.log(res.data)
    })
  }

  deleteProduct(id) {
    axios.delete(`${this.state.baseURL}/shelfie_products/${id}`).then(res=> {
        this.setState({ products: res.data })
    })
}

addButton(image, name, price) {
    axios.post(`${this.state.baseURL}/shelfie_products`, {image: image, name: name, price: price}).then(res => {
      console.log(res.data)
      this.setState({products: res.data })
    })
}

  render() {
   

    return (
      <div className="App">

          <div className="header">
            <Header />
          </div>
          <div className="dashboard">
           <Dashboard products={this.state.products}
                     deleteProduct={this.deleteProduct}
                     />
          <div className="form">
            <Form addButton={this.addButton}/>
          </div>
          
          </div>
          
      </div>
    );
  }
}

export default App;
