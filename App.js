import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import react from "react";
import LoginScreen from "./layout/login";
import RegisterScreen from "./layout/register";
//import HomeStackNavigator from "./layout/navigatorScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Login' headerMode="none">
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>


     <NavigationContainer>
      <Stack.Navigator initialRouteName='Register' headerMode="none">
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>


    // <NavigationContainer>
      
    //     <HomeStackNavigator></HomeStackNavigator>
     
    // </NavigationContainer>
  );
};

export default App;