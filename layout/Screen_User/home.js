

import { View, Text, Image, Dimensions, StyleSheet, Modal, Alert } from "react-native";

import React, { useState, useEffect } from "react";
import { Icon, Input, Item, Label } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../Style/colors";
import { auth } from "../Firebase/firebase";
import { useNavigation } from "@react-navigation/core";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";

import { getDatabase, ref, onValue} from "firebase/database";
import text from "../Style/text";


const { width } = Dimensions.get("window");
const modalWidth = (4 * width) / 5;

const Home = ({ route }) => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);

  const navigateProfile = () => {
    const data = auth.currentUser?.email.substring(0,8);
    navigation.navigate('profile', { data: data });
    // navigation.navigate('profile');
  };
  const navigateConfirm = () => {
    // navigation.navigate('confirm', { data: devideID });
    // const data = deviceID;
    navigation.navigate('confirm', { data: deviceID });
  };
  const ongetDatabase=({data}) =>{
    const db = getDatabase();
    const starCountRef = ref(db, 'Thong tin thiet bi/'+ data +'/Ten');
    onValue(starCountRef, (snapshot) => {
      const ten = snapshot.val();
      // console.log=(data2);
      onChangedeviceName(ten);
    });
  };
  const [deviceID, setdeviceID] = useState("");
  const onChangedeviceID = (newdeviceID) => {
    setdeviceID(newdeviceID);
  };
  const [deviceName, setdeviceName] = useState("");
  const onChangedeviceName = (newdeviceName) => {
    setdeviceName(newdeviceName);
  };
  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    const string = data;
    if (type.toString() !== '256'){
      Alert.alert('Thông báo', 'Mã không phù hợp');
    } else {
      onChangedeviceID(data);
      ongetDatabase({data});
    }
    setScanData(undefined); 

    setModalVisible(false);
    // console.log(`Data: ${data}`);
    // console.log(`Type: ${type}`);
  };
  const scanBarcode = () => {
    //console.log("Scan Barcode Pressed");
    setModalVisible(true);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    const starCountRef = ref(db, "User/" + data + "/Ten");
    onValue(starCountRef, (snapshot) => {
      const data3 = snapshot.val();
      setInfo(data3);
      console.log(data3);
    });
  }, []);


  const navigateProfile = () => {
    navigation.navigate("profile", { data: data });
  };

  return (
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
          alignItems:'center'
        }}
      >
        <View
          style={{
            
            flexDirection: "column",
            margin: 10,
            marginTop: 50,
            marginEnd: 90,
            alignItems: "center",
            marginStart:10
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {info} {"\n"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: -20,
              color: "white",
            }}
          >
            {auth.currentUser?.email}
          </Text>
        </View>
        <View
          style={{


            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
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
                  fontSize: 13,
                }}
              >
                {auth.currentUser?.email}
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

      <TouchableOpacity onPress={navigateProfile}>
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

              backgroundColor: colors.deepblue,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginHorizontal: 60,
              borderRadius: 15,
              marginTop: 10,
              flexDirection: "row",
              marginBottom: 20,
              alignItems: "center",

            }}
          >
            Thông Tin Cá Nhân
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalView}>
            <BarCodeScanner
              style={StyleSheet.absoluteFillObject}
              onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
            />
            {scanData}
            <StatusBar style="auto" />
          </View>

        </TouchableOpacity>
        <View>
        <View style={{ height: 52 }}>
            <Item
              floatingLabel
              style={{
                paddingTop: 5,
                borderColor: colors.blue,
                borderRadius: 20,
                padding: 1,
                backgroundColor: colors["white-smoke"],
              }}
            >
              <Label
                style={{
                  paddingTop: -10,
                  padding: 10,
                  paddingStart: 15,
                  fontSize: text.inputText,
                }}
              >
                ID thiết bị
              </Label>
              <Input
                value={deviceID}
                readOnly
                onChangeText={onChangedeviceID}
                style={{ paddingStart: 15, color: colors.secondary }}
              ></Input>
            </Item>
            <Item
            floatingLabel
            style={{
              borderColor: colors.blue,
              padding: 1,
              marginTop: 10,
              borderRadius: 20,
              paddingStart: 20,
              backgroundColor: colors["white-smoke"],
            }}
          >
            <Label
              style={{
                paddingTop: -10,
                padding: 10,
                paddingStart: 15,
                fontSize: text.inputText,
              }}
            >
              Tên thiết bị
            </Label>
            <Input
              value={deviceName}
              readOnly
              onChangeText={onChangedeviceName}
              style={{ paddingStart: -10 }}
            ></Input>
          </Item>

            <TouchableOpacity
              style={{
                alignItems: "flex-end",
                marginTop: 5,
              }}
              onPress={navigateConfirm}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../images/task-done.png")}
              ></Image>
            </TouchableOpacity>
          </View>


          <Image
            source={require("../images/qr-scan.png")}
            style={{
              height: 250,
              width: 250,
              marginHorizontal: 50,
              marginTop: 100,
            }}
          ></Image>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    flex: 1,
    width: modalWidth,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
