import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../pages/Login';
import Home from "../pages/Home";
import Task from "../pages/Task";

const Stack = createStackNavigator();

export function Routes() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    isLoggedIn();
  }, []);

  async function isLoggedIn() {
    await AsyncStorage.getItem("@authData")
      .then((value) => {
        setAuth(!!value);
      });
    return !!auth;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* {auth && <> */}
      <Stack.Screen
        key="Home"
        name="Home">
        {props => <Home {...props} />}
      </Stack.Screen>

      <Stack.Screen
        key="Task"
        name="Task">
        {props => <Task {...props} />}
      </Stack.Screen>
      {/* </>} */}
      {/* {!auth && <> */}
      <Stack.Screen
        key="Login"
        name="Login">
        {props => <Login {...props} />}
      </Stack.Screen>
      {/* </> */}
      {/* } */}
    </Stack.Navigator>
  )
}