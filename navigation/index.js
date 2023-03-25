import { NavigationContainer } from "@react-navigation/native";
import ProductsNavigator from './ProductsNavigator'
import React from 'react'

export default () => (
    <NavigationContainer>
        <ProductsNavigator />
    </NavigationContainer>
)