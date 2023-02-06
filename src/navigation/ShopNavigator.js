import CategoriesItems from '../screens/CategoriesItems'
import DetailItems from '../screens/DetailItems'
import ProductsItems from '../screens/ProductsItems'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack= createNativeStackNavigator()

export default ShopNavigator= ()=>{
    return (
        
            <Stack.Navigator initialRouteName='Categories' screenOptions={{
                headerShadowVisible:false,
                headerTitleStyle:{
                    fontWeight:'bold',
                    
                }
            }}>
            <Stack.Screen name='Categories' component={CategoriesItems} options={{
                title:'Mi Panaderia'
            }}/>
            <Stack.Screen name='Products' component={ProductsItems} options={({route})=>({title: route.params.title})}/>
            <Stack.Screen name='Details' component={DetailItems} options={({route})=>({title: route.params.name})}/>
            </Stack.Navigator>

    )
}