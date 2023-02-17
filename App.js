import BottomTabNavigator from "./src/navigation/BottomTabNavigator"
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import store from "./src/store"
import { useFonts } from "expo-font"

export default function App() {
  const [fontsLoaded] = useFonts({
    DancingSCript: require("./src/assets/fonts/DancingScript-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  )
}
