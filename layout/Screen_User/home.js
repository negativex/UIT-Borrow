import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
const SCREEN_WIDTH = Dimensions.get("window").width;
const Home = ({ navigation }) => {
  return (
    // Top View
    <ScrollView
      style={{
        backgroundColor: "#000",
        flex: 1,
      }}
    >
      {/* Style Top View */}
      <View
        style={{
          backgroundColor: "#EA5455",
          height: "22%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        {/* Name profile */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            paddingLeft: 55,
            width: "100%",
          }}
        >
          {/* Input User */}
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Ngoc Tran{"\n"}
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                MSSV: 20521668
              </Text>
            </Text>
          </View>
          <View style={{ width: "40%", alignItems: "flex-end" }}>
            {/* User Image Profile */}
            <Image
              source={require("../images/user_Top.png")}
              style={{ height: 70, width: 70 }}
            ></Image>
          </View>
        </View>

        {/* Search */}
        <LinearGradient
          colors={["transparent", "transparent"]}
          style={{
            left: 0,
            right: 0,
            height: 90,
            marginTop: 60,
          }}
        >
          {/* Style Search Bar */}
          <View
            style={{
              backgroundColor: "#FFF",
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginHorizontal: 80,
              borderRadius: 15,
              marginTop: -50,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Input Search */}
            <TextInput
              placeholder="Xem Thông Tin Cá Nhân"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 14,
                width: 260,
              }}
            ></TextInput>
          </View>
        </LinearGradient>
        <View>
          <Image
            source={require("../images/qr-code_white.png")}
            style={{
              height: 250,
              width: 250,
              marginHorizontal: 50,
              marginTop: -10,
            }}
          ></Image>

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
                Quét Mã
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
