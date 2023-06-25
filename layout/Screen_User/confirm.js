import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { Icon, Input, Item, Label } from "native-base";

import React, { useState } from "react";
import { useEffect } from "react";
import { auth } from "../Firebase/firebase";
import colors from "../Style/colors";
import { useNavigation } from "@react-navigation/core";
import { ref, onValue, set } from "firebase/database";
import { db } from "../Firebase/firebase";
import { ScrollView } from "react-native-gesture-handler";

const Confirm = ({ route }) => {
  const { data, data1 } = route.params;
  const navigation = useNavigation();

  const [currentDate, setCurrentDate] = useState("");
  const [sl, setSl]=useState();
  const [name, setName] = useState();
  const [lop, setLop] = useState();
  const [nameDevices, setNameDevices] = useState("");
  const uid = auth.currentUser?.email.substring(0, 8);
  const [count, setCount] = useState(1);
  const addQuantity = () => setCount((prevCount) => prevCount + 1);
  const subtractQuantity = () => setCount((prevCount) => prevCount - 1);

  function create() {
    set(ref(db, "Thong tin nguoi muon/" + uid + "/" + nameDevices), {
      Ten: name,
      Email: auth.currentUser.email,
      Time: currentDate,
      ThietBiMuon: nameDevices,
    })
      .then(() => {
        navigation.navigate("home");
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //database part end
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

    //get data thiet bi
    const starCountRef = ref(db, "Thong tin thiet bi/" + data);
    onValue(starCountRef, (snapshot) => {
      const data2 = snapshot.val().Ten;
      const data6=snapshot.val().Soluong;
      console.log(data6);
      setSl(data6);
      setNameDevices(data2);
    });

    // get data user
    const starInfoRef = ref(db, "User/" + data1);
    onValue(starInfoRef, (snapshot) => {
      const data4 = snapshot.val().Ten;
      const data5 = snapshot.val().Lop;
      setName(data4);
      setLop(data5);
    });
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          backgroundColor: colors.blue,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Xác Nhận Mượn Thiết Bị
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
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
        </View>

        <View
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
          
        </View>
        <View
          floatingLabel
          style={{
            borderRadius: 20,
            backgroundColor: colors["white-smoke"],
            borderWidth: 1,
            borderColor: colors.blue,
            paddingVertical: 5,
            margin: 20,
          }}
        >
          <Label
            style={{
              paddingStart: 20,
              fontSize: 15,
              color: colors.secondary,
            }}
          >
            Email
          </Label>

          <View style={{ paddingStart: 20 }}>
            <Text
              style={{
                fontSize: 18,
                color: colors.secondary,
                fontWeight: "bold",
              }}
            >
              {auth.currentUser?.email}
            </Text>
          </View>
        </View>

        <View
          floatingLabel
          style={{
            borderRadius: 20,
            backgroundColor: colors["white-smoke"],
            borderWidth: 1,
            borderColor: colors.blue,
            paddingVertical: 5,
            margin: 20,
            marginTop: -10,
          }}
        >
          <Label
            style={{
              paddingStart: 20,
              fontSize: 15,
              color: colors.secondary,
            }}
          >
            Họ và Tên
          </Label>

          <View style={{ paddingStart: 20 }}>
            <Text
              style={{
                fontSize: 18,
                color: colors.secondary,
                fontWeight: "bold",
              }}
            >
              {name}
            </Text>
          </View>
        </View>

        <View
          floatingLabel
          style={{
            borderRadius: 20,
            backgroundColor: colors["white-smoke"],
            borderWidth: 1,
            borderColor: colors.blue,
            paddingVertical: 5,
            margin: 20,
            marginTop: -10,
          }}
        >
          <Label
            style={{
              paddingStart: 20,
              fontSize: 15,
              color: colors.secondary,
            }}
          >
            Lớp
          </Label>

          <View style={{ paddingStart: 20 }}>
            <Text
              style={{
                fontSize: 18,
                color: colors.secondary,
                fontWeight: "bold",
              }}
            >
              {lop}
            </Text>
          </View>
        </View>

        <View
          floatingLabel
          style={{
            borderRadius: 20,
            backgroundColor: colors["white-smoke"],
            borderWidth: 1,
            borderColor: colors.blue,
            paddingVertical: 5,
            margin: 20,
            marginTop: -10,
          }}
        >
          <Label
            style={{
              paddingStart: 20,
              fontSize: 15,
              color: colors.secondary,
            }}
          >
            Thiết bị mượn/Số lượng còn
          </Label>

          <View style={{ paddingStart: 20 }}>
            <Text
              style={{
                fontSize: 18,
                color: colors.secondary,
                fontWeight: "bold",
              }}
            >
              {nameDevices}{'/'}{sl}
            </Text>
          </View>
        </View>

        <View
          floatingLabel
          style={{
            borderRadius: 20,
            backgroundColor: colors["white-smoke"],
            borderWidth: 1,
            borderColor: colors.blue,
            paddingVertical: 5,
            margin: 20,
            marginTop: -10,
          }}
        >
          <Label
            style={{
              paddingStart: 20,
              fontSize: 15,
              color: colors.secondary,
            }}
          >
            Thời gian mượn
          </Label>

          <View style={{ paddingStart: 20 }}>
            <Text
              style={{
                fontSize: 18,
                color: colors.secondary,
                fontWeight: "bold",
              }}
            >
              {currentDate}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={create}>
          <Text style={{ fontSize: 18, color: "white", alignSelf: "center" }}>
            Xác nhận
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Confirm;
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "black",
  },
  inputContainer: {
    borderBottomColor: colors["white-smoke"],
    borderBottomWidth: 1,
    zIndex: 0,
    marginStart: 20,
    marginEnd: 20,
    marginVertical: 20,
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginEnd: 100,
    marginStart: 100,
  },
});
