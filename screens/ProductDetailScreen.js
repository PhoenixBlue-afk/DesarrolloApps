import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../constants'
import MapPreview from '../components/MapPreview'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetailScreen = ({route}) => {

    const {itemId}=route.params
    const product= useSelector(state=>state.products.products.find(item=>item.id === itemId))

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{uri:product.image}} style={styles.image}/>
            <View style={styles.location}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{product.title}</Text>
                </View>
                <MapPreview 
                style={styles.map}
                location={{lat:product.lat, lng:product.lng}}>
                    <Text>Ubicacion no disponible</Text>
                </MapPreview>
            </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    image: {
      height: "35%",
      minHeight: 300,
      width: "100%",
      padding: 20,
    },
    location: {
      margin: 20,
      width: "90%",
      maxWidth: 350,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
    },
    addressContainer: {
      padding: 20,
    },
    address: {
      color: COLORS.SALMON,
      textAlign: "center",
    },
    map: {
      height: 300,
    },
    textContainer: {
      padding: 20,
    },
    title: {
      fontSize: 15,
    },
  });

export default ProductDetailScreen
