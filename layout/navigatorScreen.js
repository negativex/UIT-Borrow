import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home";
import Detail from "./detail";
import Profile from "./profile";
import { Image } from "native-base";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          heigh: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "black",
          elevation: 2,
        },
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image>
              source={require("./images/home_nav.png")}
              style={{ heigh: 20, width: 20 }}
            </Image>
          ),
        }}
      ></Tab.Screen>

      {/* Detail */}
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image>
              source={require("./images/info_nav.png")}
              style={{ heigh: 20, width: 20 }}
            </Image>
          ),
        }}
      ></Tab.Screen>

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image>
              source={require("./images/user_nav.png")}
              style={{ heigh: 20, width: 20 }}
            </Image>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={BottomTabNavigator}></Stack.Screen>
      <Stack.Screen name="Detail" component={BottomTabNavigator}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator
