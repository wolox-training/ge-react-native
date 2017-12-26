import React, { Component } from 'react';
import contacts from '../../../../resources/contacts.json';
import Contact from './components/Contact';
import {
  View,
  SectionList,
  ListItem,
  Text,
  StyleSheet
} from 'react-native';
import styles from './styles'

console.log(contacts);
let asd = [{id: 'pe'}];
export default class ContactList extends Component {
  render() {
    
    const createContactsHeader = ({section}) => 
      <Text style={styles.sectionHeader}>
        <Text style={section.title==='Online' ? styles.onlineBullet : styles.offlineBullet}>
          &bull;&nbsp;
        </Text>
        {section.title}
      </Text>;

    return (
        <View style={styles.container}>
          <SectionList
            sections={[
            {title: 'Online', data: contacts},
            {title: 'Offline', data: []},
            ]}
            renderItem={({item}) => <Contact contact={item}/>}
            renderSectionHeader={createContactsHeader}
            keyExtractor={(item, index) => index}
          />
        </View>
      )
  }
}


