import { StyleSheet } from 'react-native'

export default Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    containerTouch:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
    },
    categoriesItem:{
        flex:1,
        width: '100%',
        borderRadius:10,
        padding: 20,
        shadowColor: 'black',
        shadowOpacity:0.5,
        shadowOffset:{width: 0, height:2},
        shadowRadius:10,
        elevation:5,
        
    },
    textContainer:{
        width: '60%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer:{
        width: '40%',
        height: '100%',
    },
    Image:{

        height:'100%',
        width:'100%',
    },
    categoriesContainer:{
      padding:15,
      height:150,
      width:'100%',
      borderBottomRightRadius:10,
      borderTopRightRadius:10,
    },
    productContainer:{
        height:150,
        width: 150,
        
    },
    itemContainer:{
        alignItems: 'center',
    },
    cardContainer:{
        height: "60%",
    },
    card:{
        height: "40%",
    },
});