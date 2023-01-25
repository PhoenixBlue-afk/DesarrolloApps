import { Text, View } from 'react-native'

import React from 'react'
import {Styles} from '../Estilos/Estilos.js'

const Header = ({title, newStyle}) => {
  return (
    <View style={Styles.header}>
      <Text style={{...Styles.headerTitle, ...newStyle}}>{title}</Text>
    </View>
  )
}
<Styles/>

export default Header

