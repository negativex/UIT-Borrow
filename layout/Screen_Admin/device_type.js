

// import { View, Text, Image, Dimensions } from "react-native";
// import React from "react";
// import {
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native-gesture-handler";
// import { LinearGradient } from "expo-linear-gradient";
// const SCREEN_WIDTH = Dimensions.get("window").width;
// import colors from "../Style/colors";
// const device_type = ({ navigation }) => {
//   return (
//     // Top View
//     <ScrollView
//       style={{
//         backgroundColor: "#000",
//         flex: 1,
//       }}
//     >
//       {/* Style Top View */}
//       <View
//         style={{
//           backgroundColor: colors.blue,
//           height: "20%",
//           borderBottomLeftRadius: 20,
//           borderBottomRightRadius: 20,
//           paddingHorizontal: 20,
//         }}
//       >
//         {/* Search */}
//         <LinearGradient
//           colors={["transparent", "transparent"]}
//           style={{
//             left: 0,
//             right: 0,
//             height: 90,
//             marginTop: 50,
//           }}
//         >
//           {/* Style Search Bar */}
//           <View
//             style={{
//               backgroundColor: "#FFF",
//               paddingVertical: 12,
//               paddingHorizontal: 20,
//               marginHorizontal: 20,
//               borderRadius: 15,
//               marginTop: 10,
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             {/* Input Search */}
//             <TextInput
//               placeholder="Nhập loại thiết bị cần tìm"
//               placeholderTextColor="#EA5455"
//               style={{
//                 fontSize: 13,
//                 width: 260,
//               }}
//             ></TextInput>

//             {/* Search Image */}
//             <Image
//               source={require("../images/search_bottom.png")}
//               style={{ height: 20, width: 20 }}
//             ></Image>
//           </View>
//         </LinearGradient>

//         {/* Embedded Devices */}
//         <View
//           style={{
//             flexDirection: "row",
//             paddingHorizontal: 20,
//             width: "100%",
//             alignItems: "center",
//           }}
//         >
//           {/* Style Input Devices View*/}
//           <View style={{ width: "55%" }}>
//             <Text
//               style={{
//                 fontWeight: "bold",
//                 fontSize: 18,
//                 marginTop: 35,
//                 marginLeft: -15,
//                 color: "#fff",
//                 flexDirection: "row",
//               }}
//             >
//               Máy Tính Nhúng
//             </Text>
//             <View
//               style={{
//                 height: 4,
//                 backgroundColor: "#EA5455",
//                 width: 115,
//                 marginTop: 5,
//                 marginLeft: -15,
//               }}
//             ></View>
//           </View>

//           {/* Style Button More */}
//           <View style={{ width: "50%", alignItems: "flex-end" }}>
//             <View
//               style={{
//                 backgroundColor: "#EA5455",
//                 paddingHorizontal: 10,
//                 marginTop: 35,
//                 paddingVertical: 6,
//                 borderRadius: 10,
//               }}
//             >
//               <Text
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: 18,
//                   color: "#fff",
//                 }}
//               >
//                 Thay đổi
//               </Text>
//             </View>
//           </View>
//         </View>

//         {/* Scrolling Embedded*/}
//         <View>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             style={{ height: 200 }}
//           >
//             {/* Raspi */}
//             <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   paddingTop: 10,
//                   backgroundColor: "#fff",
//                   paddingVertical: 15,
//                   paddingHorizontal: -9,
//                   marginHorizontal: 10,
//                   borderRadius: 15,
//                   marginTop: 20,
//                   alignItems: "center",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontWeight: "bold",
//                     paddingLeft: 10,
//                     paddingRight: 10,
//                     fontSize: 15,
//                     color: "#EA5455",
//                   }}
//                 >
//                   Raspberry Pi 3 Ultra
//                 </Text>
//               </View>
//               <Image
//                 source={require("../images/raspi.png")}
//                 style={{
//                   height: SCREEN_WIDTH * 0.3,
//                   width: SCREEN_WIDTH * 0.45,
//                   marginTop: SCREEN_WIDTH * 0.01,
//                 }}
//               ></Image>
//             </TouchableOpacity>

//             {/* Arduino1 */}
//             <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   backgroundColor: "#fff",
//                   paddingVertical: 10,
//                   borderRadius: 15,
//                   marginTop: 20,
//                   marginLeft: 20,
//                   marginRight: 0,
//                   alignItems: "center",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontWeight: "bold",
//                     paddingLeft: 10,
//                     paddingRight: 10,
//                     fontSize: 15,
//                     color: "#EA5455",
//                   }}
//                 >
//                   Arduino Uno
//                 </Text>
//               </View>
//               <Image
//                 source={require("../images/arduino.png")}
//                 style={{
//                   height: SCREEN_WIDTH * 0.3,
//                   width: SCREEN_WIDTH * 0.4,
//                   marginTop: SCREEN_WIDTH * 0.03,
//                   marginLeft: SCREEN_WIDTH * 0.03,
//                 }}
//               ></Image>
//             </TouchableOpacity>

//             {/* Arduino 2 */}
//             <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   backgroundColor: "#fff",
//                   paddingVertical: 10,
//                   borderRadius: 15,
//                   marginTop: 20,
//                   marginLeft: 20,
//                   marginRight: 0,
//                   alignItems: "center",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontWeight: "bold",
//                     paddingLeft: 10,
//                     paddingRight: 10,
//                     fontSize: 15,
//                     color: "#EA5455",
//                   }}
//                 >
//                   Arduino Uno
//                 </Text>
//               </View>
//               <Image
//                 source={require("../images/arduino.png")}
//                 style={{
//                   height: SCREEN_WIDTH * 0.3,
//                   width: SCREEN_WIDTH * 0.4,
//                   marginTop: SCREEN_WIDTH * 0.03,
//                   marginLeft: SCREEN_WIDTH * 0.03,
//                 }}
//               ></Image>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>

//         <View
//           style={{
//             height: 1,
//             backgroundColor: "#EA5455",
//             width: 340,
//             marginTop: 10,
//             marginLeft: -15,
//             borderRadius: 30,
//           }}
//         ></View>


//         {/* Cables/Wires*/}
//         <View
//           style={{
//             flexDirection: "row",
//             paddingHorizontal: 20,
//             width: "100%",
//             alignItems: "center",
//           }}
//         >
//           {/* Style Input Devices View*/}
//           <View style={{ width: "55%" }}>
//             <Text
//               style={{
//                 fontWeight: "bold",
//                 fontSize: 18,
//                 marginTop: 15,
//                 marginLeft: -15,
//                 color: "#fff",
//                 flexDirection: "row",
//               }}
//             >
//               Dây Cáp/Dây Nạp
//             </Text>
//             <View
//               style={{
//                 height: 4,
//                 backgroundColor: "#EA5455",
//                 width: 115,
//                 marginTop: 5,
//                 marginLeft: -15,
//               }}
//             ></View>
//           </View>

//           {/* Style Button More */}
//           <View style={{ width: "50%", alignItems: "flex-end" }}>
//             <View
//               style={{
//                 backgroundColor: "#EA5455",
//                 paddingHorizontal: 10,
//                 marginTop: 15,
//                 paddingVertical: 6,
//                 borderRadius: 10,
//               }}
//             >
//               <Text
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: 18,
//                   color: "#fff",
//                 }}
//               >
//                 Thay đổi
//               </Text>
//             </View>
//           </View>
//         </View>

//         {/* Scrolling Cables/Wires*/}
//         <View>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             style={{ height: 280 }}
//           >
//             {/* Wire */}
//             <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   backgroundColor: "#fff",
//                   paddingVertical: 10,
//                   marginLeft: 10,
//                   borderRadius: 15,
//                   marginTop: 20,
//                   alignItems: "center",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontWeight: "bold",
//                     paddingLeft: 10,
//                     paddingRight: 10,
//                     fontSize: 15,
//                     color: "#EA5455",
//                   }}
//                 >
//                   Dây Nối
//                 </Text>
//               </View>
//               <Image
//                 source={require("../images/wires.png")}
//                 style={{
//                   height: SCREEN_WIDTH * 0.25,
//                   width: SCREEN_WIDTH * 0.18,
//                   marginTop: SCREEN_WIDTH * 0.03,
//                   marginLeft: SCREEN_WIDTH * 0.03,
//                 }}
//               ></Image>
//             </TouchableOpacity>

//             {/* Core2 */}
//             <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   backgroundColor: "#fff",
//                   paddingVertical: 10,
//                   borderRadius: 15,
//                   marginTop: 20,
//                   marginLeft: 20,
//                   marginRight: 0,
//                   alignItems: "center",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontWeight: "bold",
//                     paddingLeft: 10,
//                     paddingRight: 10,
//                     fontSize: 15,
//                     color: "#EA5455",
//                   }}
//                 >
//                   2 Lõi
//                 </Text>
//               </View>
//               <Image
//                 source={require("../images/2cores.png")}
//                 style={{
//                   height: SCREEN_WIDTH * 0.25,
//                   width: SCREEN_WIDTH * 0.25,
//                   marginTop: SCREEN_WIDTH * 0.03,
//                   marginLeft: SCREEN_WIDTH * 0.03,
//                 }}
//               ></Image>
//             </TouchableOpacity>

//             {/* Core 4 */}
//             <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   backgroundColor: "#fff",
//                   paddingVertical: 10,
//                   borderRadius: 15,
//                   marginTop: 20,
//                   marginLeft: 20,
//                   marginRight: 0,
//                   alignItems: "center",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontWeight: "bold",
//                     paddingLeft: 10,
//                     paddingRight: 10,
//                     fontSize: 15,
//                     color: "#EA5455",
//                   }}
//                 >
//                   4 Lõi
//                 </Text>
//               </View>
//               <Image
//                 source={require("../images/3cores.png")}
//                 style={{
//                   height: SCREEN_WIDTH * 0.25,
//                   width: SCREEN_WIDTH * 0.25,
//                   marginTop: SCREEN_WIDTH * 0.03,
//                   marginLeft: SCREEN_WIDTH * 0.03,
//                 }}
//               ></Image>
//             </TouchableOpacity>

//             {/* Core 4 */}
//             <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   backgroundColor: "#fff",
//                   paddingVertical: 10,
//                   borderRadius: 15,
//                   marginTop: 20,
//                   marginLeft: 20,
//                   marginRight: 0,
//                   alignItems: "center",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontWeight: "bold",
//                     paddingLeft: 10,
//                     paddingRight: 10,
//                     fontSize: 15,
//                     color: "#EA5455",
//                   }}
//                 >
//                   4 Lõi
//                 </Text>
//               </View>
//               <Image
//                 source={require("../images/3cores.png")}
//                 style={{
//                   height: SCREEN_WIDTH * 0.25,
//                   width: SCREEN_WIDTH * 0.25,
//                   marginTop: SCREEN_WIDTH * 0.03,
//                   marginLeft: SCREEN_WIDTH * 0.03,
//                 }}
//               ></Image>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//         {/* Style Button More */}
//         <View style={{ width: "100%", alignItems: "flex-start" }}>
//             <View
//               style={{
//                 backgroundColor: "#EA5455",
//                 paddingHorizontal: 10,
//                 marginTop: 5,
//                 paddingVertical: 6,
//                 borderRadius: 10,
//               }}
//             >
//               <Text
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: 18,
//                   color: "#fff",
//                 }}
//               >
//                 Xoá thiết bị
//               </Text>
//             </View>
//           </View>
//           {/* Style Button More */}
//         <View style={{ width: "100%", alignItems: "flex-end" }}>
//             <View
//               style={{
//                 backgroundColor: "#EA5455",
//                 paddingHorizontal: 10,
//                 marginTop: -41,
//                 paddingVertical: 6,
//                 borderRadius: 10,
//               }}
//             >
//               <Text
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: 18,
//                   color: "#fff",
//                 }}
//               >
//                 Thêm loại thiết bị
//               </Text>
//             </View>
//           </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default device_type;
