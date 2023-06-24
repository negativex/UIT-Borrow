import { View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { Icon, Input, Item, Label } from "native-base";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../Style/colors";
import { db } from "../Firebase/firebase";
import { auth } from "../Firebase/firebase";
import { useEffect } from "react";

const Profile = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  const [info, setInfo] = useState("");
  useEffect(() => {
    const starCountRef = ref(db, "User/" + data + "/Ten");
    onValue(starCountRef, (snapshot) => {
      const data2 = snapshot.val();
      setInfo(data2);
      console.log({ data2 });
    });
  }, []);

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
            {info} {"\n"}
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
            {auth.currentUser?.email}
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
          Mật khẩu
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

      <View style={{ width: "90%", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#EA5455",
            paddingHorizontal: 10,
            marginHorizontal: 50,
            marginTop: 50,
            paddingVertical: 6,
            borderRadius: 10,
            marginLeft: 70,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#fff",
            }}
          >
            Đăng Xuất
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
