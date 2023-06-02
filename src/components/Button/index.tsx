import { TouchableOpacity, Text, ImageRequireSource, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../utils/colors';

const userIcon = require('../../assets/icons/user-grey.png');
const passIcon = require('../../assets/icons/pass-grey.png');

export default function Button(props) {
  
  return (
    <TouchableOpacity      
      style={[styles.button, props.buttonStyle, {width: props.buttonWidth || 200}]}
      onPress={props.onPress}
      {...props}
    >
      {props.icon ?
        <Ionicons name={props.icon} color={colors.white} size={20}/>
        : <></>}
      <Text style={[{ color: props.textColor || 'white', fontSize: 18 }]}>{props.text}</Text>
    </TouchableOpacity>
  )
}