import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
import { db } from "../Firebase/firebase";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../Style/colors";
import { ref, onValue } from "firebase/database";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

const SCREEN_WIDTH = Dimensions.get("window").width;
headerComponent = () => {
  return <Text style={{ fontSize: 18 }}>Thiết bị đã mượn</Text>;
};
itemSeparator = () => {
  return <View style={styles.separator} />;
};
const Device_list = ({ route }) => {
  const {data} = route.params;
  const navigation = useNavigation();
  const [value, setValue] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [DeviceText, setDeviceText] = useState();
  const onPressItem = (item) => {
    if(item.TrangThai === "Đang mượn"){
      navigation.navigate("return", { item })
    }
  };
  const Device = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
     // onPress={onPressItem(item)}
      onPress= {()=> navigation.navigate("return", { item })}
    >
      <View style={styles.avatarContainer}>
        <Image 
          // source={item.image} 
          source = {require("../images/Raspberry_Pi.png")}
          style={styles.avatar} 
        />
      </View>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}
      >
        <Text style={styles.name}>{item.ThietBiMuon}</Text>
        <Text style={styles.name}>{item.Time}</Text>
        <Text style={styles.name}>{"Trạng thái: " + item.TrangThai}</Text>
      </View>
    </TouchableOpacity>
  );
  useEffect(() => {
    // const mssv = data.toString();
    console.log(data);
    onValue(ref(db, "Thong tin nguoi muon/"+data), (snapshot) => {
      //đoạn này đang thiếu phần làm route từ màn hình home qua để lấy mssv
      var main = [];
      snapshot.forEach((child) => {
        main.push({
          ThietBiMuon: child.val().ThietBiMuon,
          Time: child.val().Time,
          TrangThai: child.val().TrangThai,
          Email: child.val().Email,
        });
      });
      setValue(main);
    });
  }, []);

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
          height: 120,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 10,
        }}
      >
        {/* Search */}
        <LinearGradient
          colors={["transparent", "transparent"]}
          style={{
            left: 0,
            right: 0,
            height: 50,
            marginTop: 50,
          }}
        >
          {/* Style Search Bar */}
          <View
            style={{
              backgroundColor: "#FFF",
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Input Search */}
            <TextInput
              placeholder="Nhập tên/mã thiết bị cần tìm"
              placeholderTextColor={colors["white-smoke"]}
              style={{
                fontSize: 13,
                width: 260,
              }}
            ></TextInput>

            {/* Search Image */}
            <Image
              source={require("../images/search_bottom.png")}
              style={{ height: 20, width: 20 }}
            ></Image>
          </View>
        </LinearGradient>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={headerComponent}
          data={value}
          renderItem={Device}
          ItemSeparatorComponent={itemSeparator}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.deepblue,
    borderRadius: 20,
    paddingVertical: 10,
    margin: 10,
  },

  textButton: {
    marginStart: 10,
    marginEnd: 10,
    marginVertical: 10,
    color: "white",
    fontSize: 18,
    alignSelf: "center",
  },
  listHeader: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    height: 1,
    width: "100%",
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },

  avatarContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    height: 80,
    width: 80,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 50,
    width: 80,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 13,
    color: "black",
  },
  title: {
    fontSize: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontSize: 25,
  },
});
export default Device_list;
