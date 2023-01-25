import { Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import Card from '../components/Card.js'
import Input from '../components/Input.js'
import React  from 'react'
import {Styles} from '../Estilos/Estilos.js'
import { useState } from 'react'

const Start = ({onStartGame}) => {
  const  [value, setValue] = useState('')
  const  [confirmed, setconfirmed] = useState(false)
  const  [selectedNumber, setSelectedNumber] = useState('')

  const handleInput=(text)=>{
    console.log(text);
    setValue(text.replace(/[^0-9]/g,''));
  }

  const handleResetInput=()=>{
    setValue('');
    setconfirmed(false)
  }
  const handleConfirmation=()=>{
    const newValue=parseInt(value)
    if (newValue === NaN || newValue <= 0 || newValue > 99 ) return
      setconfirmed(true)
      setSelectedNumber(newValue)
      setValue('')
      Keyboard.dismiss()
       
    
  }

  return (
    <KeyboardAvoidingView style={{flex:1}}>

    
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>


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
                <Button title='Clean' onPress={handleResetInput}/>
                <Button title='Confirm' onPress={handleConfirmation}/>
              </View>
            </Card>
            {confirmed && (
              <Card>
                <Text style={{color:'white'}}>Your number:</Text>
                <Text style={Styles.numsel}>{selectedNumber}</Text>
                <View>
                  <Button title='Start' onPress={()=>{onStartGame(selectedNumber)}}/>
                </View>
              </Card>
            )
            }
          </View>
        
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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

