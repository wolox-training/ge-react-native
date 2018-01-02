import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './styles';

const Group = ({ group }) => {
  return(
  <View style={styles.groupContainer}>
    <View style={styles.groupDataContainer}>
      <Text style={styles.groupName}>{group.name}</Text>
      <Text style={styles.groupLastMessage} numberOfLines={1} >{group.lastChat? group.lastChat.body : ''}</Text>
    </View>
  </View>
)}

export default Group;