import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import styles from './styles'


class FilterAddBar extends Component {
  state = {filter: '', filtering: false}
  handleCloseButtonPress = () => this.setState({filtering: false})
  handleSearchButtonPress = () => this.setState({filtering:true})
  render(){
    return (
    <View style={styles.filterAddBarContainer}>
      <Ionicons style={this.state.filtering ? styles.hiddenNode : styles.filterSearchIcon} name="md-search" size={26} onPress={this.handleSearchButtonPress}/>
      <TextInput style={this.state.filtering ? styles.filterTextInput : styles.hiddenNode} value={this.state.filter} onChangeText={(filter) => this.setState({filter})}/>
      <Text style={this.state.filtering ? styles.filterClose : styles.hiddenNode} onPress={this.handleCloseButtonPress}>&#10006;</Text>
      <Ionicons style={this.state.filtering ? styles.hiddenNode : styles.filterAdd} name="md-add" size={26}/>
    </View>
    );
  }
}

export default FilterAddBar;