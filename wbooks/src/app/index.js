import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './screens/dashboard';
import BookDetail from './screens/bookDetail'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './style.css';

class App extends Component {
  render() {
    return (
    <Router className="app">
      <div>
        <Header/>

        <Route exact path="/" render={() => 
            <Redirect to="/dashboard"/>
        }/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/books/:id" component={BookDetail}/>
      </div>
    </Router>
    );
  }
}

export default App;
