import { Button, Text, TextInput, View } from 'react-native'

import React from 'react'
import styles from '../Estilos/estilos.js'

const AddItem = ({onAddItem,onchange,textvalue}) => {
  return (
    <View style={styles.cont}>
        <Text style={styles.title}>
        
          Su lista de compras
        </Text>
        <TextInput 
        placeholder='Inserte su elemento here' 
        onChangeText={onchange} 
        value={textvalue} >
        </TextInput>
        <View style={styles.buttonView}>
        <Button style={styles.buttonView}title='Add Item Now!' onPress={onAddItem}/>
        </View>
      

      </View>
  )
}
<styles/>
export default AddItem