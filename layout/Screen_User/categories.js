import { View, Text , FlatList, Touchable} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import item_categories from './items_categories'
import { TouchableOpacity } from 'react-native-web'

const categories = () => {
  return (
  
      <FlatList data={item_categories} keyExtractor={(item)=> item.id}
      renderItem={({item}) => (
      <TouchableOpacity >
        <Text style={{color:"red", fontSize:20}}>{item.name}</Text>
      </TouchableOpacity>)}
        
      /> 
  )
}

export default categories