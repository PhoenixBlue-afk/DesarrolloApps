import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function App() {

const [textItem, setTextItem] = useState('');
const [list, setList] = useState([])

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
    </View>
  )


  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.title}>
        
          Su lista de compras
        </Text>
        <TextInput placeholder='Inserte su elemento here' onChangeText={handleItem} value={textItem} >
        </TextInput>
        <View style={styles.buttonView}>
        <Button title='Add Item Now!' onPress={addItem}/>
        </View>
      
      </View>
          <View>
            <FlatList
            data={list}
            keyExtractor={item => item}
            renderItem= {renderItem}
            />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  title: {
    fontSize:30,
    paddingBottom:15,
    borderRadius: 30,
  },
  cont:{
    paddingHorizontal: 30,
    paddingTop: 80,
    height:200,
  },
  buttonView:{
    flex: 2,
    paddingHorizontal: 30,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor:'blue',
    borderRadius:50
    
  },
  listView:{
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'rgb(255,255,255)',
    marginHorizontal:50,
    marginVertical:20,
    borderRadius: 50,
    
       
  },
});
