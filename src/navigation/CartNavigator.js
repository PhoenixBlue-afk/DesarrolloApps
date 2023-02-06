import CartScreen from "../screens/CartScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default CartNavigator=()=>{
    return(

            <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerShadowVisible:false,
                headerTitleStyle:{
                    fontWeight:'bold',
                    
                }
            }}
            >

            <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
                title: "Carrito",
            }}
            />

            </Stack.Navigator>

    )
}