import React from 'react';
import Contact from '../../components/Contact';
import {
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'; 
import { connect } from 'react-redux';
import styles from './styles'
import userActions from '../../redux/user/actions';

const createContact = (navigation, userId) => ({item}) => 
  item.id !== userId &&
    <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Chat', {contact: item})}}>
      <Contact contact={item} />
    </TouchableOpacity>;

const contactListKeyExtractor = (item) => item.id;

const ContactList = ({contacts, navigation, user, loadMore}) => (
  <View style={styles.container}>
    <FlatList
      data={contacts}
      renderItem={createContact(navigation, user.id)}
      keyExtractor={contactListKeyExtractor}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  </View>
)

const mapStateToProps = (store) => ({
  user: store.user.user,
  contacts: store.user.contactsShowing
})

const mapDispatchToProps = (dispatch) => ({
  loadMore: (userId) => {
    dispatch(userActions.loadMoreContacts(userId));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
