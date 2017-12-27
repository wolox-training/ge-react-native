import React from 'react';
import groups from '../../../../resources/groups.json';
import Group from './components/Group';
import FilterAddBar from '../../components/FilterAddBar';
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import styles from './styles'
const createGroup = ({item}) => <Group group={item}/>;

const groupListKeyExtractor = (item) => item.id;

const GroupList = () => (
  <View style={styles.container}>
    <FilterAddBar/>
    <FlatList
      data={groups}
      renderItem={createGroup}
      keyExtractor={groupListKeyExtractor}
    />
  </View>
)

export default GroupList;