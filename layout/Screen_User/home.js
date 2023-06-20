import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import {
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { auth } from "../Firebase/firebase";
import colors from "../Style/colors";
const SCREEN_WIDTH = Dimensions.get("window").width;
const Home = ({navigation}) => {
  return (
    // Top View
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
          height: "26%",
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
            marginTop: 55,
            paddingLeft: 55,
            width: "100%",
          }}
        >
          {/* Input User */}
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 25,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Ngoc Tran{"\n"}
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                {auth.currentUser?.email}
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
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: colors.deepblue,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginHorizontal: 80,
              borderRadius: 15,
              marginTop: 10,
              flexDirection: "row",
              marginBottom: 20,
              alignItems: "center",
            }}
          >
            {/* Input Search */}

            <Text
              style={{
                fontSize: 14,
                width: 260,
                color: "#fff",
                paddingLeft: 15,
              }}
            >
              Thông Tin Cá Nhân
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <Image
            source={require("../images/qr-scan.png")}
            style={{
              height: 250,
              width: 250,
              marginHorizontal: 50,
              marginTop: 80,
            }}
          ></Image>

          <View style={{ width: "90%", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#000",
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
