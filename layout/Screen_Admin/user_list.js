import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, 
  Dimensions,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import colors from '../Style/colors';
const SCREEN_WIDTH = Dimensions.get("window").width;
const DATA = [
  {
    id: '11',
    name: 'Tran Nguyen Hoang Van A',
    mssv: "20526666",
    image: require("../images/user_Top.png"),
  },
  {
    id: '22',
    name: 'Sinh vien 2',
    mssv: "20526666",
    image: require("../images/user_Top.png"),
  },
  
 
];
const User_SV = ( {item} ) => ( 
  <View style={styles.item}>
    <View style={styles.avatarContainer}>
      <Image source={item.image} style={styles.avatar}/>
    </View>
    <Text style={styles.name}>{item.name}</Text> 
    <Text style={styles.mssv}>{item.mssv}</Text> 
  </View>
);
headerComponent = () => {
  return <Text>Danh sách toàn bộ Sinh viên</Text>
}
itemSeparator = () => {
  return <View style={styles.separator} />
}
const User_list = ({ navigation }) => {
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
          height: 150,
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
              placeholder="Nhập tên/mã sinh viên cần tìm"
              placeholderTextColor="#EA5455"
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
        ListHeaderComponentStyle= {styles.listHeader}
        ListHeaderComponent={headerComponent}
        data={DATA}
        renderItem={ User_SV }
        ItemSeparatorComponent= {itemSeparator}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    {/* Style Button Back to top */}
    
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
    // backgroundColor: '#ff7f50',
    marginVertical: 4,
    marginHorizontal: 8,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },
  avatarContainer: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 70,
    width: 70,
    justifyContent:'center',
    alignItems:'center',
  },
  avatar:{
    height:55,
    width:55,
  },
  name:{
    flex: 2,
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },
  mssv: {
    flex: 2,
    justifyContent:'center',
    alignItems:'center',
    fontSize: 16,
    marginLeft: 13,
  },
});

export default User_list;