import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../utils/colors';

export default function CardTask(props) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={[styles.card, checked && styles.cardChecked]}>
      <View style={styles.topView}>
        <TouchableOpacity
          style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          onPress={() => setChecked(!checked)}>
          {checked && <Ionicons name="checkmark" size={20} color="white" />}
        </TouchableOpacity>
        <Text style={[styles.description, checked && styles.sublime]}>
          {props.text}
        </Text>
        <TouchableOpacity onPress={props.onPress}>
          <Ionicons name="trash-outline" size={24} color={colors.red}  onPress={props.onPress}/>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
          <Ionicons name="time-outline" size={24} color={colors.black} />
          <Text style={{ marginHorizontal: 5 }}>{props.time}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
          <Ionicons name="calendar-outline" size={24} color={colors.black} />
          <Text style={{ marginHorizontal: 5 }}>{props.date}</Text>
        </View>
      </View>
    </View>
  )
}