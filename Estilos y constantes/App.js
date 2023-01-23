import { Text, View } from 'react-native';

import Header from './sources/components/Header';
import Start from './sources/Screens/Start';
import { StatusBar } from 'expo-status-bar';
import  {Styles} from './sources/Estilos/Estilos.js'

export default function App() {
  return (
    <View style={Styles.container}>
      
      <StatusBar style='auto' />
      <Header title={'Adivina el Numero'}/>
      <Start/>
    </View>
  );
}
<Styles/>

