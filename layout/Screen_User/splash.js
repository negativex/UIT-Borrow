import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("onboarding");
  }, 3000);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#465bd8"
      />
      <Image
        source={require("../images/logo.png")}
        style={{ width: 300, height: 300 }}
      />
      <Text
        style={{ fontFamily: "OpenSans-Bold", fontSize: 40, color: "#000" }}
      >
        UIT Borrow
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
