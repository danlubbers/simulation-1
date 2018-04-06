import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard.js';
import Form from './Component/Form/Form.js';
import Product from './Component/Product/Product.js';
import Header from './Component/Header/Header.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
