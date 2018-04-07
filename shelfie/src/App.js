import React, { Component } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard.js';
import Header from './Component/Header/Header.js';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      baseURL: '/api'
    }
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
  render() {
    let productsArray = this.state.products.map((element, index)=> {
      return(
        <div key={index} className="products-list">
        <div>
          <img  className="products-image" src={element.image_url} alt="arcteryx products"/>
        </div>
        <div className="product-box">
          <h1>{element.name}</h1>
          <h1>${element.price}</h1>
        </div> 
          
        </div>
      )
    })

    return (
      <div className="App">

          <div className="header">
            <Header />
          </div>

          <div className="dashboard">
          <Dashboard />
          <div>{productsArray}</div>
          </div>

      </div>
    );
  }
}

export default App;
