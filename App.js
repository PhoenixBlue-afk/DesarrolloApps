import {Text, View} from 'react-native';

import ShopNavigator from './src/navigation/ShopNavigator';
import Styles from './src/Sty/Styles';
import {useFonts} from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    ItimRegular:require('./src/assets/Fonts/Itim/Itim-Regular.ttf')
  })
  if (!fontsLoaded) {
    return null
  }
  return <ShopNavigator/>
}
<Styles/>
