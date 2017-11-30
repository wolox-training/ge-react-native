import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './screens/dashboard';
import BookDetail from './screens/bookDetail';
import NotFoundPage from './components/NotFoundPage';
import './style.css';

class App extends Component {
  render() {
    return (
    <Router className="app">
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" render={() => 
              <Redirect to="/dashboard"/>
          }/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/books/:id" component={BookDetail}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
    );
  }
}
export default App;
