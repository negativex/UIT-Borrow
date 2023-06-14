import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import react from "react";

import RegisterScreen from "./layout/Screen_User/register";
import HomeStackNavigator from "./layout/Screen_User/navigatorScreen";
import Detail from "./layout/Screen_User/detail";
import Profile from "./layout/Screen_User/profile";
import LoginScreen from "./layout/Screen_User/login";
import Admin_device_type from "./layout/Screen_Admin/device_type"
import Admin_device_list from "./layout/Screen_Admin/device_list"
import Admin_device_details from "./layout/Screen_Admin/device_details"
import Admin_user_list from "./layout/Screen_Admin/user_list"
import Admin_user_details from "./layout/Screen_Admin/user_details"
import Home from "./layout/Screen_Admin/device_type";
const Stack = createStackNavigator();
const App = () => {
  return (
    //  LoginScreen
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    //RegisterScreen
    //  <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Register' headerMode="none">
    //     <Stack.Screen name="Register" component={RegisterScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

   // NavigatorScreen
    //  <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Navigator' headerMode="none">
    //     <Stack.Screen name="Navigator" component={HomeStackNavigator} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
    //device_type_admin_screen
    // <NavigationContainer>
    // <Stack.Navigator initialRouteName='Navigator' headerMode="none">
    //     <Stack.Screen name="Navigator" component={Admin_device_type} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //device_type_admin_screen
    // <NavigationContainer>
    // <Stack.Navigator initialRouteName='Navigator' headerMode="none">
    //     <Stack.Screen name="Navigator" component={Admin_devices_management} />
    //   </Stack.Navigator>
    // </NavigationContainer>


    //Detail Screen
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Detail" headerMode="none">
    //     <Stack.Screen name="Detail" component={Detail} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Profile" headerMode="none">
    //     <Stack.Screen name="Profile" component={Profile} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;