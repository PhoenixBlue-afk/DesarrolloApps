import OrdersScreeen from "../screens/OrdersScreeen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default OrdersNavigator =()=>{
    return(

            <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={{
                headerShadowVisible:false,
                headerTitleStyle:{
                    fontWeight:'bold',
                    
                }
            }}
            >

            <Stack.Screen
            name="Orders"
            component={OrdersScreeen}
            options={{
                title: "Ordenes",
            }}
            />

            </Stack.Navigator>

    )
}