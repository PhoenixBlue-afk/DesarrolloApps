import * as addressAction from "../store/items.action";

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FlatList } from 'react-native'
import Item from '../components/Item'

const ProductListScreen = ({navigation}) =>{
    const dispatch = useDispatch()
    const products = useSelector(state=>state.products.products)

    useEffect(() => {
        dispatch(addressAction.loadAddress());
      }, []);
    
    const renderItem= ({item})=>(
        <Item title={item.title} image={item.image} address={item.address} onSelect={()=> navigation.navigate('Detalle', {
            itemId:item.id,
        })} />
    )
    
    
    return (
        <FlatList
        data={products}
        keyExtractor={item=>item.id}
        renderItem={renderItem}
        />
    )
}



export default ProductListScreen
