import React from 'react';
import Contact from '../../components/Contact';
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native'; 
import { connect } from 'react-redux';
import styles from './styles'
import FilterAddBar from '../../components/FilterAddBar';

const createContact = ({item}) => <Contact contact={item}/>;

const contactListKeyExtractor = (item) => item.id;

const ContactList = ({contacts}) => (
  <View style={styles.container}>
    <FilterAddBar/>
    <FlatList
      data={contacts}
      renderItem={createContact}
      keyExtractor={contactListKeyExtractor}
    />
  </View>
)

const mapStateToProps = (store) => ({
  contacts: store.user.contacts
})

export default connect(mapStateToProps)(ContactList);
