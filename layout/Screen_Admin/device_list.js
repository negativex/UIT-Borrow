import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { db } from "../Firebase/firebase";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import colors from "../colors/colors";
import { LinearGradient } from "expo-linear-gradient";
import { ref, onValue } from "firebase/database";

const SCREEN_WIDTH = Dimensions.get("window").width;
headerComponent = () => {
  return <Text style={{ fontSize: 18 }}>Danh sách toàn bộ Thiết bị</Text>;
};
itemSeparator = () => {
  return <View style={styles.separator} />;
};
const Device_list = ({ navigation }) => {
  const [value, setValue] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [DeviceText, setDeviceText] = useState()
  const onPressItem = (item) => {
    setModalVisible(true);
    //setDeviceText(item.text);
  }
  const Device = ({ item }) => (
      <TouchableOpacity 
        style={styles.item}
        onPress={() => onPressItem(item)}
      >
        <View style={styles.avatarContainer}>
          <Image source={item.image} style={styles.avatar} />
        </View>
        <Text style={styles.name}>{item.key}</Text>
      </TouchableOpacity>
  );
  useEffect(() => {
    onValue(ref(db, "Thong tin thiet bi"), (snapshot) => {
      var main = [];
      snapshot.forEach((child) => {
        console.log(child.val());
        main.push({
          key: child.val().Ten,
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
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text 
                style={styles.modalText}
              >Chua biet day cai data vao ;-;</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Back</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
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
    width: 50,
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
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 25,
  },
});
export default Device_list;
