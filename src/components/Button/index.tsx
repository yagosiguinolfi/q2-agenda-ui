import { TouchableOpacity, Text, ImageRequireSource, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const userIcon = require('../../assets/icons/user-grey.png');
const passIcon = require('../../assets/icons/pass-grey.png');

export default function Button(props) {
  const icons = {
    username: userIcon,
    password: passIcon
  }
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
      {...props}
    >
      {props.icon ?
        <Image source={icons[props.icon]} resizeMode='contain' />
        : <></>}
      <Text style={{ color: 'white', fontSize: 20 }}>{props.text}</Text>
    </TouchableOpacity>
  )
}