import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './screens/dashboard';
import BookDetail from './screens/bookDetail';
import NotFoundPage from './components/NotFoundPage';
import Login from './screens/login';
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
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <PrivateRoute path="/books/:id" component={BookDetail}/>
          <Route path="/login" component={Login}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
    );
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('isLoggedIn') ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
export default App;
