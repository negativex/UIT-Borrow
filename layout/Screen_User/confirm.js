import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import { auth } from "../Firebase/firebase";
import colors from "../Style/colors";

const Confirm = () => {
   const [currentDate, setCurrentDate] = useState("");

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
   }, []);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          backgroundColor: colors.blue,
          height: "12%",
          paddingHorizontal: 20,
        }}
      >
        {/* Name profile */}
        <View
          style={{
            alignItems: "center",
            marginTop: 46,
            width: "100%",
          }}
        >
          {/* Input User */}
          <Text
            style={{
              fontSize: 20,
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Xác nhận thông tin mượn thiết bị
          </Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput editable={false} selectTextOnFocus={false}>
          <Text style={styles.textStyle}>Tên: </Text>
          <Text style={styles.textStyle}>{auth.currentUser?.email}</Text>
        </TextInput>
      </View>

      <View style={styles.inputContainer}>
        <TextInput editable={false} selectTextOnFocus={false}>
          <Text style={styles.textStyle}>Địa chỉ Email: </Text>
          <Text style={styles.textStyle}>{auth.currentUser?.email}</Text>
        </TextInput>
      </View>

      <View style={styles.inputContainer}>
        <TextInput editable={false} selectTextOnFocus={false}>
          <Text style={styles.textStyle}>Thiết bị mượn: </Text>
          <Text style={styles.textStyle}>{auth.currentUser?.email}</Text>
        </TextInput>
      </View>

      <View style={styles.inputContainer}>
        <TextInput editable={false} selectTextOnFocus={false}>
          <Text style={styles.textStyle}>Thời gian mượn: </Text>
          <Text style={styles.textStyle}>{currentDate}</Text>
        </TextInput>
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={{fontSize:18, color:"white",alignSelf:'center'}}>Xác nhận</Text>
      </TouchableOpacity>
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
  },
  buttonContainer: {
    backgroundColor: colors.deepblue,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginEnd: 100,
    marginStart: 100,
  },
});
