import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import RegisterScreen from "./layout/Screen_User/register";
import Profile from "./layout/Screen_User/profile";
import Confirm from "./layout/Screen_User/confirm";
import LoginScreen from "./layout/Screen_User/login";
import Home from "./layout/Screen_User/home"
import Device_list from "./layout/Screen_Admin/device_list";
import Device_update from "./layout/Screen_Admin/device_update";
import HomeScreen from "./layout/Screen_User/home";
import User_list from "./layout/Screen_Admin/user_list";
import Return from "./layout/Screen_User/return";
import Return_list from "./layout/Screen_User/return_list";
import BottomNav from "./layout/Screen_User/bottomNav";
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='false'>
        <Stack.Screen name="login" component={LoginScreen} />  
        <Stack.Screen name="register" component={RegisterScreen} />  
        <Stack.Screen name="bottomNav" component={BottomNav} />  
        <Stack.Screen name="home" component={Home} />  
        <Stack.Screen name="confirm" component={Confirm} />  
        <Stack.Screen name="return_list" component={Return_list} />
        <Stack.Screen name="return" component={Return} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
