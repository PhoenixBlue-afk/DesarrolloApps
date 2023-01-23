import { StyleSheet } from 'react-native'

export  const Styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header:{
        backgroundColor:'#151522',
        height:90,
        paddingTop:36,
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerTitle: {
        color: 'white',
        fontSize:22,
        
      },
      containerstart: {
        flex : 1,
        padding:10,
        alignItems  : 'center',
        backgroundColor: '#151522',
      },
      startTitle:{
        fontSize:20,
        marginVertical:10,
        color   : 'white',
      },
      inputContainer:{
        width:300,
        maxWidth:'80%',
        padding:20,
        alignItems: 'center',
        shadowColor:'white',
        shadowOffset:{width:0, height:2},
        shadowRadius:10,
        shadowOpacity:0.3,
        elevation: 5,
        borderRadius:10,
        backgroundColor:'#272638',

      },
      buttons: {
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,
      },
      subtitle:{
        color:'white',
      },
      Input:{
        height:40,
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        marginVertical:10,
        width:120,
        margin:20,
      },
})