import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native'; 
import { connect } from 'react-redux';
import styles from './styles'
import userActions from '../../redux/user/actions';
import groupActions from '../../redux/group/actions';
import Bubble from './components/Bubble';
import Reactotron from 'reactotron-react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const renderChat = (userId, isGroup, contacts) => (
   ({item}) => {
    let senderName = null;
    if(isGroup){
      senderName = contacts.find((contact) => contact.id === item.senderId).username;
    }
    return <Bubble mine={parseInt(item.senderId) === parseInt(userId)} body={item.body} date={item.createdAt} sender={senderName} />;
  }
)

const chatKeyExtractor = (item) => item.id;

class Chat extends Component {
  navParams = this.props.navigation.state.params;
  state = {isGroup: false, text: '', receiverId: null}
  componentWillMount(){
    if(this.navParams.contact) {
      this.updateChats = () => (this.props.getChats(this.props.user.id, this.navParams.contact.id));
      const contactId = this.navParams.contact.id;
      this.setState({
        chats: this.props.contacts.find((item) => item.id === contactId).chats, 
        receiverId: contactId
      });
    }

    if(this.navParams.group) {
      this.updateChats = () => (this.props.getGroupChats(this.navParams.group.id));
      const groupId = this.navParams.group.id;
      this.setState({
        chats: this.props.groups.find((item) => item.id === groupId).chats,
        isGroup: true,
        receiverId: groupId
      });
    }

    this.updateChats(); 
  }
  handleTextChange = (text) =>{
    this.setState({text});
  }
  handleSend = () => {
    if(this.state.text.length < 1)
      return;
    this.props.sendPrivateMessage(this.state.text, this.props.user.id, this.state.receiverId);
    this.setState({text: ''})
  }
  render(){
    const userId = this.props.user.id;
    return (
      <View style={styles.container}>
          <FlatList
            style={styles.chatList}
            data={this.props.currentChat}
            renderItem={renderChat(userId, this.state.isGroup, this.props.contacts)}
            keyExtractor={chatKeyExtractor} 
            />
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} value={this.state.text} onChangeText={this.handleTextChange}/>
          <TouchableOpacity style={styles.sendButton}
            onPress={this.handleSend}>
            <Icon name="md-arrow-forward" size={30}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
  user: store.user.user,
  contacts: store.user.contacts,
  groups: store.group.groups,
  currentChat: store.user.currentChat
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
    dispatch(groupActions.sendGroupMessage(groupId))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Chat);
