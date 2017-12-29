import React from 'react';
import Contact from '../../components/Contact';
import {
  View,
  FlatList,
  StyleSheet,
  Text
} from 'react-native'; 
import { connect } from 'react-redux';
import styles from './styles'

const createContact = ({ item }) => <Contact contact={item}/>;

const contactListKeyExtractor = (item) => item.id;

const ContactList = ({contacts}) => (
  <View style={styles.container}>
    <FlatList
      data={contacts}
      renderItem={createContact}
      keyExtractor={contactListKeyExtractor}
    />
  </View>
)

const mapStateToProps = (store) => ({
  user: store.user.user,
  contacts: store.user.contacts,
  appLoading: store.user.appLoading
})

export default connect(mapStateToProps)(ContactList);
