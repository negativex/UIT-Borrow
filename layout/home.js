import { View, Text, Image, ImageBackground, Dimensions } from "react-native";
import React from "react";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./detail";
import Items from "./items";
const SCREEN_WIDTH = Dimensions.get("window").width;
const Home = ({navigation}) => {
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
          height: "20%",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          paddingHorizontal: 20,
        }}
      >
        {/* Image User */}
        <Image
          source={require("./images/Scroll_Top.png")}
          style={{
            height: 35,
            width: 35,
            marginTop: 15,
            marginLeft: -15,
          }}
        ></Image>

        {/* Name profile */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: -15,
            paddingLeft: 35,
            width: "100%",
          }}
        >
          {/* Input User */}
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 28,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Ngoc Tran
            </Text>
          </View>
          <View style={{ width: "40%", alignItems: "flex-end" }}>
            {/* User Image Profile */}
            <Image
              source={require("./images/user_Top.png")}
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
            marginTop: 50,
          }}
        >
          {/* Style Search Bar */}
          <View
            style={{
              backgroundColor: "#FFF",
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: -30,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Input Search */}
            <TextInput
              placeholder="Search"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>

            {/* Search Image */}
            <Image
              source={require("./images/search_bottom.png")}
              style={{ height: 20, width: 20 }}
            ></Image>
          </View>
        </LinearGradient>

        {/* Embedded Devices */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          {/* Style Input Devices View*/}
          <View style={{ width: "55%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginTop: -35,
                marginLeft: -15,
                color: "#fff",
                flexDirection: "row",
              }}
            >
              Embedded Devices
            </Text>
            <View
              style={{
                height: 4,
                backgroundColor: "#EA5455",
                width: 115,
                marginTop: 5,
                marginLeft: -15,
              }}
            ></View>
          </View>

          {/* Style Button More */}
          <View style={{ width: "40%", alignItems: "flex-end" }}>
            <View
              style={{
                backgroundColor: "#EA5455",
                paddingHorizontal: 29,
                marginTop: -35,
                paddingVertical: 6,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                More
              </Text>
            </View>
          </View>
        </View>

        {/* Scrolling Embedded*/}
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 200 }}
          >
            {/* Raspi */}
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  backgroundColor: "#fff",
                  paddingVertical: 10,
                  paddingHorizontal: -9,
                  marginHorizontal: 10,
                  borderRadius: 15,
                  marginTop: 20,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 30,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  Raspberry Pi 3
                </Text>
              </View>
              <Image
                source={require("./images/raspi.png")}
                style={{
                  height: SCREEN_WIDTH * 0.3,
                  width: SCREEN_WIDTH * 0.45,
                  marginTop: SCREEN_WIDTH * 0.01,
                }}
              ></Image>
            </TouchableOpacity>

            {/* Arduino1 */}
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  backgroundColor: "#fff",
                  paddingVertical: 10,
                  paddingHorizontal: -8,
                  marginHorizontal: 10,
                  borderRadius: 15,
                  marginTop: 20,
                  marginLeft: 20,
                  marginRight: 0,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 35,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  Arduino Uno
                </Text>
              </View>
              <Image
                source={require("./images/arduino.png")}
                style={{
                  height: SCREEN_WIDTH * 0.3,
                  width: SCREEN_WIDTH * 0.4,
                  marginTop: SCREEN_WIDTH * 0.03,
                  marginLeft: SCREEN_WIDTH * 0.03,
                }}
              ></Image>
            </TouchableOpacity>

            {/* Arduino 2 */}
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  backgroundColor: "#fff",
                  paddingVertical: 10,
                  paddingHorizontal: -8,
                  marginHorizontal: 10,
                  borderRadius: 15,
                  marginTop: 20,
                  marginLeft: 20,
                  marginRight: 0,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 35,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  Arduino Uno
                </Text>
              </View>
              <Image
                source={require("./images/arduino.png")}
                style={{
                  height: SCREEN_WIDTH * 0.3,
                  width: SCREEN_WIDTH * 0.4,
                  marginTop: SCREEN_WIDTH * 0.03,
                  marginLeft: SCREEN_WIDTH * 0.03,
                }}
              ></Image>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: "#EA5455",
            width: 340,
            marginTop: 10,
            marginLeft: -15,
            borderRadius: 30,
          }}
        ></View>

        {/* Cables/Wires*/}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          {/* Style Input Devices View*/}
          <View style={{ width: "55%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 15,
                marginLeft: -15,
                color: "#fff",
                flexDirection: "row",
              }}
            >
              Cables/Wires
            </Text>
            <View
              style={{
                height: 4,
                backgroundColor: "#EA5455",
                width: 115,
                marginTop: 5,
                marginLeft: -15,
              }}
            ></View>
          </View>

          {/* Style Button More */}
          <View style={{ width: "40%", alignItems: "flex-end" }}>
            <View
              style={{
                backgroundColor: "#EA5455",
                paddingHorizontal: 29,
                marginTop: 15,
                paddingVertical: 6,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                More
              </Text>
            </View>
          </View>
        </View>

        {/* Scrolling Cables/Wires*/}
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 280 }}
          >
            {/* Wire */}
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  backgroundColor: "#fff",
                  paddingVertical: 10,
                  paddingHorizontal: -9,
                  marginHorizontal: 1,
                  marginLeft: 10,
                  borderRadius: 15,
                  marginTop: 20,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 22,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  Wire
                </Text>
              </View>
              <Image
                source={require("./images/wires.png")}
                style={{
                  height: SCREEN_WIDTH * 0.25,
                  width: SCREEN_WIDTH * 0.18,
                  marginTop: SCREEN_WIDTH * 0.03,
                  marginLeft: SCREEN_WIDTH * 0.03,
                }}
              ></Image>
            </TouchableOpacity>

            {/* Core2 */}
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  backgroundColor: "#fff",
                  paddingVertical: 10,
                  paddingHorizontal: -8,
                  marginHorizontal: 10,
                  borderRadius: 15,
                  marginTop: 20,
                  marginLeft: 20,
                  marginRight: 0,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 20,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  2 Cores
                </Text>
              </View>
              <Image
                source={require("./images/2cores.png")}
                style={{
                  height: SCREEN_WIDTH * 0.25,
                  width: SCREEN_WIDTH * 0.25,
                  marginTop: SCREEN_WIDTH * 0.03,
                  marginLeft: SCREEN_WIDTH * 0.03,
                }}
              ></Image>
            </TouchableOpacity>

            {/* Core 4 */}
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  backgroundColor: "#fff",
                  paddingVertical: 10,
                  paddingHorizontal: -8,
                  marginHorizontal: 10,
                  borderRadius: 15,
                  marginTop: 20,
                  marginLeft: 20,
                  marginRight: 0,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 20,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  4 Cores
                </Text>
              </View>
              <Image
                source={require("./images/3cores.png")}
                style={{
                  height: SCREEN_WIDTH * 0.25,
                  width: SCREEN_WIDTH * 0.25,
                  marginTop: SCREEN_WIDTH * 0.03,
                  marginLeft: SCREEN_WIDTH * 0.03,
                }}
              ></Image>
            </TouchableOpacity>

            {/* Core 4 */}
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  backgroundColor: "#fff",
                  paddingVertical: 10,
                  paddingHorizontal: -8,
                  marginHorizontal: 10,
                  borderRadius: 15,
                  marginTop: 20,
                  marginLeft: 20,
                  marginRight: 0,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 20,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  4 Cores
                </Text>
              </View>
              <Image
                source={require("./images/3cores.png")}
                style={{
                  height: SCREEN_WIDTH * 0.25,
                  width: SCREEN_WIDTH * 0.25,
                  marginTop: SCREEN_WIDTH * 0.03,
                  marginLeft: SCREEN_WIDTH * 0.03,
                }}
              ></Image>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};



export default Home;
