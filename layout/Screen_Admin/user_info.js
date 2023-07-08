import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Label } from "native-base";
import { ref, onValue } from "firebase/database";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/core";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../Style/colors";
import { db, auth } from "../Firebase/firebase";
import {  deleteUser } from "firebase/auth";
import { useEffect } from "react";
const { width, height } = Dimensions.get("window");

const modalWidth = (4 * width) / 5;
const modalHeight = (2 * height) / 5;

const User_info = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  // console.log(data);
  const [info, setInfo] = useState();
  const [info2, setInfo2] = useState();
  const [info3, setInfo3] = useState();
  const [info4, setInfo4] = useState();
  const [modalVisible, setModalVisible] = React.useState(false);
  

 

  useEffect(() => {
    // const data = mssv.substring(0, 8);
    onValue(ref(db, "User/" + data), (snapshot) => {
      setInfo(snapshot.val().Email);
      setInfo2(snapshot.val().Lop);
      setInfo3(snapshot.val().Ten);
      setInfo4(snapshot.val().Password);
    });
  }, []);

  const handleBack = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("bottomAdmin");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      {/* Style Top View */}
      <View
        style={{
          backgroundColor: colors.blue,
          height: 150,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            margin: 10,
            marginTop: 50,
            marginEnd: 90,
            alignItems: "center",
            marginStart: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {info3}
            {"\n"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: -20,
              color: "white",
            }}
          >
            {auth.currentUser?.email}
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",

            marginTop: -83,
            marginStart: 260,
            marginEnd: 10,
          }}
        >
          <Image
            source={require("../images/user_Top.png")}
            style={{ height: 70, width: 70 }}
          ></Image>
        </View>
      </View>

      <View
        floatingLabel
        style={{
          borderRadius: 20,
          backgroundColor: colors["white-smoke"],
          borderWidth: 1,
          borderColor: colors.blue,
          paddingVertical: 5,
          margin: 20,
        }}
      >
        <Label
          style={{
            paddingStart: 20,
            fontSize: 15,
            color: colors.secondary,
          }}
        >
          Email
        </Label>

        <View style={{ paddingStart: 20 }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.secondary,
              fontWeight: "bold",
            }}
          >
            {info}
          </Text>
        </View>
      </View>

      <View
        floatingLabel
        style={{
          borderRadius: 20,
          backgroundColor: colors["white-smoke"],
          borderWidth: 1,
          borderColor: colors.blue,
          paddingVertical: 5,
          margin: 20,
        }}
      >
        <Label
          style={{
            paddingStart: 20,
            fontSize: 15,
            color: colors.secondary,
          }}
        >
          Họ và Tên
        </Label>

        <View style={{ paddingStart: 20 }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.secondary,
              fontWeight: "bold",
            }}
          >
            {info3}
          </Text>
        </View>
      </View>

      <View
        floatingLabel
        style={{
          borderRadius: 20,
          backgroundColor: colors["white-smoke"],
          borderWidth: 1,
          borderColor: colors.blue,
          paddingVertical: 5,
          margin: 20,
        }}
      >
        <Label
          style={{
            paddingStart: 20,
            fontSize: 15,
            color: colors.secondary,
          }}
        >
          MSSV
        </Label>

        <View style={{ paddingStart: 20 }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.secondary,
              fontWeight: "bold",
            }}
          >
            {data}
          </Text>
        </View>
      </View>
      <View
        floatingLabel
        style={{
          borderRadius: 20,
          backgroundColor: colors["white-smoke"],
          borderWidth: 1,
          borderColor: colors.blue,
          paddingVertical: 5,
          margin: 20,
        }}
      >
        <Label
          style={{
            paddingStart: 20,
            fontSize: 15,
            color: colors.secondary,
          }}
        >
          Lớp
        </Label>

        <View style={{ paddingStart: 20 }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.secondary,
              fontWeight: "bold",
            }}
          >
            {info2}
          </Text>
        </View>
      </View>

    
      
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    width: width,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    width: modalWidth,
    height: modalHeight,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  input: {
    height: 40,
    width: (modalWidth * 3) / 4,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  buttonSpacing: {
    width: 20,
  },
});
export default User_info;
