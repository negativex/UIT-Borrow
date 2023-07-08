// // Screens
import Add from "./device_add";
import D_list from "./device_list";
import U_list from "./user_list";

// import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
// //Screen names
const AddName = "Thêm thiết bị";
const D_listName = "Danh sách thiết bị";
const U_listName = "Danh sách user";
const Tab = createBottomTabNavigator();
// const Tab = createBottomTabNavigator();

const BottomNav = ( {route} ) => {
//   const {data} = route.params;
  
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === AddName) {
            iconName = focused
              ? 'cloud-upload-outline'
              : 'add-circle-outline';
          } else if (route.name === D_listName) {
            iconName = focused ? 'ios-list' : 'menu-outline';
          } else if (route.name === U_listName){
            iconName = focused ? 'ios-list' : 'people-outline';
          }
          
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name={D_listName} component={D_list}/>
        <Tab.Screen name={U_listName} component={U_list}/> 
        <Tab.Screen name={AddName} component={Add} options={{unmountOnBlur: true}}/>  
      </Tab.Navigator>
  );
}
export default BottomNav;