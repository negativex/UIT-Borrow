import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { ref, set, update } from "firebase/database";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { db } from "../Firebase/firebase";
import { useNavigation } from "@react-navigation/core";
import colors from "../Style/colors";
import Ionicons from "react-native-vector-icons/Ionicons";


const Return = ({ route }) => {
  const navigation = useNavigation();
  const [thietbimuon] = useState(route.params.item.ThietBiMuon);
  const [tgmuon] = useState(route.params.item.Time);
  const [email] = useState(route.params.item.Email);
  const [currentDate, setCurrentDate] = useState("");
  const [Ghichu, setGhichu] = useState("");
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    setCurrentDate(
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    );
  });
  const mssv = email.substring(0, 8);
  function Update() {
    update(ref(db, "Thong tin nguoi muon/" + mssv + "/" + thietbimuon), {
      ThoiGianTra: currentDate,
      GhiChu: Ghichu,
      TrangThai: "Đã trả",
    })
      .then(() => {
        console.log("success");
        navigation.navigate("bottomNav", {data: mssv});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: colors.blue,
          height: 80,
          padding: 10,
        }}
      >
        {/* go back button */}
        <TouchableOpacity
          style={{
            marginEnd: 340,
            margin: 10,
            marginTop: 30,
          }}
          onPress={() => navigation.navigate("bottomNav",{data: mssv})}
        >
          <Image
            
            source={require("../images/back.png")}
            style={{
              width: 32,
              height: 32,
            }}
          ></Image>
        </TouchableOpacity>

        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              marginTop: -40,
              fontWeight: "bold",
              fontSize: 22,
              color: "white",
            }}
          >
            Trả thiết bị
          </Text>
        </View>
      </View>
      <ScrollView>
        {/* <View
          style={{
            height: 2,
            borderWidth: 1,
            borderColor: colors.deepblue,
            height: 220,
            margin: 10,
            borderRadius: 30,
          }}
        >
          <Image
            source={require("../images/addImage.png")}
            style={{
              marginTop: 10,
              marginBottom: 10,
              height: 200,
              width: 200,
              alignSelf: "center",
            }}
          ></Image>
        </View> */}

        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: colors["dark-light"],
            paddingHorizontal: 20,
            marginTop: 10,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity onPress={subtractQuantity}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingHorizontal: 20,
              color: "white",
            }}
          >
            {count}
          </Text>

          <TouchableOpacity onPress={addQuantity}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              +
            </Text>
          </TouchableOpacity>
        </View> */}
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 17 }}>Tên thiết bị</Text>
          <TextInput
            editable={false}
            selectTextOnFocus={true}
            style={styles.textContainer}
            value={thietbimuon}
            fontSize={25}
          ></TextInput>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 17 }}>Thời gian mượn</Text>
          <TextInput
            editable={false}
            selectTextOnFocus={true}
            style={styles.textContainer}
            value={tgmuon}
            fontSize={25}
          ></TextInput>
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 17 }}>Người mượn</Text>
          <TextInput
            editable={false}
            selectTextOnFocus={true}
            style={styles.textContainer}
            value={email}
            fontSize={25}
          ></TextInput>
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 17 }}>Thời gian trả</Text>
          <TextInput
            editable={false}
            selectTextOnFocus={true}
            style={styles.textContainer}
            value={currentDate}
            fontSize={25}
          ></TextInput>
        </View>
        <View style={{ margin: 10 }}>
          <TextInput
            editable={false}
            selectTextOnFocus={false}
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#000",
            }}
          >
            Ghi chú (options)
          </TextInput>
        </View>

        <TextInput
          style={{
            color: "#000",
            margin: 10,
            height: 100,
            borderRadius: 10,
            borderWidth: 1,
            padding: 10,
            paddingTop: -10,
            fontSize: 17,
            borderColor: colors.deepblue,
          }}
          onChangeText={(Ghichu) => {
            setGhichu(Ghichu);
          }}
          placeholder="Nhập ghi chú (giữ data, các vấn đề liên quan)..."
        ></TextInput>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={Update}>
          <Text style={styles.textButton}>Xác nhận trả</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Return;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "black",
  },
  textContainer: {
    borderBottomColor: colors["white-smoke"],
    borderBottomWidth: 1,
    marginStart: 10,
    marginEnd: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    backgroundColor: colors.deepblue,
    borderRadius: 20,
    paddingVertical: 10,
    margin: 10,
    // justifyContent: 'flex-end',
    // position: 'absolute', bottom: 0,
  },

  textButton: {
    marginStart: 10,
    marginEnd: 10,
    marginVertical: 10,
    color: "white",
    fontSize: 18,
    alignSelf: "center",
  },
});
