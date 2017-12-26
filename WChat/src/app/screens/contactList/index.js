import React, { Component } from 'react';
import contacts from '../../../../resources/contacts.json';
import Contact from './components/Contact';
import {
  View,
  FlatList,
  ListItem,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import styles from './styles'

class FilterAddBar extends Component {
  state = {filter: '', filtering: false}
  render(){
    return (
    <View style={{flexDirection: 'row'}}>
      <Ionicons style={this.state.filtering ? {display: 'none'} : {flex: 1, textAlign: 'center'}} name="md-search" size={26} onPress={() => this.setState({filtering:true})}/>
      <TextInput style={this.state.filtering ? {flex: 8} : {flex:8, display: 'none'}} value={this.state.filter} onChangeText={(filter) => this.setState({filter})}/>
      <Text style={!this.state.filtering ? {display: 'none'} : {flex: 1, textAlign: 'center', fontSize: 30,}} onPress={() => this.setState({filtering: false})}>&#10006;</Text>
      <Ionicons style={this.state.filtering ? {display: 'none'} : {flex: 1, textAlign: 'center'}} name="md-add" size={26}/>
    </View>
    );
  }
}

const ContactList = () => (
  <View style={styles.container}>
    <FilterAddBar/>
    <FlatList
      data={contacts}
      renderItem={({item}) => <Contact contact={item}/>}
      keyExtractor={(item, index) => index}
    />
  </View>
)

export default ContactList;