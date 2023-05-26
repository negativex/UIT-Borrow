import { View, Text } from 'react-native'
import React from 'react'

const confirm = () => {
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
    </View>
  );
}

export default confirm