import { Button, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const DetailsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const bread = useSelector(state => state.products.selected)

  useEffect(() => {
    console.log(route.params)
  }, [])

  

  return (
    <View style={styles.container}>
      <Text>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Button title="Add to cart" onPress={()=>{console.log('Agregado')}} />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})