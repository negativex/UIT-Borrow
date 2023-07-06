// // Screens
import Profile from "./profile";
import HomeScreen from "./home";
import Return_list from "./return_list";

// import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
// //Screen names
const homeName = "Trang chủ";
const profileName = "Thông tin cá nhân";
const returnlName = "Trả thiết bị";
const Tab = createBottomTabNavigator();
// const Tab = createBottomTabNavigator();

const BottomNav = ( {route} ) => {
  const {data} = route.params;
  
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === homeName) {
            iconName = focused
              ? 'qr-code-outline'
              : 'home-outline';
          } else if (route.name === profileName) {
            iconName = focused ? 'ios-list' : 'help-circle-outline';
          } else if (route.name === returnlName){
            iconName = focused ? 'today-outline' : 'swap-horizontal-outline';
          }
          
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name={homeName} component={HomeScreen} />  
        <Tab.Screen name={returnlName} component={Return_list} initialParams={{data}}/>
        <Tab.Screen name={profileName} component={Profile} initialParams={{data}}/>  
      </Tab.Navigator>
  );
}
export default BottomNav;