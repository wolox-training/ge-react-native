import React, { Component } from 'react';
import contacts from '../../../../resources/contacts.json';
import Contact from './components/Contact';
import {
  View,
  SectionList,
  Text
} from 'react-native';
import styles from './styles'

const createContactsHeader = ({section}) => 
  <Text style={styles.sectionHeader}>
    <Text style={section.title==='Online' ? styles.onlineBullet : styles.offlineBullet}>
      &bull;&nbsp;
    </Text>
    {section.title}
  </Text>;

const createContact = ({item}) => <Contact contact={item}/>;

const contactListKeyExtractor = (item, index) => item.id;

export default class ContactList extends Component {
  
  sections = [
    {title: 'Online', data: contacts},
    {title: 'Offline', data: []},
  ];

  render() { 
    return (
        <View style={styles.container}>
          <SectionList
            sections={this.sections}
            renderItem={createContact}
            renderSectionHeader={createContactsHeader}
            keyExtractor={contactListKeyExtractor}
          />
        </View>
      )
  }
}


