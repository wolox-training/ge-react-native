import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './screens/dashboard/index';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
