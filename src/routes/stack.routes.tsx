import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarHidden: false,
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
        }} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }} />
    </Stack.Navigator>
  )
}