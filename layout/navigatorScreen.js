import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
import Items from "./items";
import Profile from "./profile";
import Detail from "./detail";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: "false",
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 20,
          borderRadius: 90,
          marginHorizontal: 25,
          marginVertical: 1,
          // opacity: 0.8,
        },
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("./images/home_nav.png")}
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "#EA5455" : "#000",
                marginTop: 10,
              }}
            ></Image>
          ),
        }}
      ></Tab.Screen>

      {/* Items */}
      <Tab.Screen
        name="Items"
        component={Items}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("./images/items.png")}
              style={{
                width: 40,
                height: 40,
                marginTop: 10,
                tintColor: focused ? "#EA5455" : "#000",
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
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("./images/user_nav.png")}
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? "#EA5455" : "#000",
                marginTop: 10,
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
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
