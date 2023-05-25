import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home/index'
import Login from './src/pages/Login/index'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        navigationBarHidden: false,
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
                        
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

