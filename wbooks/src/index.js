import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './equalizer.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './app/reducers';
import { Provider } from 'react-redux';

const store = createStore(RootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>
  ,
  document.getElementById('root')
);
