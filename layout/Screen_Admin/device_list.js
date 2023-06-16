import React, {useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, 
  Dimensions,
  SafeAreaView,
  FlatList,
  
} from 'react-native';
import { db } from '../Firebase/firebase';
import { ref, onValue } from "firebase/database";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import colors from '../colors/colors';
import { LinearGradient } from "expo-linear-gradient";
const SCREEN_WIDTH = Dimensions.get("window").width;
// const [data, setData]=useState([]);

// useEffect(()=>{
//   const startCountRef=ref(db,'Thong tin thiet bi/');
//   onValue(startCountRef,(snapshot)=>{
//     const data=snapshot.val();
//     const newitems=Object.keys(data).map(key=>({
//       id:key,
//       ...data[key]
//     }))
//     console.log(newitems);
//     setData(newitems);
//   });
// },[])
const DATA = [
  {
    id: '11',
    name: 'First Item',
    image: require("../images/jetson.png"),
  },
  {
    id: '22',
    name: 'Second Item',
    image: require("../images/jetson.png"),
  },
  {
    id: '33',
    name: 'Third Item',
    image: require("../images/jetson.png"),
  },
  {
    id: '44',
    name: 'First Item',
    image: require("../images/jetson.png"),
  },
  {
    id: '55',
    name: 'Second Item',
    image: require("../images/jetson.png"),
  },
  {
    id: '66',
    name: 'Third Item',
    image: require("../images/jetson.png"),
  },
  {
    id: '77',
    name: 'Item',
    image: require("../images/jetson.png"),
  },
  {
    id: '88',
    name: 'Item',
    image: require("../images/jetson.png"),
  },
];
const Device = ( {item} ) => ( 
  <View style={styles.item}>
    <View style={styles.avatarContainer}>
      <Image source={item.image} style={styles.avatar}/>
    </View>
    <Text style={styles.name}>{item.name}</Text> 
  </View>
);
headerComponent = () => {
  return <Text>Danh sách toàn bộ Thiết bị</Text>
}
itemSeparator = () => {
  return <View style={styles.separator} />
}
const homeAdmin = ({ navigation }) => {
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
          data={DATA}
          renderItem={Device}
          ItemSeparatorComponent={itemSeparator}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      {/* Style Button More */}
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <View
          style={{
            backgroundColor: "#EA5455",
            paddingHorizontal: 10,
            marginTop: 0,
            marginRight: 20,
            marginBottom: 20,
            paddingVertical: 6,
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "#fff",
            }}
          >
            Top
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

   
  
const styles = StyleSheet.create({
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator:{
    height:1,
    width: '100%',
    backgroundColor: '#CCC',
  },
  // container: {
  //   flex: 1,
  //   marginTop: StatusBar.currentHeight || 0,
  //   marginHorizontal: 16
  // },
  item: {
    //backgroundColor: '#ff7f50',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    flex:1 ,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },
  avatarContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 80,
    width:80,
    justifyContent:'center',
    alignItems:'center',
  },
  avatar:{
    height:55,
    width:55,
  },
  name:{
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },
  title: {
    fontSize: 20,
  },
});

export default homeAdmin;