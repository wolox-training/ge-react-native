import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native'; 
import { connect } from 'react-redux';
import styles from './styles'
import groupActions from '../../redux/group/actions';

const renderChat = (userId) => ({item}) => <Text style={parseInt(item.senderId) === parseInt(userId) ? styles.chatBodyMe : styles.chatBodyHim}>{(item.body)}</Text>

const chatKeyExtractor = (item) => item.id;

class GroupChat extends Component {

  componentWillMount(){
    this.props.getGroups(this.props.user.id);
  }

  render(){
    const userId = this.props.user.id
    let group = this.props.navigation.state.params.group;

    return (
      <View style={styles.container}>
        <FlatList
          data={group.chats}
          renderItem={renderChat(userId)}
          keyExtractor={chatKeyExtractor}/>
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
  user: store.user.user
})
const mapDispatchToProps = (dispatch) => ({
  getGroups: (userId) => {
    dispatch(groupActions.getGroups(userId));
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(GroupChat);
