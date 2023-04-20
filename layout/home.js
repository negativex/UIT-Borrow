import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Home = (navigation) => {
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
          height: "23%",
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
                color: "#000",
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
                marginTop: -25,
                paddingVertical: 6,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
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
            style={{ height: 400 }}
          >
            {/* Color background scrolling */}
            {/* <LinearGradient
                colors={["rgba(234, 84, 85, 1)", "transparent"]}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 100,
                  marginTop: 220,
                  top: 0,
                }}
              ></LinearGradient> */}

            {/* display items scrolling */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail")}
              style={{
                height: 100,
                width: 110,
                backgroundColor: "#FFF",
                paddingLeft: 5,
                marginTop: 30,
                marginLeft: 10,
                borderRadius: 15,
                marginBottom: 10,
              }}
            >
              <Image
                source={require("./images/raspi.png")}
                style={{ height: 100, width: 100 }}
              ></Image>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Cables/wires */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginTop: -240,
                marginLeft:-15,
                color: "#fff",
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
          <View style={{ width: "40%", alignItems: "flex-end" }}>
            <View
              style={{
                backgroundColor: "#EA5455",
                paddingHorizontal: 29,
                marginTop: -235,
                paddingVertical: 6,
                borderRadius: 10,
              
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  color: "#fff",
                }}
              >
                More
              </Text>
            </View>
          </View>
        </View>
        
      </View>
    </ScrollView>
  );
};

export default Home;
