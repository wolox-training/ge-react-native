import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { connect } from 'react-redux';
import userActions from '../../redux/user/actions';

const ADD_LABEL = 'Nombre:'

class AddNew extends Component {
  state = {
    input: '',
    lengthError: false,
  }

  handleCreate = () => {
    if(this.state.input.length < 5){
      this.setState({lengthError: true});
      return;
    }
    this.props.createUser(this.state.input);
    this.props.navigation.goBack();
  }

  handleTextChange = (input) => {
    if(this.state.input.length > 5)
      this.setState({lengthError: false});
    this.setState({input});
  }

  render() {
    return (
      <View>
        <View style={styles.addContainer}>
          <Text style={styles.label}>{ADD_LABEL}</Text>
          <TextInput style={styles.input} onChangeText={this.handleTextChange} />
          <Icon name="md-add" size={30} style={styles.addIcon} onPress={this.handleCreate} />
        </View>
        {this.state.lengthError && <Text style={styles.error}>El usuario debe tener al menos 5 caracteres</Text>}
      </View>)
  }

}

const mapDispatchToProps = (dispatch) => ({
  createUser: (name) => {
    dispatch(userActions.createUser(name));
  },
});

export default connect(null, mapDispatchToProps)(AddNew);