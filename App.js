
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./layout/Screen_User/register";
import Profile from "./layout/Screen_User/profile";
import Admin_device_type from "./layout/Screen_Admin/device_type"
import Confirm from "./layout/Screen_User/confirm";
import Device_add from "./layout/Screen_Admin/device_add";
import LoginScreen from "./layout/Screen_User/login";
import Device_list from "./layout/Screen_Admin/device_list";
import Device_update from "./layout/Screen_Admin/device_update";
const Stack = createStackNavigator();

const App = () => {
  return (
    //LoginScreen
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" headerMode="false">
        {/* <Stack.Screen name="login" component={LoginScreen} /> */}
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    //RegisterScreen
    //  <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Register' headerMode="none">
    //     <Stack.Screen name="Register" component={RegisterScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //RegisterScreen
    //  <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Register' headerMode="none">
    //     <Stack.Screen name="Register" component={RegisterScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // device_type_admin_screen
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="device_list" headerMode="none">
    //     <Stack.Screen name="device_list" component={Device_list} />
    //     <Stack.Screen name="device_update" component={Device_update} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="device_update" headerMode="none">
    //     <Stack.Screen name="device_update" component={Device_update} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //deviceadd
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="device_add" headerMode="false">
    //     <Stack.Screen name="device_add" component={Device_add} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //Detail Screen
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Device_detail" headerMode="none">
    //     <Stack.Screen name="Device_detail" component={Device_detail} />
    //   </Stack.Navigator>
    // </NavigationContainer>

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