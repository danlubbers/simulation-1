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
    // References to controller.js and connects to getAllProducts.sql
    axios.get(`${this.state.baseURL}/getAllProducts`).then(res=>{
      console.log("ARRAY is Loading!!!")
      this.setState({
        products: res.data
      })
      // Logs the response.data off of getAllProducts
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
          {/* products and deleteProduct are placed here to pass props to the Dashboard Component */}
           <Dashboard products={this.state.products}
                     deleteProduct={this.deleteProduct}
                     />
          <div className="form">
                  {/* addButton={this.addButton} is to use for props on the Form Component */}
            <Form addButton={this.addButton}/>
          </div>
          
          </div>
          
      </div>
    );
  }
}

export default App;
