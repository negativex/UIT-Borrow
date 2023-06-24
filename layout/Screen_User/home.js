import { View, Text, Image, Dimensions, StyleSheet, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ref, onValue } from "firebase/database";
import colors from "../Style/colors";
import { auth } from "../Firebase/firebase";
import { useNavigation } from "@react-navigation/core";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import { db } from "../Firebase/firebase";

const { width } = Dimensions.get("window");
const modalWidth = (4 * width) / 5;

const Home = ({ route }) => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [info, setInfo] = useState();
  const data = auth.currentUser?.email.substring(0, 8);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    setScanData(undefined);
    setModalVisible(false);
  };
  const scanBarcode = () => {
    console.log("Scan Barcode Pressed");
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
            alignItems: "flex-end",
            
            marginTop:-83,
            marginStart: 260,
            marginEnd:10
          }}
        >
          <Image
            source={require("../images/user_Top.png")}
            style={{ height: 70, width: 70 }}
          ></Image>
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
              fontSize: 14,
              width: 260,
              color: "#fff",
              paddingLeft: 15,
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
        </View>
      </Modal>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={scanBarcode}>
          <Image
            source={require("../images/qr-scan.png")}
            style={{
              height: 250,
              width: 250,
              marginHorizontal: 50,
              marginTop: 80,
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
