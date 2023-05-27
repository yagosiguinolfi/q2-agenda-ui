import React from 'react';
import { TextInput, View, Image, ImageRequireSource } from 'react-native';
import styles from './styles';

const userIcon = require('../../assets/icons/user-grey.png');
const passIcon = require('../../assets/icons/pass-grey.png');

export default function Input(props) {
  const icons = {
    username: userIcon,
    password: passIcon
  }
  return <View style={{ flexDirection: 'row', marginVertical: 5 }}>
    {props.name ?
      <View style={styles.viewIcon}>
        <Image source={icons[props.name]} resizeMode='contain' />
      </View>
      : <></>}
    <TextInput
      {...props}
      style={styles.input}
    />
  </View>;
}
