import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Button,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Icon, Input, Item, Label } from "native-base";
import colors from "../Style/colors";
import { auth } from "../Firebase/firebase";
import { useNavigation } from "@react-navigation/core";
import { signInWithEmailAndPassword } from "firebase/auth";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StatusBar } from 'expo-status-bar';
import text from "../Style/text";
// import { getDatabase, ref, onValue} from "firebase/database";

const { width } = Dimensions.get('window');
const modalWidth = (3 * width) / 4;


const LoginScreen = ({props}) => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);


  const [email, setEmail] = useState("");
  const onChangeEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (newPassword) => {
    setPassword(newPassword);
  };
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // navigation.navigate("home", { data: email});
        navigation.navigate('home');
        const user = userCredentials.user;
        console.log("Đăng nhập với tài khoản:", user.email);
      })
      .catch(() =>
        Alert.alert("Đăng nhập thất bại", "Tài khoản/mật khẩu chưa đúng", [
          { text: "Đóng", onPress: () => console.log("alert close") },
        ])
      );
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    const string = data;
    if (string.startsWith("15000")) {
      const modifiedString = string.substring(5) + "@gm.uit.edu.vn";
      onChangeEmail(modifiedString);
    } else {
      onChangeEmail("Barcode không hợp lệ");
    }
    // console.log(`Data: ${data}`);
    // console.log(`Type: ${type}`);
    setScanData(undefined); 
    setModalVisible(false);
  };

  const scanBarcode = () => {
    // console.log("Scan Barcode Pressed");
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
  //end Barcode part
  // const { data } = route.params;
  // console.log({data});
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.blue }}>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
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
      </View>

      {/* header */}
      <View
        style={{
          flexDirection: "column",
          margin: 50,
        }}
      >
        <Image source={require("../images/logo_uit.png")}></Image>
      </View>

      {/* bottom*/}
      <View style={styles.bottomView}>
        {/* welcome view */}
        <View>
          <Text
            style={{
              color: "#000",
              fontSize: text.header,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Đăng Nhập
          </Text>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: "#000",
            width: 250,
          }}
        ></View>

        {/*input*/}
        <View style={{ marginVertical: 20, width: 350 }}>
          <View style={{ height: 52 }}>
            <Item
              floatingLabel
              style={{
                borderColor: colors.blue,
                borderRadius: 20,
                padding: 1,
                marginEnd: 60,
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
                Địa chỉ Email
              </Label>
              <Input
                value={email}
                readOnly
                onChangeText={onChangeEmail}
                style={{ paddingStart: 15, color: colors.secondary }}
              ></Input>
              <Icon
                name="checkmark"
                style={{
                  color: "black",
                  paddingBottom: 15,
                  paddingEnd: 20,
                  fontSize: 2,
                }}
              ></Icon>
            </Item>

            <TouchableOpacity
              style={{
                alignItems: "flex-end",
                marginTop: -46,
                marginStart: 310,
              }}
              onPress={scanBarcode}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../images/barcode.png")}
              ></Image>
            </TouchableOpacity>
          </View>

          <Item
            floatingLabel
            style={{
              borderColor: colors.blue,
              padding: 1,
              marginTop: 30,
              borderRadius: 20,
              paddingStart: 20,
              backgroundColor: colors.container,
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
              Mật khẩu
            </Label>
            <Input
              value={password}
              onChangeText={onChangePassword}
              secureTextEntry={true}
              style={{ paddingStart: -10 }}
            ></Input>
            <Icon
              name="eye"
              style={{ color: "black", paddingBottom: 15, paddingEnd: 20 }}
            ></Icon>
          </Item>
        </View>

        {/* button Login */}

        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.textButton}>Đăng Nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => this.props.navigation.navigate("register")}
        >
          <Text
            style={{
              fontSize: 15,
              paddingHorizontal: 20,
            }}
          >
            Bạn chưa có tài khoản?{"  "}
            <Text
              style={{
                color: colors.primary,
                fontStyle: "italic",
                textDecorationLine: "underline",
              }}
            >
              Đăng ký
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 20,
    alignItems: "center",
    height:608
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    paddingVertical: 10,
    width: 150,
    margin: 10,
  },

  textButton: {
    marginStart: 10,
    marginEnd: 10,
    marginVertical: 10,
    color: "white",
    fontSize: text.buttonText,
    alignSelf: "center",
    fontWeight: "bold",
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
