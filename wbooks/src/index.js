import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './equalizer.css';
import { createStore } from 'redux';
import RootReducer from './app/reducers';
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore(RootReducer);

ReactDOM.render((
  <Router className="app">
  	<App store={store} />
  </Router>
  ),
  document.getElementById('root')
);
