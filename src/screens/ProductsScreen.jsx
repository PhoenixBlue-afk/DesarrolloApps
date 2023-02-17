import { FlatList, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import { filteredProduct, selectedProduct } from "../store/actions/products.action"
import { useDispatch, useSelector } from "react-redux"

import ProductsItem from "../components/ProductsItem"

const ProductsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const categoryProducts = useSelector(state=>state.products.filteredProduct)
  const category = useSelector(state=>state.categories.selected)

  useEffect(() => {
    dispatch(filteredProduct(category.id))
  }, [])

  const handleSelectedProduct = item => {
    dispatch(selectedProduct(item.id))
    navigation.navigate("Details", {
      name: item.name,
    })
  }

  const renderProductItem = ({ item }) => (
    <ProductsItem item={item} onSelected={handleSelectedProduct} />
  )

  return (
    <FlatList
      data={categoryProducts}
      renderItem={renderProductItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productsContainer: {
    height: 150,
    width: 150,
  },
})