import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native'; 
import { connect } from 'react-redux';
import styles from './styles'
import userActions from '../../redux/user/actions';

const renderChat = (userId) => ({item}) => <Text style={parseInt(item.senderId) === parseInt(userId) ? styles.chatBodyMe : styles.chatBodyHim}>{(item.body)}</Text>

const chatKeyExtractor = (item) => item.id;

class Chat extends Component {

  componentWillMount(){
    this.props.getChats(this.props.user.id, this.props.navigation.state.params.contact.id);
  }

  render(){
    let contactId = this.props.navigation.state.params.contact.id;
    const userId = this.props.user.id;
    let contact = this.props.contacts.find((item) => item.id === contactId)

    return (
      <View style={styles.container}>
        <FlatList
          data={contact.chats}
          renderItem={renderChat(userId)}
          keyExtractor={chatKeyExtractor}/>
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
  user: store.user.user,
  contacts: store.user.contacts
})
const mapDispatchToProps = (dispatch) => ({
  getChats: (userId, receiverId) => {
    dispatch(userActions.getChats(userId, receiverId));
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Chat);
