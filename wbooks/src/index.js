import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './equalizer.css';
import { createStore } from 'redux';
import RootReducer from './app/reducers';
import { Provider } from 'react-redux';

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>
  ,
  document.getElementById('root')
);
