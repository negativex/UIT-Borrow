import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

const swiper = () => {
  return (
    <Swiper
    style={StyleSheet.wrapper}
    dotStyle={{
        marginTop:-200,
        width:15,
        height:5,
        boderRadius:10,
        backgroundColor:'#fff'
    }}>
    
    </Swiper>
  )
}

export default swiper