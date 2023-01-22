import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import AddItem from "./sources/components/addItem.js";
import Ventana from './sources/components/modal.js';
import styles from './sources/Estilos/estilos.js'

export default function App() {

const [textItem, setTextItem] = useState('');
const [list, setList] = useState([])
const [itemSelected, setItemSelected] = useState('')
const [modalVisible, setModalVisible] = useState(false)

const handleItem = text=>{
  setTextItem(text)
  
}; 



const addItem = () => {
  setList(prevState => [...prevState, textItem])
  setTextItem('')
  
}
const renderItem = ({item})=>(
    <View style={styles.listView}>
      <Text>{item}</Text>
      <Button title="Edit" onPress={()=>{handleRenderItem(item)}}/>
    </View>
  )

  const handleRenderItem = (item) =>{
    setItemSelected(item)
    setModalVisible(true)
  }
  const deleteItem = (item) => {
    setList(prevState=>prevState.filter(e=>e!==item))
    setModalVisible(!modalVisible)    
  }
  

  return (
    <View style={styles.container}>
      <AddItem
      onchange={handleItem}
      textvalue={textItem}
      onAddItem={addItem}
      />
          <View>
            <FlatList
            data={list}
            keyExtractor={item => item}
            renderItem= {renderItem}
            />
          </View>
          <Ventana isVisible={modalVisible}
           accionDelete={()=>deleteItem(itemSelected)} 
           itemSelected={itemSelected} 
           miss={()=> setModalVisible(false)}/>
          
    </View>
  );
}
<styles/>

