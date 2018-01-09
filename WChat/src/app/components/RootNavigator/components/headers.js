import React from 'react';
import { View, Image, Text, Platform } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import styles from './styles';

export const IosHeader = ({goBack, title, avatar}) => (
  <View style={styles.header}>
    <HeaderBackButton onPress={goBack} />
    {avatar &&
      <Image
      style={styles.headerAvatar}
      source={{uri: avatar}}
      />}
    <Text style={styles.headerTitle}>{title}</Text>
  </View> )

export const AndroidHeader = ({goBack, title, avatar}) => (
  <View style={styles.header}>
    <HeaderBackButton onPress={goBack} />
    {avatar &&
      <Image
      style={styles.headerAvatar}
      source={{uri: avatar}}
    />}
    <Text style={styles.headerTitle}>{title}</Text>
  </View> )
