import { Text, TextInput, View } from 'react-native'

import React from 'react'
import { Styles } from '../Estilos/Estilos'

const Input = ({newStyle, ...restProps}) => {
  return (
    <TextInput placeholder='Here your number' style={{...Styles.Input,newStyle}}{...restProps}/>
  )
}
<Styles/>
export default Input