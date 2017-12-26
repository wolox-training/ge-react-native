import React, { Component } from 'react';
import groups from '../../../../resources/groups.json';
import Group from './components/Group';
import {
  View,
  FlatList,
  ListItem,
  Text,
  StyleSheet
} from 'react-native';
import styles from './styles'

const GroupList = () => (
  <View style={styles.container}>
    <FlatList
      data={groups}
      renderItem={({item}) => <Group group={item}/>}
      keyExtractor={(item, index) => index}
    />
  </View>
)

export default GroupList;