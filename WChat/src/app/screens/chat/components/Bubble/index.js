import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Bubble= ({body, mine, date, sender}) => 
  <View style={mine ? styles.chatBodyMe : styles.chatBodyHim}>
    {!mine && sender? <Text style={styles.sender}> {sender} </Text> : null}
    <Text style={styles.body}> {body} </Text>
    <Text style={styles.date}> {(new Date(date)).toLocaleString([], {hour: '2-digit', minute:'2-digit'})} </Text>
  </View>

  export default Bubble;