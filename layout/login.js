import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Icon, Input, Item, Label } from "native-base";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const onChangeEmail = (newEmail) => {
    setEmail(newEmail);
  };
   const [password, setPassword] = useState("");

   const onChangePassword = (newPassword) => {
     setPassword(newPassword);
   };
  return (
    <View
      style={{ flex: 1, backgroundColor: "#F6F1F1" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("./images/BG_Top.png")}
        style={{
          height: Dimensions.get("window").height / 2.5,
          width: Dimensions.get("window").width / 1.0,
        }}
      ></ImageBackground>

      {/* bottom view*/}
      <View style={styles.bottomView}>
        {/* welcome view */}
        <View style={{ padding: 25 }}>
          <Text style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>
            Welcome To Room E3.1
          </Text>
          <Text style={{ fontWeight: "bold", paddingBottom: 10, fontSize: 15 }}>
            Use Verified Account To Log In
          </Text>
          <View style={{ width: 270, height: 1, backgroundColor: "black" }} />
        </View>
        {/* form input view */}
        <View style={{ padding: 30, paddingTop: -10 }}>
          <Item
            floatingLabel
            style={{
              borderColor: "black",
              borderRadius: 20,
              paddingBottom: -10,
            }}
          >
            <Label style={{ paddingStart: 20 }}>Email Address</Label>

            <Input
              value={email}
              keyboardType="email-address"
              onChangeText={onChangeEmail}
              style={{ paddingStart: 20 }}
            ></Input>
            <Icon
              name="checkmark"
              style={{ color: "#0F4C75", paddingBottom: 15, paddingEnd: 20 }}
            ></Icon>
          </Item>

          <Item
            floatingLabel
            style={{
              borderColor: "black",
              marginTop: 30,
              borderRadius: 20,
              paddingStart: 20,
            }}
          >
            <Label style={{ paddingStart: 20 }}>Password</Label>
            <Input
              value={password}
              onChangeText={onChangePassword}
              style={{ paddingStart: -9 }}
            ></Input>
            <Icon
              name="eye"
              style={{ color: "#0F4C75", paddingBottom: 15, paddingEnd: 20 }}
            ></Icon>
          </Item>
        </View>

        {/* button Login */}
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* login with social acc */}
        <TouchableOpacity style={styles.socialLogin}>
          <Icon
            type="MaterialCommunityIcons"
            name="google"
            style={{ fontSize: 45 }}
          ></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
    marginTop: 10,
    backgroundColor: "#F6F1F1",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomEndRadius: 0,
    shadowColor: "#000",
    shadowOffset: { width: 20, peak: 70 },
    shadowRadius: 150,
    elevation: 20,
  },

  //button Login
  buttonContainer: {
    backgroundColor: "#000",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginEnd: 100,
    marginStart: 100,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },

  //Login with social acc
  socialLogin: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    marginBottom: -30,
    paddingBottom: 60,
  },

});
