import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
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
    <ScrollView
      style={{ flex: 1, backgroundColor: "black" }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: "#fff",
          height: "30%",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          paddingHorizontal: 20,
        }}
      >
        {/* Name */}
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: -45,
            paddingLeft: -5,
            width: "100%",
          }}
        >
          <View style={{ width: "110%", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 22,
                color: "#000",
                fontWeight: "bold",
                marginTop: 90,
              }}
            >
              University of Information Technology
            </Text>
          </View>

          {/*Image UIT */}
          <View style={{ width: "100%" }}>
            <Image
              source={require("./images/logo_uit.png")}
              style={{ marginLeft: 30, marginTop: 10 }}
            ></Image>
          </View>
          <View
            style={{
              height: 4,
              backgroundColor: "#EA5455",
              width: 230,
              marginTop: 10,
              marginLeft: -15,
              borderRadius: 30,
            }}
          ></View>
        </View>
      </View>

      {/* bottom view*/}
      <View style={styles.bottomView}>
        {/* welcome view */}
        <View style={{ padding: 20 }}>
          <Text style={{ color: "#000", fontSize: 22, fontWeight: "bold" }}>
            Welcome To Room E3.1
          </Text>
          <Text style={{ paddingTop: 5, fontSize: 15 }}>
            Use Verified Account To Log In
          </Text>
          <Text style={{ paddingTop: 5, fontSize: 15 }}>
            Don't Have Account?
            <Text style={{ color: "#EA5455", fontStyle: "italic" }}>
              {"    "}Register
            </Text>
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: "#EA5455",
              width: 270,
              marginTop: 7,
              marginLeft: -9,
              borderRadius: 30,
            }}
          ></View>
        </View>

        {/* form input view */}
        <View style={{ padding: 30, paddingTop: 34 }}>
          <Item
            floatingLabel
            style={{
              borderColor: "#EA5455",
              borderRadius: 20,
              paddingBottom: -10,
            }}
          >
            <Label style={{ paddingStart: 20, fontSize: 15, color: "black" }}>
              Email Address
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
              borderColor: "#EA5455",
              marginTop: 30,
              borderRadius: 20,
              paddingStart: 20,
            }}
          >
            <Label style={{ paddingStart: 20, fontSize: 15, color: "black" }}>
              Password
            </Label>
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
    </ScrollView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    marginTop: 25,
    paddingBottom: 90,
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
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
    marginBottom: 10,
    paddingBottom: 1,
    marginLeft: 165,
    marginRight: 165,
  },
});
