import React from 'react';
import { View, Image, Text, Platform } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import styles from './styles';

export const IosContactHeader = ({goBack, contact}) => (
  <View style={styles.header}>
    <HeaderBackButton onPress={goBack} />
    <Image
      style={styles.headerAvatar}
      source={{uri: contact.avatar}}
    />
    <Text style={styles.headerTitle}>{contact.username}</Text>
  </View> )

export const AndroidContactHeader = ({goBack, contact}) => (
  <View style={styles.header}>
    <HeaderBackButton onPress={goBack} />
    <Image
      style={styles.headerAvatar}
      source={{uri: contact.avatar}}
    />
    <Text style={styles.headerTitle}>{contact.username}</Text>
  </View> )

export const IosGroupHeader = ({goBack, group}) => (
  <View style={styles.header}>
    <HeaderBackButton onPress={goBack} />
    <Text style={styles.headerTitle}>{group.name}</Text>
  </View> )

export const AndroidGroupHeader = ({goBack, group}) => (
  <View style={styles.header}>
    <HeaderBackButton onPress={goBack} />
    <Text style={styles.headerTitle}>{group.name}</Text>
  </View> )