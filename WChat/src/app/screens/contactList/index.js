import React from 'react';
import Contact from '../../components/Contact';
import {
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'; 
import { connect } from 'react-redux';
import styles from './styles'
import FilterAddBar from '../../components/FilterAddBar';

const createContact = (navigation) => ({item}) => 
  <TouchableOpacity 
    onPress={() => {
      navigation.navigate('Chat', {contact: item})}}>
    <Contact contact={item} />
  </TouchableOpacity>;

const contactListKeyExtractor = (item) => item.id;

const ContactList = ({contacts, navigation}) => (
  <View style={styles.container}>
    <FilterAddBar/>
    <FlatList
      data={contacts}
      renderItem={createContact(navigation)}
      keyExtractor={contactListKeyExtractor}
    />
  </View>
)

const mapStateToProps = (store) => ({
  contacts: store.user.contacts
})

export default connect(mapStateToProps)(ContactList);
