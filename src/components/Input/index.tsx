import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../utils/colors';

export default function Input(props) {

  return <View style={[styles.viewInput, props.style]}>
    {props.icon ?
      <View style={styles.viewIcon}>
        <Ionicons name={props.icon} color={colors.gray} size={20} />
      </View>
      : <></>}
    <TextInput
      value={props.value}
      editable={!props.mode}
      keyboardType={props.mode === 'date' || props.mode === 'time' ? 'numeric' : 'default'}
      placeholder={props.placeholder}
      style={[styles.input, !props.icon && styles.inputNoIcon, props.textStyle]}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
    {props.mode && (
      <View style={{ paddingHorizontal: 5 }}>
        <Ionicons name="create-outline" color={colors.gray} size={24} onPress={props.onPress} />
      </View>
    )}
  </View>;
}
