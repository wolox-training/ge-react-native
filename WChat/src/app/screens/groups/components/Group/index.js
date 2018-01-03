import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './styles';

const Group = ({ group }) => (
  <View style={styles.groupContainer}>
    <View style={styles.groupDataContainer}>
      <Text style={styles.groupName}>{group.name}</Text>
    </View>
  </View>
)

export default Group;