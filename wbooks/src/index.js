import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './equalizer.css';
import store from './app/redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>
  ,
  document.getElementById('root')
);
