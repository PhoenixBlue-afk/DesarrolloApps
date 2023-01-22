import {Button, Modal, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Ventana = ({isVisible, accionDelete, itemSelected, miss})=>{
  
    return (
        <Modal animationType='fade' transparent={true} visible={isVisible} >
            <View style={styles.modalView}>
              <View style={styles.ml}>
              <Text style={styles.title}>
                {itemSelected}
              </Text>
              <View style={styles.btn}>
                <Button  title='Delete' onPress={()=>accionDelete()} />
              </View>
              <View>
              <Button title='Dismiss' onPress={()=>miss()}/>
              </View>
              </View>
            </View>  
          </Modal>
    )
}
export default  Ventana
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
  modalView:{
    flex: 1,
    opacity:0.7,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    
    
  },
  ml:{
    flexDirection:'column',
    width:"80%",
    height:200,
    backgroundColor:'white',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    
  },
  btn:{
    margin:10,
    flexDirection:'row',
    alignItems: 'center',
  },  
});
