import { View, Text, Image, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Input from '../../components/Input';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../utils/colors';
import api from '../../services/api';
import styles from '../Home/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Task({ route, navigation }) {
  const [description, setDescription] = useState('');
  const [defaultValue, setDefaultValue] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('datetime');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [isPickerVisible, setIsPickerVisible] = useState(false);



  const onChange = (event, value) => {
    if (Platform.OS === 'android')
      setIsPickerVisible(false);
    formatDateTime(value);

  };

  function formatDateTime(value: Date): void {
    if (value) {
      let newValue = new Date(value);
      if (mode === 'date') {
        let newDate = `${newValue.getDate().toString().padStart(2, '0')}/${newValue.getMonth().toString().padStart(2, '0')}/${newValue.getFullYear()}`;
        setDate(newDate.trim());
      }
      if (mode === 'time') {
        let newTime = `${newValue.getHours().toString().padStart(2, '0')}:${newValue.getMinutes().toString().padStart(2, '0')}`;
        setTime(newTime.trim());
      }
      setDefaultValue(newValue);
    }
  }

  function openDateTimePicker(mode) {
    setMode(mode);
    setIsPickerVisible(!isPickerVisible);
  }

  async function saveTask() {
    if (description.trim() === '') {
      Alert.alert('Atenção', 'Descrição não pode ser vazia');
      return;
    }
    if (time.trim() === '') {
      Alert.alert('Atenção', 'Hora não pode ser vazia');
      return;
    }
    if (date.trim() === '') {
      Alert.alert('Atenção', 'Data não pode ser vazia');
      return;
    }
    let task = {
      description: description,
      expirationDate: date,
      expirationTime: time,
      user: route.params.id
    }
    try {
      const { status } = await api.post('/tasks', task);
      if (status === 200 || status === 201) {
        navigation.navigate('Home', { id: route?.params?.id });
      }
    } catch (err) {
      console.log(err);
      alert('Erro ao salvar tarefa');
    }
  }

  return (
    <View style={globalStyle.container}>
      <Image source={require('../../assets/logo-azul.png')} style={globalStyle.logoSmall} />
      <View style={styles.logout}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Ionicons name='arrow-back-outline' color={colors.red} size={24} />
        </TouchableOpacity>
      </View>
      <View style={globalStyle.content}>
        <View style={{ width: '100%', paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 20 }}>Crie uma tarefa</Text>
          <Text style={{ fontSize: 12 }}>Descreva brevemente a sua tarefa e adicione um prazo.</Text>
        </View>
        <View style={{ flex: 1, width: '100%' }}>
          <View style={{ flex: 1, paddingHorizontal: 20, marginVertical: 40 }}>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 16 }}>Dê um título para a sua tarefa</Text>
              <Input
                icon="clipboard-outline"
                placeholder="Descrição de tarefas"
                value={description}
                onChangeText={setDescription}
              />
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 16 }}>Horário limite</Text>
              <Input
                key="time"
                mode='time'
                icon="time-outline"
                placeholder="12:00"
                value={time}
                onPress={() => openDateTimePicker('time')}
              />
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 16 }}>Data limite</Text>
              <Input
                key="date"
                mode='date'
                icon="calendar-outline"
                placeholder="14/02/2023"
                value={date}
                onPress={() => openDateTimePicker('date')}
              />
            </View>
          </View>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Button
              text='Criar nova tarefa'
              icon='save-outline'
              onPress={saveTask}
            />
          </View>
        </View>
      </View>
      {
        isPickerVisible ?
          <DateTimePicker
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            mode={mode === 'time' ? 'time' : 'date'}
            is24Hour={true}
            value={defaultValue}
            onChange={(event, value) => onChange(event, value)}
          />
          : <></>
      }
    </View >
  )
}