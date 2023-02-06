import BottomTabNav from './src/navigation/BottomTabNav';
import { NavigationContainer } from '@react-navigation/native';
import Styles from './src/Sty/Styles';
import {useFonts} from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    ItimRegular:require('./src/assets/Fonts/Itim/Itim-Regular.ttf')
  })
  if (!fontsLoaded) {
    return null
  }
  return (
    <NavigationContainer>
      <BottomTabNav/>

    </NavigationContainer>
  )
  
}
<Styles/>
