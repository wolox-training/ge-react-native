import './src/app/ReactotronConfig';
import { AppRegistry } from 'react-native';
import App from './src/app';
import { Provider } from 'react-redux';
import store from './src/app/redux/store';
import React from 'react';

const wchat = () => <Provider store={store}><App/></Provider>;
AppRegistry.registerComponent('WChat', () => wchat);
