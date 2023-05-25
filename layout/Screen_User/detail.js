import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo";


export default class Detail extends React.Component {
  state = {
    quantity: 1,
  };

  addQuantity = (quantity) => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  subtractQuantity = (quantity) => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
  render() {
    return (
      <View style={{ backgroundColor: "#000", flex: 1 }}>
        <ScrollView>
          <View
            style={{
              backgroundColor: "#fff",
              height: "8%",
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 40,
                backgroundColor: "#fff",
                height: "1%",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
            >
              {/* go back button */}
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require("../images/back.png")}
                  style={{
                    alignItems: "center",
                    width: 33,
                    height: 32,
                    marginTop: 60,
                    marginLeft: -1,
                    marginBottom: 20,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  marginTop: -8,
                  fontWeight: "bold",
                  fontSize: 22,
                  color: "#EA5455",
                }}
              >
                Chi Tiết Thiết Bị
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 2,
              backgroundColor: "#EA5455",
              width: 390,
              marginTop: 20,
              borderRadius: 30,
            }}
          ></View>

          <Image
            source={require("../images/raspi.png")}
            style={{
              marginTop: -10,
              height: 270,
              width: 350,
              alignSelf: "center",
            }}
          ></Image>
          <View
            style={{
              height: 2,
              backgroundColor: "#EA5455",
              width: 390,
              marginTop: -1,
              borderRadius: 30,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              marginTop: 13,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity onPress={this.subtractQuantity}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>-</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingHorizontal: 20,
              }}
            >
              {this.state.quantity}
            </Text>

            <TouchableOpacity onPress={this.addQuantity}>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, color: "#EA5455" }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#fff",
                marginTop: 10,
              }}
            >
              Raspberry Pi 3 Model B
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#fff",
                marginTop: 10,
              }}
            >
              Máy Tính Nhúng
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: "#EA5455",
                marginTop: -40,
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                marginLeft: 300,
                paddingLeft: 25,
                backgroundColor: "#fff",
              }}
            >
              SL: 1
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#fff",
              marginTop: 30,
            }}
          >
            Thông Số:
          </Text>

          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              marginHorizontal: 20,
              textAlign: "justify",
              color: "#fff",
              marginRight: 10,
              marginLeft: 10,
              flexDirection: "row",
              borderRadius: 15,
              borderColor: "#EA5455",
              borderWidth: 1,
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Vi xử lý:</Text> Broadcom
            BCM2837B0, quad-core A53 (ARMv8) 64-bit SoC @1.4GHz {"\n\n"}
            RAM: 1GB LPDDR2 SDRAM {"\n\n"}
            Kết nối: 2.4GHz và 5GHz IEEE 802.11 b/g/n/ac wireless LAN, Bluetooth
            4.2, BLE, Gigabit Ethernet over USB 2.0 (Tối đa 300Mbps).
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Cổng USB:</Text> 4 x 2.0 Mở
            rộng: 40-pin GPIO {"\n\n"}
            Video và âm thanh: 1 cổng full-sized HDMI, Cổng MIPI DSI Display,
            cổng MIPI CSI Camera, cổng stereo output và composite video 4 chân.
            {"\n\n"}
            Multimedia: H.264, MPEG-4 decode (1080p30), H.264 encode (1080p30);
            OpenGL ES 1.1, 2.0 graphics.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Lưu trữ:</Text> MicroSD Nguồn
            điện sử dụng: 5V/2.5A DC cổng microUSB, 5V DC trên chân GPIO, Power
            over Ethernet (PoE) (yêu cầu thêm PoE HAT).
          </Text>
        </ScrollView>

        <View
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            height: 50,
            width: 50,
            bottom: 20,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 25,
          }}
        >
          <Image
            source={require("../images/qr-code.png")}
            style={{
              alignItems: "center",
              width: 25,
              height: 25,
              marginTop: 22,
              marginLeft: -1,
              marginBottom: 20,
            }}
          ></Image>
        </View>
      </View>
    );
  }
}
