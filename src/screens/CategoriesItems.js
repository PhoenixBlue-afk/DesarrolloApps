import { Button, Text, View } from 'react-native'

import React from 'react'
import Styles from '../Sty/Styles.js';

const CategoriesItems = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text>CategoriesItems</Text>
      <Button title='Go to products' onPress={()=>navigation.navigate('Products')}/>
    </View>
  )
}
<Styles/>
export default CategoriesItems