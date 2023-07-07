import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//userScreen
import RegisterScreen from "./layout/Screen_User/register";
import Profile from "./layout/Screen_User/profile";
import Confirm from "./layout/Screen_User/confirm";
import LoginScreen from "./layout/Screen_User/login";
import Home from "./layout/Screen_User/home"
import Return from "./layout/Screen_User/return";
import Return_list from "./layout/Screen_User/return_list";
import BottomNav from "./layout/Screen_User/bottomNav";
import Splash from "./layout/Screen_User/splash"
import Onboarding from "./layout/Screen_User/onBoarding"

//adminScreen
import Splash_Admin from "./layout/Screen_Admin/splash_admin"
import Device_list from "./layout/Screen_Admin/device_list";
import Device_update from "./layout/Screen_Admin/device_update";
import User_list from "./layout/Screen_Admin/user_list";
import BottomNav_Admin from "./layout/Screen_Admin/bottomNav";
import Device_add from "./layout/Screen_Admin/device_add";
import User_info from "./layout/Screen_Admin/user_info";

const Stack = createStackNavigator();
const App = () => {
  return (
    // User app
    // <NavigationContainer>
    //   <Stack.Navigator headerMode='false'>
    //     <Stack.Screen name="splash" component={Splash} /> 
    //     <Stack.Screen name="onboarding" component={Onboarding} /> 
    //     <Stack.Screen name="login" component={LoginScreen} />  
    //     <Stack.Screen name="register" component={RegisterScreen} />  
    //     <Stack.Screen name="bottomNav" component={BottomNav} />  
    //     <Stack.Screen name="home" component={Home} />  
    //     <Stack.Screen name="confirm" component={Confirm} />  
    //     <Stack.Screen name="return_list" component={Return_list} />
    //     <Stack.Screen name="return" component={Return} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // ADmin app
    <NavigationContainer>
      <Stack.Navigator headerMode='false'>
      <Stack.Screen name="splash" component={Splash_Admin} /> 
      <Stack.Screen name="bottomAdmin" component={BottomNav_Admin} /> 
      <Stack.Screen name="device_list" component={Device_list} /> 
      <Stack.Screen name="user_list" component={User_list} /> 
      <Stack.Screen name="device_update" component={Device_update} /> 
      <Stack.Screen name="device_add" component={Device_add} /> 
      <Stack.Screen name="user_info" component={User_info} /> 
    </Stack.Navigator>
  </NavigationContainer>
    
  );
};

export default App;
