import React from 'react';
import Group from './components/Group';
import FilterAddBar from '../../components/FilterAddBar';
import {
  View,
  FlatList,
  StyleSheet, Text
} from 'react-native';
import { connect } from 'react-redux'
import styles from './styles'
const createGroup = ({item}) => <Group group={item}/>;

const groupListKeyExtractor = (item) => item.id;

const GroupList = ({groups, groupsLoading}) => (
  <View style={styles.container}>
    <FilterAddBar/>
    <FlatList
      data={groups}
      renderItem={createGroup}
      keyExtractor={groupListKeyExtractor}
    />
  </View>
)

const mapStateToProps = (store) => ({
  groups: store.group.groups,
  groupsLoading: store.group.groupsLoading
})

export default connect(mapStateToProps)(GroupList);