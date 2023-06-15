import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Icon, Input, Item, Label } from "native-base";
import colors from "../colors/colors";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigation } from "@react-navigation/core";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const onChangeEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (newPassword) => {
    setPassword(newPassword);
  };

  const [newpassword, setNewPassword] = useState("");
  const onChangeNewPassword = (newNewPassword) => {
    setNewPassword(newNewPassword);
  };
  const navigation = useNavigation();

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password, newpassword)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Đăng ký tài khoản:", user.email);
        Alert.alert("Đăng ký thành công", "Hãy đăng nhập ứng dụng", [
          { text: "Đóng", onPress: () => console.log("alert close") },
        ]);
      })
      .catch((error) =>
        Alert.alert("Đăng nhập thất bại", "Tài khoản/mật khẩu chưa đúng", [
          { text: "Đóng", onPress: () => console.log("alert close") },
        ])
      );
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.blue }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        {/* Name */}
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: -55,
            paddingLeft: -5,
            width: "100%",
          }}
        >
          <View style={{ width: "110%", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 30,
                color: "#000",
                fontWeight: "bold",
                marginTop: 120,
              }}
            >
              Welcome To Room E3.1
            </Text>
          </View>

          {/*Image UIT */}
          <View style={{ width: "100%" }}>
            <Image
              source={require("../images/logo_uit.png")}
              style={{ marginLeft: 50, marginTop: 10 }}
            ></Image>
          </View>
          <View></View>
        </View>
      </View>

      {/* bottom view*/}
      <View style={styles.bottomView}>
        {/* welcome view */}
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "#000",
              fontSize: 35,
              fontWeight: "bold",
              paddingHorizontal: 90,
            }}
          >
            Đăng Ký
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#000",
            width: 250,
            marginTop: 0,
            marginLeft: 55,
            borderRadius: 30,
          }}
        ></View>
        {/* form input view */}
        <View style={{ padding: 30, paddingTop: 34 }}>
          <Item
            floatingLabel
            style={{
              borderColor: colors.blue,
              borderRadius: 20,
              paddingBottom: -10,
            }}
          >
            <Label style={{ paddingStart: 20, fontSize: 15 }}>
              Địa chỉ Email
            </Label>

            <Input
              value={email}
              keyboardType="email-address"
              onChangeText={onChangeEmail}
              style={{ paddingStart: 20 }}
            ></Input>
            <Icon
              name="checkmark"
              style={{ color: "black", paddingBottom: 15, paddingEnd: 20 }}
            ></Icon>
          </Item>

          <Item
            floatingLabel
            style={{
              borderColor: colors.blue,
              marginTop: 30,
              borderRadius: 20,
              paddingStart: 20,
            }}
          >
            <Label style={{ paddingStart: 20 }}>Nhập mật khẩu</Label>
            <Input
              value={password}
              onChangeText={onChangePassword}
              style={{ paddingStart: -9 }}
            ></Input>
            <Icon
              name="eye"
              style={{ color: "black", paddingBottom: 15, paddingEnd: 20 }}
            ></Icon>
          </Item>

          <Item
            floatingLabel
            style={{
              borderColor: colors.blue,
              marginTop: 30,
              borderRadius: 20,
              paddingStart: 20,
            }}
          >
            <Label style={{ paddingStart: 20 }}>Nhập lại mật khẩu</Label>
            <Input
              value={newpassword}
              onChangeText={onChangeNewPassword}
              style={{ paddingStart: -9 }}
            ></Input>
            <Icon
              name="eye"
              style={{ color: "black", paddingBottom: 15, paddingEnd: 20 }}
            ></Icon>
          </Item>
        </View>

        {/* button Login */}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Đăng Ký</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text
            style={{
              paddingTop: -4,
              fontSize: 15,
              paddingHorizontal: 20,
              marginStart: 50,
              padding: 15,
            }}
          >
            Bạn đã có có tài khoản?{"  "}
            <Text
              style={{
                color: colors.primary,
                fontStyle: "italic",
                textDecorationLine: "underline",
              }}
            >
              Đăng nhập
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default RegisterScreen;
const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    marginTop: 25,
    paddingBottom: 130,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
  },

  //button Register
  buttonContainer: {
    backgroundColor: "#000",
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 20,
    marginEnd: 90,
    marginStart: 90,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

// const Stack = createStackNavigator();
// const screenOptionStyle = {
//   headerShown: false,
// };

// const RegisterStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="register" component={RegisterScreen}></Stack.Screen>
//       <Stack.Screen name="login" component={LoginStackNavigator}></Stack.Screen>
//     </Stack.Navigator>
//   );
// };
