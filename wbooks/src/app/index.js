import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './screens/dashboard/index';

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
