import { View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { Icon, Input, Item, Label } from "native-base";

const Profile = (navigation) => {
  const [email, setEmail] = useState("");
  const onChangeEmail = (newEmail) => {
    setEmail(newEmail);
  };
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#EA5455",
          height: "12%",
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
      </View>

      <View style={{ padding: 30, paddingTop: 34 }}>
        <View
          floatingLabel
          style={{
            borderColor: "#EA5455",
            borderRadius: 20,
            backgroundColor: "white",
            paddingVertical: 5,
          }}
        >
          <Label
            style={{
              paddingStart: 20,
              fontSize: 15,
              color: "#EA5455",
            }}
          >
            Họ Và Tên
          </Label>

          <View style={{ width: "50%", paddingStart: 20 }}>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Ngoc Tran
            </Text>
          </View>
        </View>
      </View>

      <View style={{ padding: 30, paddingTop: 0 }}>
        <View
          floatingLabel
          style={{
            borderColor: "#EA5455",
            borderRadius: 20,
            backgroundColor: "white",
            paddingVertical: 5,
          }}
        >
          <Label
            style={{
              paddingStart: 20,
              fontSize: 15,
              color: "#EA5455",
            }}
          >
            Email Address
          </Label>

          <View style={{ width: "50%", paddingStart: 20 }}>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Ngoc Tran@
            </Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 30, paddingTop: 0 }}>
        <View
          floatingLabel
          style={{
            borderColor: "#EA5455",
            borderRadius: 20,
            backgroundColor: "white",
            paddingVertical: 5,
          }}
        >
          <Label
            style={{
              paddingStart: 20,
              fontSize: 15,
              color: "#EA5455",
            }}
          >
            Số Điện Thoại
          </Label>

          <View style={{ width: "50%", paddingStart: 20 }}>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              00000
            </Text>
          </View>
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
    </View>
  );
};

export default Profile;
