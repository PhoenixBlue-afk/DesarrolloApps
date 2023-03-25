import { Platform, TouchableOpacity } from 'react-native'

import { COLORS } from '../constants'
import Ionicons from '@expo/vector-icons/Ionicons'
import MapScreen from '../screens/MapScreen'
import NewItemScreen from '../screens/NewItemScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ProductListScreen from '../screens/ProductListScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const PlaceStack = createNativeStackNavigator()

const ProductsNavigator = () => (
    <PlaceStack.Navigator
        initialRoute='Place'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.BEIGE_CLARO : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.BEIGE_CLARO,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <PlaceStack.Screen
            name="Lista de productos"
            component={ProductListScreen}
            options={({navigation})=>({title: 'Lista de productos', headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Nuevo')}>
                <Ionicons
                name='md-add'
                color={Platform.OS==='android'?'white':COLORS.BEIGE_CLARO}
                size={23}
                />
            </TouchableOpacity>)})} 
        />
        <PlaceStack.Screen
            name="Detalle"
            component={ProductDetailScreen}
            options={{title: 'Detalle del producto'}} 
        />
        <PlaceStack.Screen
            name="Nuevo"
            component={NewItemScreen}
            options={{title: 'Agregar uno nuevo'}} 
        />
        <PlaceStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Mapa'}} 
        />
    </PlaceStack.Navigator>
)


export default ProductsNavigator