import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
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

  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.title}>
        
          Su lista de compras
        </Text>
        <TextInput placeholder='Inserte su elemento here' onChangeText={handleItem} value={textItem} >
        </TextInput>
      
        <Button title='Add Item Now!' onPress={addItem}/>
      
      </View>
          <View>
            {list.map((item) =>
            (
              <Text>{item}</Text>
            ))}
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});
