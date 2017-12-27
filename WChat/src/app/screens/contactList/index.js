import React from 'react';
import contacts from '../../../../resources/contacts.json';
import Contact from '../../components/Contact';
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native'; 
import styles from './styles'
import FilterAddBar from '../../components/FilterAddBar';

const createContact = ({item}) => <Contact contact={item}/>;

const contactListKeyExtractor = (item) => item.id;

const ContactList = () => (
  <View style={styles.container}>
    <FilterAddBar/>
    <FlatList
      data={contacts}
      renderItem={createContact}
      keyExtractor={contactListKeyExtractor}
    />
  </View>
)

export default ContactList;
