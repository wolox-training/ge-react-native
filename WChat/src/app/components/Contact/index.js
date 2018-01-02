import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styles from './styles';

const Contact = ({contact}) =>(
  <View style={styles.contactContainer}>
    <Image
      style={styles.contactImage}
      source={{uri: contact.avatar}}
    />
    <View style={styles.contactDataContainer}>
      <Text style={styles.contactName}>{contact.username}</Text>
      <Text style={styles.contactLastMessage} numberOfLines={1} >{contact.lastChat? contact.lastChat.body : ''}</Text>
    </View>
  </View>
)

export default Contact;