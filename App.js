import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Confirm from "./layout/Screen_User/confirm";
import LoginScreen from "./layout/Screen_User/login";
import Home from "./layout/Screen_User/home";
const Stack = createStackNavigator();
import Return from "./layout/Screen_User/return";
import Return_list from "./layout/Screen_User/return_list";
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="false">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="confirm" component={Confirm} />
        <Stack.Screen name="return_list" component={Return_list} />
        <Stack.Screen name="return" component={Return} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
