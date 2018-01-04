import React from 'react';
import { TabNavigator, StackNavigator, HeaderBackButton } from 'react-navigation'; // 1.0.0-beta.14
import { View, Image, Text, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import ContactList from '../../screens/contactList';
import Chats from '../../screens/chats';
import Groups from '../../screens/groups';
import Chat from '../../screens/chat';
import { AndroidHeader, IosHeader } from './components/headers';

const HomeTabs = TabNavigator({
  Chats: {
    screen: Chats,
    navigationOptions: {
      tabBarLabel: 'Chats',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Grupos: {
    screen: Groups,
    navigationOptions: {
      tabBarLabel: 'Grupos',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Contactos: {
    screen: ContactList,
    navigationOptions: {
      tabBarLabel: 'Contactos',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  }
});

const RootStack = StackNavigator({
  Home: {
    screen: HomeTabs,
    navigationOptions: {
      headerTitle: 'Home',
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({navigation}) => (
      {
        header: navigation.state.params.contact? 
          Platform.OS === 'ios' ? 
            <IosHeader goBack={ () => navigation.goBack(null) } title={navigation.state.params.contact.username} avatar={navigation.state.params.contact.avatar} /> 
            :
            <AndroidHeader goBack={ () => navigation.goBack(null) } title={navigation.state.params.contact.username} avatar={navigation.state.params.contact.avatar} />
          : 
          Platform.OS === 'ios' ?
            <IosHeader goBack={ () => navigation.goBack(null) } title={navigation.state.params.group.name} />
            :
            <AndroidHeader goBack={ () => navigation.goBack(null) } title={navigation.state.params.group.name} />
      })
  },
})

export default RootStack;