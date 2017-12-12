import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './screens/dashboard';
import BookDetail from './screens/bookDetail';
import NotFoundPage from './components/NotFoundPage';
import './style.css';
import { ROOT, DASHBOARD, BOOKS } from '../config/routes';

class App extends Component {
  render() {
    return (
    <Router className="app">
      <div>
        <Header/>
        <Switch>
          <Route exact path={ROOT} render={() =>
              <Redirect to={DASHBOARD}/>
          }/>
        <Route path={DASHBOARD} component={Dashboard}/>
          <Route path={`${BOOKS}/:id`} component={BookDetail}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
    );
  }
}
export default App;
