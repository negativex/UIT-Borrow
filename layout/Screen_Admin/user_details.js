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
const SCREEN_WIDTH = Dimensions.get("window").width;
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
            Sinh viên ...
        </Text>
        </View>
        </View>
        {/* Style Input Ho va ten */}
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
            {/* Input Ho va ten */}
            <TextInput
              placeholder="Họ và tên"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>
        </View>
        {/* Style Input mssv */}
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
            {/* Input mssv */}
            <TextInput
              placeholder="MSSV"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>
        </View>
        {/* Style Input gmail */}
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
            {/* Input gmail */}
            <TextInput
              placeholder="Gmail"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>
        </View>
        {/* Style Input Barcode */}
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
            {/* Input Barcode */}
            <TextInput
              placeholder="Thông số mã Barcode"
              placeholderTextColor="#EA5455"
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>
        </View>
        {/* Style Input Birth */}
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
            {/* Input Birth */}
            <TextInput
              placeholder="Ngày tháng năm sinh"
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
                marginTop: 20,
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
                Lịch sử thiết bị đã mượn
            </Text>
            </View>
        </View>
        {/* Scrolling History*/}
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
                  backgroundColor: "#fff",
                  paddingVertical: 10,
                  marginLeft: 10,
                  borderRadius: 15,
                  marginTop: 20,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 10,
                    paddingRight: 10,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  Dây Nối
                </Text>
              </View>
              <Image
                source={require("../images/wires.png")}
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
                  backgroundColor: "#fff",
                  paddingVertical: 10,
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
                    paddingLeft: 10,
                    paddingRight: 10,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  2 Lõi
                </Text>
              </View>
              <Image
                source={require("../images/2cores.png")}
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
                  backgroundColor: "#fff",
                  paddingVertical: 10,
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
                    paddingLeft: 10,
                    paddingRight: 10,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  4 Lõi
                </Text>
              </View>
              <Image
                source={require("../images/3cores.png")}
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
                  backgroundColor: "#fff",
                  paddingVertical: 10,
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
                    paddingLeft: 10,
                    paddingRight: 10,
                    fontSize: 15,
                    color: "#EA5455",
                  }}
                >
                  4 Lõi
                </Text>
              </View>
              <Image
                source={require("../images/3cores.png")}
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
                Đổi ảnh đại diện
            </Text>
            </View>
        </View>
        {/* Device Image */}
        <Image
          source={require("../images/user_Top.png")}
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