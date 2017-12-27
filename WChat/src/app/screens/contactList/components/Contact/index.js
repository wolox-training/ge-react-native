import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styles from './styles';

let lastMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
export default class App extends Component {
  render(){
    return (
      <View style={styles.contactContainer}>
        <Image
          style={styles.contactImage}
          source={{uri: this.props.contact.avatar}}
        />
        <View style={styles.contactDataContainer}>
          <Text style={styles.contactName}>{this.props.contact.username}</Text>
          <Text style={styles.contactLastMessage} numberOfLines={1} >{lastMessage}</Text>
        </View>
      </View>
      )
  }
}
