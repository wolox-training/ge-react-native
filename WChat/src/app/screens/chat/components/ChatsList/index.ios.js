import React from 'react';
import { FlatList } from 'react-native';
import styles from './styles';
import Bubble from '../Bubble';

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

const ChatsList = ({userId, isGroup, contacts, chats, handleLoadMore}) => 
  <FlatList
    inverted
    style={styles.chatList}
    data={chats}
    renderItem={renderChat(userId, isGroup, contacts)}
    keyExtractor={chatKeyExtractor} 
    onEndReached={handleLoadMore}
    onEndReachedThreshold={.5}
    />

export default ChatsList;
