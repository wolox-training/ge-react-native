import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { connect } from 'react-redux';
import userActions from '../../redux/user/actions';

const ADD_PLACEHOLDER = 'Nombre:'

class addNew extends Component {
  state = {
    input: ''
  }

  handleCreate(){
    this.props.createUser(this.state.input);
  }

  render() {
    return (
      <View style={styles.addContainer}>
        <Text style={styles.label}>{ADD_PLACEHOLDER}</Text>
        <TextInput style={styles.input} />
        <Icon name="md-add" size={30} style={styles.addIcon} onPress={this.handleCreate} />
      </View>)
  }

}

const mapDispatchToProps = (dispatch) => ({
  createUser: (name) => {
    dispatch(userActions.createUser(name));
  }
});

export default connect(null, mapDispatchToProps)(addNew);