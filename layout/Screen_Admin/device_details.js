import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, 
  Dimensions,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
const Home = ({ navigation }) => {
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
            backgroundColor: "#EA5455",
            height: 100,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 10,
          }}
        >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text
            style={{
            fontWeight: "bold",
            paddingVertical: 12,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            marginTop: 25,
            fontSize: 30,
            color: "#FFF",
            }}
        >
            Thiết bị...
        </Text>
        </View>
        </View>
        {/* Style Thong So 1 */}
        <View
            style={{
              backgroundColor: "#fffaf0",
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Input Thong So 1 */}
            <TextInput
              placeholder="Nhập thông số 1"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>
        </View>
        {/* Style Thong So 1 */}
        <View
            style={{
              backgroundColor: "#fffaf0",
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Input Thong So 1 */}
            <TextInput
              placeholder="Nhập thông số 1"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>
        </View>
        {/* Style Thong So 1 */}
        <View
            style={{
              backgroundColor: "#fffaf0",
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Input Thong So 1 */}
            <TextInput
              placeholder="Nhập thông số 1"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>
        </View>
        {/* Style Thong So 1 */}
        <View
            style={{
              backgroundColor: "#fffaf0",
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Input Thong So 1 */}
            <TextInput
              placeholder="Nhập thông số 1"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>
        </View>
        {/* Style Thong So 1 */}
        <View
            style={{
              backgroundColor: "#fffaf0",
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Input Thong So 1 */}
            <TextInput
              placeholder="Nhập thông số 1"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>
        </View>
        {/* Style Thong So 1 */}
        <View
            style={{
              backgroundColor: "#fffaf0",
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Input Thong So 1 */}
            <TextInput
              placeholder="Nhập thông số 1"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>
        </View>
        {/* Style Button Change Image */}
        <View style={{ width: "100%", alignItems: "flex-start" }}>
            <View
            style={{
                backgroundColor: "#EA5455",
                paddingHorizontal: 10,
                marginTop: 10,
                marginLeft: 20,
                marginBottom: 20,
                paddingVertical: 6,
                borderRadius: 10,
            }}
            >
            <Text
                style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "#fff",
                }}
            >
                Thay đổi ảnh
            </Text>
            </View>
        </View>
        {/* Device Image */}
        <Image
          source={require("../images/arduino.png")}
          style={{
            height: 235,
            width: 235,
            marginTop: 5,
            marginLeft: 15,
          }}
        ></Image>
      {/* Style Button Save */}
        <View style={{ width: "100%", alignItems: "flex-end" }}>
            <View
            style={{
                backgroundColor: "#EA5455",
                paddingHorizontal: 10,
                marginTop: 10,
                marginRight: 20,
                marginBottom: 20,
                paddingVertical: 6,
                borderRadius: 100,
            }}
            >
            <Text
                style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "#fff",
                }}
            >
                Lưu thay đổi
            </Text>
            </View>
        </View>
      </ScrollView>
    );
  };
  export default Home;