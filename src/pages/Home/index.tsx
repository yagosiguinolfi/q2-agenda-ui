import { TextInput, View, Image, Button } from 'react-native'
import React from 'react'
import StyleSheet from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
      <View>
        <Button
          title='Login'
          onPress={() =>
            navigation.navigate('Login')
          }
        />
      </View>
    </View>
  )
}