// import { View, Text, Image, StyleSheet } from "react-native";
// import React, { useState } from "react";
// import { ref, set, update } from "firebase/database";
// import {
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
// } from "react-native-gesture-handler";
// import { db } from "../Firebase/firebase";
// import { useNavigation } from "@react-navigation/core";
// import colors from "../Style/colors";

// const User_info = ({ route }) => {
//   const navigation = useNavigation();
//   const [name, setName] = useState(route.params.item.Ten);
//   const [type, setType] = useState(route.params.item.Loai);
//   const [count, setCount] = useState(route.params.item.SL);
//   const addQuantity = () => setCount((prevCount) => prevCount + 1);
//   const subtractQuantity = () => setCount((prevCount) => prevCount - 1);
//   function Update() {
//     update(ref(db, "Thong tin thiet bi/" + name), {
//       Ten: name,
//       Loai: type,
//       SL: count,
//     })
//       .then(() => {
//         console.log("success");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       <View
//         style={{
//           backgroundColor: colors.blue,
//           height: 80,
//           padding: 10,
//         }}
//       >
//         {/* go back button */}
//         <TouchableOpacity
//           style={{
//             marginEnd: 340,
//             margin: 10,
//             marginTop: 30,
//           }}
//           onPress={() => navigation.navigate("device_list")}
//         >
//           <Image
//             source={require("../images/back.png")}
//             style={{
//               width: 32,
//               height: 32,
//             }}
//           ></Image>
//         </TouchableOpacity>

//         <View
//           style={{
//             alignItems: "center",
//             alignSelf: "center",
//           }}
//         >
//           <Text
//             style={{
//               marginTop: -40,
//               fontWeight: "bold",
//               fontSize: 22,
//               color: "black",
//             }}
//           >
//             Thêm Thiết Bị
//           </Text>
//         </View>
//       </View>
//       <ScrollView>
//         <View
//           style={{
//             height: 2,
//             borderWidth: 1,
//             borderColor: colors.deepblue,
//             height: 220,
//             margin: 10,
//             borderRadius: 30,
//           }}
//         >
//           <Image
//             source={require("../images/addImage.png")}
//             style={{
//               marginTop: 10,
//               marginBottom: 10,
//               height: 200,
//               width: 200,
//               alignSelf: "center",
//             }}
//           ></Image>
//         </View>

//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             alignSelf: "center",
//             backgroundColor: colors["dark-light"],
//             paddingHorizontal: 20,
//             marginTop: 10,
//             paddingVertical: 8,
//             borderRadius: 20,
//           }}
//         >
//           <TouchableOpacity onPress={subtractQuantity}>
//             <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
//               -
//             </Text>
//           </TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 18,
//               fontWeight: "bold",
//               paddingHorizontal: 20,
//               color: "white",
//             }}
//           >
//             {count}
//           </Text>

//           <TouchableOpacity onPress={addQuantity}>
//             <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
//               +
//             </Text>
//           </TouchableOpacity>
//         </View>

//         <View style={{ margin: 10 }}>
//           <TextInput
//             editable={true}
//             selectTextOnFocus={true}
//             placeholder="Nhập tên thiết bị..."
//             style={styles.inputContainer}
//             onChangeText={(name) => {
//               setName(name);
//             }}
//             value={name}
//           ></TextInput>
//         </View>

//         <View style={{ margin: 10 }}>
//           <TextInput
//             editable={true}
//             selectTextOnFocus={true}
//             placeholder="Nhập loại thiết bị..."
//             style={styles.inputContainer}
//             onChangeText={(type) => {
//               setType(type);
//             }}
//             value={type}
//           ></TextInput>
//         </View>

//         <View style={{ margin: 10 }}>
//           <TextInput
//             editable={false}
//             selectTextOnFocus={false}
//             style={{
//               fontWeight: "bold",
//               fontSize: 18,
//               color: "#000",
//             }}
//           >
//             Thông số
//           </TextInput>
//         </View>

//         <TextInput
//           style={{
//             color: "#000",
//             margin: 10,
//             height: 100,
//             borderRadius: 10,
//             borderWidth: 1,
//             padding: 10,
//             paddingTop: -10,

//             borderColor: colors.deepblue,
//           }}
//           placeholder="Nhập thông tin thiết bị..."
//         ></TextInput>
//         <TouchableOpacity style={styles.buttonContainer} onPress={Update}>
//           <Text style={styles.textButton}>Cập nhập</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };
// export default User_info;

// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 18,
//     color: "black",
//   },
//   inputContainer: {
//     borderBottomColor: colors["white-smoke"],
//     borderBottomWidth: 1,
//     marginStart: 10,
//     marginEnd: 10,
//     marginVertical: 10,
//   },
//   buttonContainer: {
//     backgroundColor: colors.deepblue,
//     borderRadius: 20,
//     paddingVertical: 10,
//     margin: 10,
//   },

//   textButton: {
//     marginStart: 10,
//     marginEnd: 10,
//     marginVertical: 10,
//     color: "white",
//     fontSize: 18,
//     alignSelf: "center",
//   },
// });

import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Label } from "native-base";
import { ref, onValue } from "firebase/database";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/core";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../Style/colors";
import { db, auth } from "../Firebase/firebase";
import { useEffect } from "react";
const { width, height } = Dimensions.get("window");
const modalWidth = (4 * width) / 5;
const modalHeight = (2 * height) / 5;

const User_info = ({ route }) => {
  const navigation = useNavigation();
  const {data} = route.params;
  // console.log(data);
  const [info, setInfo] = useState();
  const [info2, setInfo2] = useState();
  const [info3, setInfo3] = useState();
  const [info4, setInfo4] = useState();
  const [modalVisible, setModalVisible] = React.useState(false);

  useEffect(() => {
    // const data = mssv.substring(0, 8);
    onValue(ref(db, "User/" + data), (snapshot) => {
      setInfo(snapshot.val().Email);
      setInfo2(snapshot.val().Lop);
      setInfo3(snapshot.val().Ten);
      setInfo4(snapshot.val().Password);
    });
  }, []);

  const handleBack = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("bottomAdmin");
      })
      .catch((error) => alert(error.message));
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
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            margin: 10,
            marginTop: 50,
            marginEnd: 90,
            alignItems: "center",
            marginStart: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {info3}
            {"\n"}
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

            marginTop: -83,
            marginStart: 260,
            marginEnd: 10,
          }}
        >
          <Image
            source={require("../images/user_Top.png")}
            style={{ height: 70, width: 70 }}
          ></Image>
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
            {info}
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
            {info3}
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
        }}
      >
        <Label
          style={{
            paddingStart: 20,
            fontSize: 15,
            color: colors.secondary,
          }}
        >
          MSSV
        </Label>

        <View style={{ paddingStart: 20 }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.secondary,
              fontWeight: "bold",
            }}
          >
            {data}
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
            {info2}
          </Text>
        </View>
      </View>

      <View
        style={{ width: "90%", alignItems: "center", flexDirection: "column" }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#EA5455",
            paddingHorizontal: 10,
            marginHorizontal: 50,
            marginTop: 50,
            paddingVertical: 6,
            borderRadius: 10,
            marginLeft: 70,
          }}
          onPress={handleBack}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#fff",
            }}
          >
            Quay lại
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    width: width,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    width: modalWidth,
    height: modalHeight,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  input: {
    height: 40,
    width: (modalWidth * 3) / 4,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  buttonSpacing: {
    width: 20,
  },
});
export default User_info;
