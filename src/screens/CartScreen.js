import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { CART } from '../data/cart'
import CartItem from '../components/CartItem'
import React from 'react'

const CartScreen = () => {
  const total= 120


  const handleConfirmCart = () => {
    console.log('Confirmar Cart');
  }
  const handleDeleteItem = () => {
    console.log('Borrar item');
  }

  const renderCartItem = ({item}) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  )

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
        data={CART}
        keyExtractor={i=>i.id}
        renderItem={renderCartItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text>Comprar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}> ${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  footer:{
    padding:12,
    borderTopColor:'#ccc',
    borderTopWidth:1,
    

  },
  list:{
    flex: 1,
    
  },
  container:{
    flex:1,
    padding: 12,
    backgroundColor: '#fff',
    paddingBottom:120,
  },
  confirm:{
    backgroundColor:'#ccc',
    borderRadius:10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  total:{
    flexDirection: 'row',
  },
  text:{
    fontSize:18,
    padding:8,
  },
})