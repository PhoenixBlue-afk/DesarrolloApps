import { Text, View } from 'react-native'

import React from 'react'
import { Styles } from '../Estilos/Estilos'

const Card = ({newStyles,children}) => {
  return (
    <View style={{...Styles.inputContainer, ...newStyles}}>
      {children}
    </View>
  )
}

<Styles/>
export default Card