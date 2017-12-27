import React from 'react';
import {
  View
} from 'react-native';
import styles from './styles';
import RootNavigator from './components/RootNavigator';


const App = () => (
  <View style={styles.container}>
    <RootNavigator/>
  </View>
);

export default App;