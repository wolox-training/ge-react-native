import React, { Component } from 'react';
import contacts from '../../../../resources/contacts.json';
import Contact from './components/Contact';
import {
  View,
  SectionList,
  ListItem,
  Header,
  Text,
  StyleSheet
} from 'react-native';
import styles from './styles'

console.log(contacts);
let asd = [{id: 'pe'}];
export default class ContactList extends Component {
  render() {
    return (
        <View style={styles.container}>
         <SectionList
          sections={[
            {title: 'Online', data: contacts},
            {title: 'Offline', data: []},
          ]}
          renderItem={({item}) => <Contact contact={item}/>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}><Text style={section.title==='Online' ? styles.onlineBullet : styles.offlineBullet}>&bull; </Text>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        </View>
      )
  }
}
