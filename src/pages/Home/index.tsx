import React, { ReactNode, useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, Modal, Dimensions } from 'react-native';
import { globalStyle } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardTask from '../../components/CardTask';
import Button from '../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../utils/colors';
import styles from './styles';
import api from '../../services/api';

export default function Home({ route, navigation }) {
  // const { id } = route?.params;
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState('');

  useEffect(() => {
    async function loadTasks() { 
      // await AsyncStorage.removeItem('@authData');
      try {
        const { data, status } = await api.get(`/tasks/?user=${route?.params?.id}`);
        if (status === 200) {
          let realList = data.filter(t => t.user === route?.params?.id);
          setTasks(realList);
        }
      } catch (err) {
        console.error(err);
        alert('Erro ao carregar tarefas')
      }
    }
    loadTasks();
  }, [, route]);

  async function logout() {
    await AsyncStorage.removeItem('@authData');
    navigation.navigate({ name: "Login" });
  }

  function getDate(): ReactNode {
    const newDate = new Date(Date.now());
    var day = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][newDate.getDay()];
    var date = newDate.getDate();
    var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][newDate.getMonth()];
    var year = newDate.getFullYear();
    var fullDate = `${day}, ${date} de ${month}`;
    return fullDate.toString();
  }

  function showModal(id: string) {
    setCurrentTask(id);
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  async function deleteTask() {
    try {
      await api.delete(`/tasks/${currentTask}`);
      setTasks(tasks.filter(t => t.id != currentTask));
    } catch (err) {
      console.error(err);
      alert('Erro ao deletar tarefa')
    }
    closeModal();
  }

  return (
    <View style={globalStyle.container}>
      <Image source={require('../../assets/logo-azul.png')} style={globalStyle.logoSmall} />
      <View style={styles.logout}>
        <TouchableOpacity onPress={logout}>
          <Ionicons name='power-outline' color={colors.red} size={24} />
        </TouchableOpacity>
      </View>
      <View style={[globalStyle.content]}>
        <View style={{ flex: 1, width:'100%' }}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={{ fontSize: 24 }}>Tarefas de hoje</Text>
            <Text style={{ fontSize: 14 }}>{getDate()}</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.viewCards}>
              {tasks &&
                tasks.map(task => (
                  <CardTask
                    key={task.id}
                    text={task.description}
                    time={task.expirationTime}
                    date={task.expirationDate}
                    onPress={() => showModal(task.id)}
                  />
                ))
              }
            </View>
          </ScrollView>
        </View>
        <Button
          text='Criar nova tarefa'
          icon='add'
          onPress={() => navigation.navigate('Task', { id: route?.params?.id })}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}>
          <View style={{ borderRadius: 8, margin: 20, padding: 20, backgroundColor: colors.white, alignItems: 'center' }}>
            <View style={{ alignItems: 'flex-start' }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Você tem certeza que deseja excluir essa tarefa?</Text>
              <Text style={{ fontSize: 16, marginTop: 25, marginBottom: 40 }}>Essa ação não poderá se desfeita.</Text>
            </View>
            <Button
              text='Excluir'
              onPress={deleteTask}
            />
            <Button
              buttonStyle={{ backgroundColor: 'white', borderColor: colors.blue, borderWidth: .5, marginTop: 20 }}
              textColor={colors.blue}
              text='Deixar como está'
              onPress={closeModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}