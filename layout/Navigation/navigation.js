import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="home" component={Home}></Stack.Screen>
      <Stack.Screen name="register" component={RegisterScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;