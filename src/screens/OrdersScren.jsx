import { FlatList, StyleSheet, Text, View } from "react-native"

import { ORDERS } from "../data/orders"
import OrderItem from "../components/OrderItem"
import React from "react"

const OrdersScren = ({}) => {

  const renderOrderItem=({item}) => (
    <OrderItem item={item} onDelete={()=>{console.log('on delete')}}/>
  )

  return (
    <FlatList
    data={ORDERS}
    keyExtractor={item=> item.id}
    renderItem={renderOrderItem}
    />
  )
}

export default OrdersScren

const styles = StyleSheet.create({})
