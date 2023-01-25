import Game from './sources/Screens/Game';
import Header from './sources/components/Header';
import Start from './sources/Screens/Start';
import { StatusBar } from 'expo-status-bar';
import  {Styles} from './sources/Estilos/Estilos.js'
import {View} from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  const [loaded]=useFonts({
    ShadowsIntoLightRegular:require('./sources/assets/Fonts/ShadowsIntoLight-Regular.ttf')
  })
  const [userNumber,setUserNumber]=useState()

  const handleStartGame = (selectedNumber)=>{
    setUserNumber(selectedNumber)
  }

  let content = <Start onStartGame={handleStartGame}/>

  if (userNumber) {
    content=<Game/>
  }

  if (!loaded) {
    return null
  }

  return (
    <View style={Styles.container}>
      
      <StatusBar style='auto' />
      <Header title={'Adivina el Numero'} newStyle={{fontFamily:'ShadowsIntoLightRegular'}}/>
      {content}
    </View>
  );
}
<Styles/>

