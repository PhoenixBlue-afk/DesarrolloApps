import {Image, Text, TouchableOpacity, View} from 'react-native'

import React from 'react'
import Styles from '../Sty/Styles'

const ProductItem = ({item, onSelected}) => {
  return (
    <TouchableOpacity 
    // style={Styles.categoriesItem} 
    onPress={()=>{onSelected(item)}}>
            <View 
            style={Styles.cardContainer}
            >
                <Image
                style={Styles.Image}
                source={{url:'https://reactnative.dev/img/tiny_logo.png'}}
                />
            </View>
            <View 
            style={Styles.card}
            >
                <Text>
                    {item.name}
                </Text>
                <Text>
                    {item.description}
                </Text>
                <Text>
                    ${item.price}
                </Text>
            </View>
    </TouchableOpacity>
  )
}
<Styles/>

export default ProductItem