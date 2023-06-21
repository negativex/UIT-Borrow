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

const { height, width } = Dimensions.get('window');
const modalWidth = (3 * width) / 4;
const modalHeight = (3 * height) / 4;
const LoginScreen = ({route}) => {
  const [email, setEmail] = useState("");
  const onChangeEmail = (newEmail) => {
    setEmail(newEmail);
  };
  const [password, setPassword] = useState("");
  const onChangePassword = (newPassword) => {
    setPassword(newPassword);
  };
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        navigation.navigate("home");
        const user = userCredentials.user;
        console.log("Đăng nhập với tài khoản:", user.email);
        Alert.alert("Đăng nhập thành công", "Chào mừng bạn đến với ứng dụng ứng dụng", [
          { text: "Đóng", onPress: () => console.log("alert close") },
        ]);
      })
      .catch(() =>
        Alert.alert("Đăng nhập thất bại", "Tài khoản/mật khẩu chưa đúng", [
          { text: "Đóng", onPress: () => console.log("alert close") },
        ])
      );
  };
  // start Barcode part
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);
  const handleBarCodeScanned = ({type, data}) => {
    setScanData(data);
    const string = data;
    if (string.startsWith("15000")){
      const modifiedString = string.substring(5) + "@gm.uit.edu.vn";
      onChangeEmail(modifiedString);
    } else {
      onChangeEmail("Barcode không hợp lệ");
    }
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);
    setScanData(undefined); 
    setModalVisible(false);
  };
  const scanBarcode = () =>{
    console.log("Scan Barcode Pressed");
    setModalVisible(true);
  };
  useEffect(() => {
    (async() => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }
  //end Barcode part
  const { data } = route.params;
  console.log({data});
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.blue }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <View style={styles.modalView}>
              <BarCodeScanner 
                style={StyleSheet.absoluteFillObject}
                onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
                />
              {
                scanData
                // && <Button title='Done' onPress={() => {setScanData(undefined); setModalVisible(false);}}  />
              }
              <StatusBar style="auto" />
            </View>
          </View>
        </Modal>
        {/* Name */}
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: -55,
            paddingLeft: -5,
            width: "100%",
          }}
        >
          <View style={{ width: "110%", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 30,
                color: "#000",
                fontWeight: "bold",
                marginTop: 120,
              }}
            >
              Welcome To Room E3.1
            </Text>
          </View>

          {/*Image UIT */}
          <View style={{ width: "100%" }}>
            <Image
              source={require("../images/logo_uit.png")}
              style={{ marginLeft: 50, marginTop: 10 }}
            ></Image>
          </View>
          <View></View>
        </View>
      </View>

      {/* bottom view*/}
      <View style={styles.bottomView}>
        {/* welcome view */}
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: "#000",
              fontSize: 35,
              fontWeight: "bold",
              paddingHorizontal: 75,
            }}
          >
            {/* Đăng Nhập */}
            {data}
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#000",
            width: 250,
            marginTop: 0,
            marginLeft: 55,
            borderRadius: 30,
          }}
        ></View>
        {/* form input view */}
        <View style={{ padding: 30, paddingTop: 34 }}>
          <TouchableOpacity
            style={styles.buttonBarcode}
            onPress={scanBarcode}
          >
            <Text style={styles.buttonText}>Quét Barcode</Text>
          </TouchableOpacity>
          <Item
            floatingLabel
            style={{
              borderColor: colors.blue,
              borderRadius: 20,
              paddingBottom: -10,
            }}
          >
            <Label style={{ paddingStart: 20, fontSize: 15, color: "black" }}>
              Địa chỉ Email
            </Label>

            <Input
              value={email} readOnly
              editable={true}
              keyboardType="email-address"
              onChangeText={onChangeEmail}
              style={{ paddingStart: 20 }}
            ></Input>
            <Icon
              name="checkmark"
              style={{ color: "black", paddingBottom: 15, paddingEnd: 20 }}
            ></Icon>
          </Item>

          <Item
            floatingLabel
            style={{
              borderColor: colors.blue,
              marginTop: 30,
              borderRadius: 20,
              paddingStart: 20,
            }}
          >
            <Label style={{ paddingStart: 20, fontSize: 15, color: "black" }}>
              Mật khẩu
            </Label>
            <Input
              value={password}
              onChangeText={onChangePassword}
              style={{ paddingStart: -9 }}
            ></Input>
            <Icon
              name="eye"
              style={{ color: "black", paddingBottom: 15, paddingEnd: 20 }}
            ></Icon>
          </Item>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text
            style={{
              paddingTop: -5,
              fontSize: 15,
              paddingHorizontal: 20,
              marginStart: 130,
              padding: 15,
            }}
          >
            Chưa có tài khoản?{"  "}
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

        {/* button Login */}

        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    marginTop: 25,
    paddingBottom: 130,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: colors.deepblue,
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 20,
    marginEnd: 90,
    marginStart: 90,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBarcode: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 20,
    marginEnd: 90,
    marginStart: 90,
  },
  modalView: {
    flex:1,
    // backgroundColor: colors.deepblue,
    width: modalWidth,
    // height: modalHeight,
    borderRadius: 20,
    //marginTop: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});




