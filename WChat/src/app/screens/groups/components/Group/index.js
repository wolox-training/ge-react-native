import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styles from './styles';

const Group = ({group}) => (
  <View style={styles.groupContainer}>
    <View style={styles.groupDataContainer}>
      <Text style={styles.groupName}>{group.name}</Text>
    </View>
  </View>
)

export default Group;