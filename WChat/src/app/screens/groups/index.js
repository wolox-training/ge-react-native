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

const GroupList = () => (
  <View style={styles.container}>
    <FilterAddBar/>
    <FlatList
      data={groups}
      renderItem={({item}) => <Group group={item}/>}
      keyExtractor={(item, index) => index}
    />
  </View>
)

export default GroupList;