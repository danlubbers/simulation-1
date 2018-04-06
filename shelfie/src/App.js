import React, { Component } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard.js';
import Header from './Component/Header/Header.js';
// import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      productsArray: [],
      baseURL: '/api'
    }
  }

  // componentDidMount() {
  //   axios.get(`${this.state.baseURL}/shelfie_products`).then(res=>{
  //     this.setState({
  //       productsArray: res.data
  //     })
  //   })
  // }
  render() {
    return (
      <div className="App">

          <div className="header">
            <Header />
          </div>

          <div className="dashboard">
          <Dashboard />
          {this.state.productsArray}
          </div>

      </div>
    );
  }
}

export default App;
