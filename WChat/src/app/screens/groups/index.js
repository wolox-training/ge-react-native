import React from 'react';
import Group from './components/Group';
import FilterAddBar from '../../components/FilterAddBar';
import {
  View,
  FlatList,
  StyleSheet, 
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import styles from './styles'
import groupActions from '../../redux/group/actions';

const createGroup = (navigation) => ({item}) => 
  <TouchableOpacity 
    onPress={() => {
      navigation.navigate('Chat', {group: item})}}>
    <Group group={item}/>
  </TouchableOpacity>

const groupListKeyExtractor = (item) => item.id;

const GroupList = ({groups, groupsLoading, navigation, loadMore}) => (
  <View style={styles.container}>
    <FilterAddBar/>
    <FlatList
      data={groups}
      renderItem={createGroup(navigation)}
      keyExtractor={groupListKeyExtractor}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  </View>
)

const mapStateToProps = (store) => ({
  groups: store.group.groups,
  groupsLoading: store.group.groupsLoading
})

const mapDispatchToProps = (dispatch) => ({
  loadMore: () => {
    dispatch(groupActions.loadMoreChat());
  }
}) 

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);