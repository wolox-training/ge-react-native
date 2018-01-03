import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native'; 
import { connect } from 'react-redux';
import styles from './styles'
import userActions from '../../redux/user/actions';
import groupActions from '../../redux/group/actions';

const renderChat = (userId, showSenders) => ({item}) => <Text style={parseInt(item.senderId) === parseInt(userId) ? styles.chatBodyMe : styles.chatBodyHim}>{(item.body)}</Text>

const chatKeyExtractor = (item) => item.id;

class Chat extends Component {
  navParams = this.props.navigation.state.params;
  state = {showSenders: false}
  componentWillMount(){
    if(this.navParams.contact) {
      this.updateChats = () => (this.props.getChats(this.props.user.id, this.navParams.contact.id));
      const contactId = this.navParams.contact.id;
      this.setState({chats: this.props.contacts.find((item) => item.id === contactId).chats});
    }

    if(this.navParams.group) {
      this.updateChats = () => (this.props.getGroupChats(this.navParams.group.id));
      const groupId = this.navParams.group.id;
      this.setState({
        chats: this.props.groups.find((item) => item.id === groupId).chats,
        showSenders: true
      });
    }

    this.updateChats(); 
  }

  render(){
    const userId = this.props.user.id;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.chats}
          renderItem={renderChat(userId, this.state.showSenders)}
          keyExtractor={chatKeyExtractor} 
          />
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
  user: store.user.user,
  contacts: store.user.contacts,
  groups: store.group.groups
})

const mapDispatchToProps = (dispatch) => ({
  getChats: (userId, receiverId) => {
    dispatch(userActions.getChats(userId, receiverId));
  },
  getGroupChats: (groupId) => {
    dispatch(groupActions.getGroups(groupId));
  },
})

export default connect(mapStateToProps,mapDispatchToProps)(Chat);
