import { View, Text, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ref, onValue } from "firebase/database";
import { auth } from "../Firebase/firebase";
import colors from "../Style/colors";
import text from "../Style/text";
import { db } from "../Firebase/firebase";
import RegisterScreen from "./register";
const SCREEN_WIDTH = Dimensions.get("window").width;

const Home = ({ navigation, route}, props ) => {
 const user = auth.currentUser;
const [value, setValue] = useState([]);
const [info,setInfo]=useState('')
useEffect(() => {
  onValue(ref(db, "User/"), (snapshot) => {
    var main = [];
    var id = auth.currentUser.email;
    var Id=id.substring(0,8)
    console.log(Id);
    snapshot.forEach((child) => {
      
      const fetchedData = child.val();
      setInfo(fetchedData);
      main.push({
        Ten: child.val().Ten,
        Email: child.val().Email,
        Lop: child.val().Lop,
      });
    });
    setValue(main);
    
  });
}, []);
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
          height: 150,
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
            margin: 20,
          }}
        >
          {/* Input User */}
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: text.nameText,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {info.Ten}
              {"\n"}
            </Text>

            <Text
              style={{
                marginTop: -20,
                fontSize: text.mailText,
                color: colors.white,
              }}
            >
              {auth.currentUser?.email}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            marginVertical: -95,
            marginLeft: 275,
          }}
        >
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
          <Text
            style={{
              fontSize: 14,
              width: 260,
              color: "#fff",
              paddingLeft: 15,
            }}
          >id</Text>
        </View>
      </TouchableOpacity>

      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../images/qr-scan.png")}
          style={{
            height: 250,
            width: 250,
            marginHorizontal: 50,
            marginTop: 80,
          }}
        ></Image>
      </View>
    </ScrollView>
  );
};

export default Home;
