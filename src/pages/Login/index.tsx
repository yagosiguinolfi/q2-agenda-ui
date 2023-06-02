import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyle } from '../styles';

export default function Login({route, navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubimit() {
    const response = await api.get(`/users/?username=${username}`);
    const user = response.data[0];
    if (!!user) {
      if (user.password === password) {
        await AsyncStorage.setItem('@authData', user.token);
        navigation.navigate('Home', { id: user.id, username: user.username })
      } else {
        alert('Senha incorreta');
      }
    } else {
      alert('Usuário não encontrado')
    }
  }

  return (
    <View style={globalStyle.container}>
      <Image source={require('../../assets/logo-azul.png')} style={globalStyle.logoLarge} />
      <Text style={styles.text}>Olá, que bom te ver de novo. Vamos começar?</Text>
      <View style={styles.inputs}>
        <Input
          icon="person-circle-outline"
          placeholder='Username'
          value={username}
          onChangeText={setUsername}
        />
        <Input
          icon="lock-open-outline"
          placeholder='Password'
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <View style={{ marginTop: 60 }}>
          <Button
            onPress={handleSubimit}
            text='Entrar'
          />
        </View>
      </View>
    </View>
  )
}