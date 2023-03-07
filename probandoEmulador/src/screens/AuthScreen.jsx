import {
    Button,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";

import {COLORS} from '../constants/colors';
import { singup } from "../store/actions/auth.action";
import { useDispatch } from "react-redux";

const AuthScreen = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSingUp = () => {
        dispatch(singup(email,password))
    }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.titlle}>Registro</Text>
        <Text>Email</Text>
        <TextInput keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail}/>
        <Text>Password</Text>
        <TextInput secureTextEntry autoCapitalize="none" value={password} onChangeText={setPassword}/>
        <Button
        title="Registrarme"
        onPress={handleSingUp}
        />
      <View style={styles.prompt}>
        <TouchableOpacity onPress={()=>console.log('Ingresar')} style={styles.button}>
          <Text style={styles.promptButton}>Ingresar</Text>
        </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titlle:{
        fontSize: 24,
        marginBottom: 18,
        textAlign: 'center',
    },
    container:{
        width:'80%',
        maxWidth:400,
        padding:12,
        borderColor:'#ccc',
        borderWidth: 1,
        borderRadius:10,
        backgroundColor: 'white',
    },
    prompt:{
        alignItems:'center',
    },
    promptMessage:{
        fontSize:16,
        color:'#333',
    },
    promptButton:{
        fontSize:16,
    },
    button:{
        backgroundColor:COLORS.priamry,
        marginVertical:20,
    },
});
