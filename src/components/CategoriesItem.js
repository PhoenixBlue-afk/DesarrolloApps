import {Image, Text, TouchableOpacity, View} from 'react-native'

import React from 'react'
import Styles from '../Sty/Styles'

const CategoriesItem = ({item, onSelected}) => {
  return (
    <View 
    style={{...Styles.categoriesItem, ...{backgroundColor:item.color}}}
    >
        <TouchableOpacity 
        style={Styles.containerTouch} 
        onPress={()=>{onSelected(item)}}>
            <View style={Styles.textContainer}>
                <Text>
                    {item.title}
                </Text>
            </View>
            <View 
            style={Styles.imageContainer}
            >
                <Image
                style={Styles.Image}
                source={{url: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
            </View>
        </TouchableOpacity>
    </View>
  )
}
<Styles/>
export default CategoriesItem

