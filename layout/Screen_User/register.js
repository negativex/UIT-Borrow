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
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Icon, Input, Item, Label } from "native-base";
import colors from "../Style/colors";
import text from "../Style/text";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { db } from "../Firebase/firebase";
import { useNavigation } from "@react-navigation/core";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import { ref, set } from "firebase/database";

const { height, width } = Dimensions.get("window");
const modalWidth = (4 * width) / 5;

const modalHeight = (4 * height) / 5;

const RegisterScreen = ({ route }) => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);

  const [lop, setLop] = useState("");
  const onChangeClass = (Lop) => {
    setLop(Lop);
  };

  const [mssv, setMSSV] = useState("");
  const onChangeMSSV = (mssv) => {
    setMSSV(mssv);
  };

  const [name, setName] = useState("");
  const onChangeName = (Name) => {
    setName(Name);
  };

  const [email, setEmail] = useState("");
  const onChangeEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (newPassword) => {
    setPassword(newPassword);
  };

  const [repassword, setRePassword] = useState("");
  const onChangeRePassword = (rePassword) => {
    setRePassword(rePassword);
  };

  const handleRegister = () => {
    set(ref(db, "User/" + mssv), {
      Ten: name,
      Email: email,
      Password: password,
      Lop: lop,
    });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Đăng ký tài khoản:", user.email);

        Alert.alert("Đăng ký thành công", "Hãy đăng nhập ứng dụng", [
          { text: "Đóng", onPress: () => console.log("alert close") },
        ]);
      })
      .catch(() =>
        Alert.alert("Đăng ký thất bại", "Tài khoản/mật khẩu chưa đúng", [
          { text: "Đóng", onPress: () => navigation.navigate("login") },
        ])
      );
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    const string = data;
    if (string.startsWith("15000")) {
      const modifiedString = string.substring(5) + "@gm.uit.edu.vn";
      const modifiedMSSV = string.substring(5);
      onChangeEmail(modifiedString);
      onChangeMSSV(modifiedMSSV);
    } else {
      onChangeEmail("Barcode không hợp lệ");
    }
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);
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
              {scanData && (
                <Button
                  title="Done"
                  onPress={() => {
                    setScanData(undefined);
                    setModalVisible(false);
                  }}
                />
              )}
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
        <Image source={require("../images/logo_uit.png")} />
      </View>

      {/* bottom*/}
      <View style={styles.bottomView}>
        <View>
          <Text
            style={{
              color: "#000",
              fontSize: text.header,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Đăng Ký
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
                style={{ paddingStart: 15, color: colors.secondary, fontSize:2 }}
                onChangeText={onChangeEmail}
              ></Input>
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
              Họ và tên
            </Label>
            <Input
              value={name}
              onChangeText={onChangeName}
              style={{ paddingStart: -10 }}
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
              Lớp
            </Label>
            <Input
              value={lop}
              onChangeText={onChangeClass}
              style={{ paddingStart: -10 }}
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
              Nhập mật khẩu
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
              Nhập lại mật khẩu
            </Label>
            <Input
              value={repassword}
              onChangeText={onChangeRePassword}
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
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleRegister}
        >
          <Text style={styles.textButton}>Đăng Ký</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("login")}
        >
          <Text
            style={{
              fontSize: 15,
              paddingHorizontal: 20,
            }}
          >
            Bạn đã có tài khoản?{"  "}
            <Text
              style={{
                color: colors.primary,
                fontStyle: "italic",
                textDecorationLine: "underline",
              }}
            >
              Đăng nhập
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 20,
    alignItems: "center",
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
    width: 130,
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
