import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity } from 'react-native'
// import colors from '../Style/colors'
import { Button } from 'react-native-paper';

const Onboarding = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:"#fff"}} >
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* handshake image */}
            <View style={{flex:1,flexDirection:"column",backgroundColor:'#fff'}} >
                <ImageBackground source={require('../images/Raspberry_Pi.png')}
                style={{flex:1,width:'100%', height:220,marginTop:150,backgroundColor:'#fff'}}  />
            </View>
            {/* button and text */}
            <View style={{flex:1,backgroundColor:'#fff'}} >
                {/* Text part */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#fff'}} >
                    <Text style={{fontFamily:'OpenSans-Bold',color:"#000",fontSize:30}} >UIT Borrow</Text>
                    <Text style={{maxWidth:'70%', fontFamily:'OpenSans-Medium',color:"#999",fontSize:15, textAlign:'center',paddingTop:10}} >Mượn và trả thiết bị dễ dàng với thẻ sinh viên của bạn</Text>
                </View>   
                {/* Button */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                    
                    <Button icon="arrow-right-box" mode="contained-tonal" buttonColor="#001d4a" textColor="#fff" onPress={()=>navigation.navigate("login")} >
                        Bắt đầu sử dụng
                    </Button>
                </View>
            </View>
        </View>
    )
};

export default Onboarding;

const styles = StyleSheet.create({})