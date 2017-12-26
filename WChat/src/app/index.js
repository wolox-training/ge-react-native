import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import ContactList from './screens/contactList';
import styles from './styles';
import RootNavigator from './components/RootNavigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const App = () => (
  <View style={styles.container}>
    <RootNavigator/>
  </View>
);

export default App;