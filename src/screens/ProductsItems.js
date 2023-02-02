import {Button, Text, View} from 'react-native'

import React from 'react'
import Styles from '../Sty/Styles'

const ProductsItems = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text>ProductsItems</Text>
      <Button title="Go to Details" onPress={()=>navigation.navigate('Details')}/>
    </View>
  )
}
<Styles/>
export default ProductsItems