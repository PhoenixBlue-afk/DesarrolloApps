import {Button, Text, View} from 'react-native'
import React, { useEffect, useState } from 'react'

import Card from '../components/Card'
import { Styles } from '../Estilos/Estilos'

const Game = () => {
  const [currentGuess, setCurrentGuess] = useState()

  useEffect(()=>{
    setCurrentGuess(Math.floor(Math.random() * (100-1)+1))
  },[])
  return (
    <View style={Styles.containerGame}>
        
        <Text style={{color:'white', fontSize:25}}>Debes acertar para ganar</Text>
        <Text style={{color:'white', fontSize:35}}>{currentGuess}</Text>
        <Card >
        <View style={Styles.buttonContainer}>
          <Button title='Menor' onPress={()=>{console.log('Menor')}}/>
          <Button title='Mayor' onPress={()=>{console.log('Mayor')}}/>
        </View>
        </Card>
        
      
    </View>
  )
}
<Styles/>
export default Game

