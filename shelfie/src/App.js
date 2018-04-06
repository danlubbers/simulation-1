import React, { Component } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard.js';
import Header from './Component/Header/Header.js';


class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="header">
            <Header />
          </div>

          <div className="dashboard">
          <Dashboard />
          </div>

      </div>
    );
  }
}

export default App;
