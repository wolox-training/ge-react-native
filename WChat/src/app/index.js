import React from 'react';
import {
  View
} from 'react-native';
import styles from './styles';
import RootNavigator from './components/RootNavigator';
import { Provider } from 'react-redux';
import store from './redux/store';



const App = () => (
  <Provider store={store}>
  <View style={styles.container}>
    <RootNavigator/>
  </View>
  </Provider>
);

export default App;
