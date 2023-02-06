import {FlatList, Text, View} from 'react-native'

import { Categories } from '../data/categories.js';
import CategoriesItem from '../components/CategoriesItem.js';
import React from 'react'
import Styles from '../Sty/Styles.js';
import { useEffect } from 'react';

const CategoriesItems = ({navigation, route}) => {
  useEffect(() =>{
    console.log(route.params)
  })

  const handleSelectedCategory = item=>{
    navigation.navigate('Products', {
      CategoryId: item.id,
      title: item.title,
    })
  }

  const renderCategoriesItems=({item})=>(
    <View style={Styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory}/>
    </View>
  )

  return (

      <View style={{...Styles.container, ...Styles.categoriesContainer}}>
        <FlatList data={Categories} renderItem={renderCategoriesItems} keyExtractor={item=>item.id}/>
        {/* <CategoriesItem/> */}
        {/* <Text>CategoriesItems</Text> */}
        {/* <Button title='Go to products' onPress={()=>navigation.navigate('Products')}/> */}
      </View>

  )
}
<Styles/>
export default CategoriesItems