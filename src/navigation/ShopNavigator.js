import CategoriesItems from '../screens/CategoriesItems'
import DetailItems from '../screens/DetailItems'
import {NavigationContainer} from '@react-navigation/native'
import ProductsItems from '../screens/ProductsItems'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack= createNativeStackNavigator()

export default ShopNavigator= ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Categories'>
            <Stack.Screen name='Categories' component={CategoriesItems}/>
            <Stack.Screen name='Products' component={ProductsItems}/>
            <Stack.Screen name='Details' component={DetailItems}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}