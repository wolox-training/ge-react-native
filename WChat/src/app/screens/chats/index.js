import React from 'react';
import contacts from '../../../../resources/contacts.json';
import Contact from '../../components/Contact';
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import styles from './styles'

const ContactList = () => (
  <View style={styles.container}>
    <FlatList
      data={contacts}
      renderItem={({item}) => <Contact contact={item}/>}
      keyExtractor={(item, index) => index}
    />
  </View>
)

export default ContactList;