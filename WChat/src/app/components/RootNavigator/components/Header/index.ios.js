import React from 'react';
import { View, Image, Text, Platform } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import styles from './styles';

const Header = ({goBack, title, avatar}) => (
  <View style={styles.header}>
    <HeaderBackButton onPress={goBack} />
    {avatar?
      <Image
      style={styles.headerAvatar}
      source={{uri: avatar}}
      /> : null}
    <Text style={styles.headerTitle}>{title}</Text>
  </View> )
export default Header;
