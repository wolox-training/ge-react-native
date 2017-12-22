import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './screens/dashboard';
import BookDetail from './screens/bookDetail';
import NotFoundPage from './components/NotFoundPage';
import Login from './screens/login';
import './style.css';
import {ROOT, DASHBOARD, BOOKS, LOGIN} from '../config/routes';
import store from './redux/store';
import { connect } from 'react-redux'; 
 
const App = () => (
    <Router className="app">
      <div>
        <Header/>
        <Switch>
          <Route exact path={ROOT} render={() =>
                <Redirect to={DASHBOARD}/>
            }/>
          <PrivateRoute path={DASHBOARD} component={Dashboard}/>
          <PrivateRoute path={`${BOOKS}/:id`} component={BookDetail}/>
          <Route path={LOGIN} component={Login}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    store.getState().auth.isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: LOGIN,
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const mapStateToProps = (store) => ({
  isLoggedIn: store.auth.isLoggedIn
})

export default connect(mapStateToProps)(App);
