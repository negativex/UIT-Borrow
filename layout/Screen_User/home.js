import { View, Text, Image, Dimensions, Modal, StyleSheet } from "react-native";
import React, {useEffect } from "react";
import {
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import colors from "../Style/colors";
import { auth } from "../Firebase/firebase";
import { useNavigation } from "@react-navigation/core";

const SCREEN_WIDTH = Dimensions.get("window").width;
const { height, width } = Dimensions.get("window");
const modalWidth = (4 * width) / 5;

const Home = ({route}) => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    const string = data;
    // console.log(`Data: ${data}`);
    // console.log(`Type: ${type}`);
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
  }, []);
  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Cấp quyền truy cập Camera cho ứng dụng</Text>
      </View>
    );
  }
  // const { data } = route.params;
  const data = auth.currentUser?.email.substring(0,8);
  // console.log(data);
  const navigateProfile = () => {
    navigation.navigate('profile', { data: data });
    // navigation.navigate('profile');
  };
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
          height: "26%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
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
        {/* Name profile */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 55,
            paddingLeft: 55,
            width: "100%",
          }}
        >
          {/* Input User */}
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 25,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              {/* Ngoc Tran{"\n"} */}
              
              <Text
                style={{
                  fontSize: 15,
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

        {/* Search */}
        <TouchableOpacity
          onPress={navigateProfile}  
        >
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
            {/* Input Search */}

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
        <View>
          <Image
            source={require("../images/qr-scan.png")}
            style={{
              height: 250,
              width: 250,
              marginHorizontal: 50,
              marginTop: 80,
            }}
          ></Image>

          <View style={{ width: "90%", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                paddingHorizontal: 10,
                marginHorizontal: 50,
                marginTop: 50,
                paddingVertical: 6,
                borderRadius: 10,
                marginLeft: 70,
              }}
              onPress={scanBarcode}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                Quét Mã
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
