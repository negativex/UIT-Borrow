import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import react from "react";
import LoginStackNavigator from "./layout/Screen_User/login";
import RegisterScreen from "./layout/Screen_User/register";
import HomeStackNavigator from "./layout/Screen_User/navigatorScreen";
import Profile from "./layout/Screen_User/profile";
import LoginScreen from "./layout/Screen_User/login";
import Admin_device_type from "./layout/Screen_Admin/device_type"
import homeAdmin from "./layout/Screen_Admin/devices";
import Admin_devices_management from "./layout/Screen_Admin/devices"
import Confirm from "./layout/Screen_User/confirm";
import DevicesDetail from "./layout/Screen_Admin/device_detail";
const Stack = createStackNavigator();
const App = () => {
  return (
    //  LoginScreen
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="login" headerMode="false">
    //     <Stack.Screen name="login" component={LoginStackNavigator} />
    //   </Stack.Navigator>
    // </NavigationContainer>

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
    // <Stack.Navigator initialRouteName='Navigator' headerMode="false">
    //     <Stack.Screen name="Navigator" component={Admin_device_type} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // device_type_admin_screen
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="device" headerMode="none">
    //     <Stack.Screen name="device" component={homeAdmin} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //Detail Screen
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Device_detail" headerMode="none">
        <Stack.Screen name="Device_detail" component={DevicesDetail} />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Profile" headerMode="none">
    //     <Stack.Screen name="Profile" component={Profile} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="confirm" headerMode="false">
    //     <Stack.Screen name="confirm" component={Confirm} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;