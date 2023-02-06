import {Button, Text, View} from 'react-native'
import React, {useEffect} from 'react'

import Styles from '../Sty/Styles'

const DetailItems = ({navigation, route}) => {
  useEffect(() => {
    console.log(route.params)
  },[])
  return (
    <View style={Styles.container}>
      <Text>{route.params.name}</Text>
      <Button title='Go to Categories' onPress={()=>navigation.popToTop()}/>
    </View>
  )
}
<Styles/>
export default DetailItems