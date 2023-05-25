import { View, Text, Button } from 'react-native'
import React from 'react'
import StyleSheet from '../styles';
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
      <Text>Login</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}