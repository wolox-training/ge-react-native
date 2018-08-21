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
const reduceChats = (accum, current) => {
      let last = accum[accum.length-1];
      if(accum.length === 0){
        accum.push(current);
      }else if(last.senderId == current.senderId){
        const updated = {
          ...last,
          body: last.body.concat('\n', current.body),
          createdAt: current.createdAt
        };
        updated.body = current.body.concat('\n', last.body);
        last.createdAt = current.createdAt;
        accum.pop()
        accum.push(updated);        
      } else {
        accum.push(current);
      }
      return accum;
    }
const chatKeyExtractor = (item) => item.id;

const ChatsList = ({userId, isGroup, contacts, chats, handleLoadMore}) => {

  let compressedChats = chats.reduce(reduceChats, []);


  return <FlatList
    inverted
    style={styles.chatList}
    data={compressedChats}
    renderItem={renderChat(userId, isGroup, contacts)}
    keyExtractor={chatKeyExtractor} 
    onEndReached={handleLoadMore}
    onEndReachedThreshold={.5}
    />
}

export default ChatsList;
