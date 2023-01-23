import { Button, StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card.js'
import Input from '../components/Input.js'
import React  from 'react'
import {Styles} from '../Estilos/Estilos.js'
import { useState } from 'react'

const Start = () => {
  const  [value, setValue] = useState('')

  const handleInput=(text)=>{
    console.log(text);
    setValue(text.replace(/[^0-9]/g,''));
  }
  return (
    <View style={Styles.containerstart}>
      <Text style={Styles.startTitle}>Start Game</Text>
      
        <Card 
        newStyles={styles.inputContainer}
        >
          <Text style={Styles.subtitle}>Choose your number</Text>
          <Input
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='numeric'
          maxLength={2}
          value={value}
          onChangeText={handleInput}
          />
          <View style={Styles.buttons}>
            <Button title='Clean' onPress={()=>console.log('Clean')}/>
            <Button title='Confirm' onPress={()=>console.log('Confirm')}/>
          </View>
        </Card>
      </View>
    
  )
}
<Styles/>
const styles = StyleSheet.create({
  inputContainer:{
    width:300,
    maxWidth:'80%',
    padding:20,
    alignItems: 'center',
    shadowColor:'white',
    shadowOffset:{width:0, height:2},
    shadowRadius:10,
    shadowOpacity:0.3,
    elevation: 5,
    borderRadius:10,
    backgroundColor:'orange',

  },
});

export default Start

