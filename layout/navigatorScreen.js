import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
const SCREEN_WIDTH = Dimensions.get("window").width;
import Home from "./home";
import Detail from "./detail";
import Profile from "./profile";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// const Tab = createBottomTabNavigator();
const Tab= createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          heigh: 65,
          justifyContent: "center",
          paddingVertical: 15,
          color:'#EA5455',
          elevation: 1,
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
            <Image
              source={require("./images/home_nav.png")}
              style={{
                height: SCREEN_WIDTH * 0.1,
                width: SCREEN_WIDTH * 0.1,
                marginTop: SCREEN_WIDTH * 0.03,
              }}
            ></Image>
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
            <Image
              source={require("./images/info_nav.png")}
              style={{
                height: SCREEN_WIDTH * 0.1,
                width: SCREEN_WIDTH * 0.1,
                marginTop: SCREEN_WIDTH * 0.03,
              }}
            ></Image>
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
            <Image
              source={require("./images/user_nav.png")}
              style={{
                height: SCREEN_WIDTH * 0.1,
                width: SCREEN_WIDTH * 0.1,
                marginTop: SCREEN_WIDTH * 0.03,
              }}
            ></Image>
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
      <Stack.Screen name="Profile" component={BottomTabNavigator}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
