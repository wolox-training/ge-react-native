import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import styles from './styles'


class FilterAddBar extends Component {
  state = {filter: '', filtering: false}
  handleCloseButtonPress = () => this.setState({filtering: false})
  handleSearchButtonPress = () => this.setState({filtering:true})
  handleChangeText = (filter) => this.setState({filter})
  render(){
    return (
    <View style={styles.filterAddBarContainer}>
      <IonIcons style={this.state.filtering ? styles.hiddenNode : styles.filterSearchIcon} name="md-search" size={26} onPress={this.handleSearchButtonPress}/>
      <TextInput style={this.state.filtering ? styles.filterTextInput : styles.hiddenNode} value={this.state.filter} onChangeText={this.handleChangeText}/>
      <Text style={this.state.filtering ? styles.filterClose : styles.hiddenNode} onPress={this.handleCloseButtonPress}>&#10006;</Text>
      <IonIcons style={this.state.filtering ? styles.hiddenNode : styles.filterAdd} name="md-add" size={26} onPress={this.props.handleAdd}/>
    </View>
    );
  }
}

export default FilterAddBar;