import {Button, FlatList, Text, View} from 'react-native'
import React, { useEffect } from 'react'

import { PRODUCTS } from '../data/products.js'
import ProductItem from '../components/ProductItem.js'
import Styles from '../Sty/Styles'

const ProductsItems = ({navigation, route}) => {

  const newListProducts = PRODUCTS.filter(prod=>prod.category===route.params.CategoryId)

  const handleSelectedProduct =(item)=>{
    navigation.navigate('Details',{
      name:item.name,
    })
  }

  const renderProductsItem =({item})=>(
  <ProductItem item={item} onSelected={handleSelectedProduct}/>
  )
  
  useEffect(()=>{
    console.log(route.params)
  },[])
  return (
    <View style={Styles.container}>
      <View>
        <FlatList data={newListProducts} renderItem={renderProductsItem} keyExtractor={item=>item.id} numColumns={2}/>
        {/* <ProductItem style={Styles.productContainer}/> */}
      </View>
      {/* <Text>ProductsItems</Text>
      <Button title="Go to Details" 
      onPress={()=>navigation.navigate('Details')}
      color="red"
      />
      <Button title='Go back' onPress={navigation.goBack()}/> */}
    </View>
  )
}
<Styles/>
export default ProductsItems