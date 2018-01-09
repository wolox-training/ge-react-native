import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native'; 
import { connect } from 'react-redux';
import styles from './styles'
import userActions from '../../redux/user/actions';
import groupActions from '../../redux/group/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatsList from './components/ChatsList';
import backgroundImage from '../../../../assets/chatBackground.jpg';

class Chat extends Component {
  navParams = this.props.navigation.state.params;
  state = {isGroup: false, text: '', receiverId: null};

  componentWillMount(){
    if(this.navParams.contact) {
      this.updateChats = () => (this.props.getChats(this.props.user.id, this.navParams.contact.id));
      const contactId = this.navParams.contact.id;
      this.setState({
        chats: this.props.contacts.find((item) => item.id === contactId).chats,
        receiverId: contactId
      });
    } else if (this.navParams.group) {
      this.updateChats = () => (this.props.getGroupChats(this.navParams.group.id));
      const groupId = this.navParams.group.id;
      this.setState({
        chats: this.props.groups.find((item) => item.id === groupId).chats,
        isGroup: true,
        receiverId: groupId
      });
    }
    this.updateChats(); 
    this.poll = setInterval(this.updateChats, 5000)
  }
  
  componentWillUnmount(){
    clearInterval(this.poll);
  }

  handleTextChange = (text) => {
    this.setState({text});
  }

  handleSend = () => {
    if(this.state.text.length < 1)
      return;
    if(this.state.isGroup)
      this.props.sendGroupMessage(this.state.text, this.props.user.id, this.state.receiverId);
    else
      this.props.sendPrivateMessage(this.state.text, this.props.user.id, this.state.receiverId);

    this.setState({text: ''})
  }
  render(){
    const userId = this.props.user.id;
    const currentChat = (this.state.isGroup? this.props.currentGroupChat : this.props.currentChat);

    return (
        <ImageBackground
          style={styles.backImage}
          source={backgroundImage}
         >
          <ChatsList userId={userId} isGroup={this.state.isGroup} contacts={this.props.contacts} chats={currentChat} />
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} value={this.state.text} onChangeText={this.handleTextChange}/>
            <TouchableOpacity style={styles.sendButton}
              onPress={this.handleSend}>
              <Icon name="md-arrow-forward" size={30}/>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    )
  }
}

const mapStateToProps = (store) => ({
  user: store.user.user,
  contacts: store.user.contacts,
  groups: store.group.groups,
  currentChat: store.user.currentChat,
  currentGroupChat: store.group.currentGroupChat
})

const mapDispatchToProps = (dispatch) => ({
  getChats: (userId, receiverId) => {
    dispatch(userActions.getChats(userId, receiverId));
  },
  getGroupChats: (groupId) => {
    dispatch(groupActions.getChats(groupId));
  },
  sendPrivateMessage: (body, userId, receiverId) => {
    dispatch(userActions.sendPrivateMessage(body, userId, receiverId))
  },
  sendGroupMessage: (body, userId, groupId) => {
    dispatch(groupActions.sendGroupMessage(body, userId, groupId))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Chat);
