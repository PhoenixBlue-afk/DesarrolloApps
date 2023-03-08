import {
    Alert,
    Button,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useCallback, useEffect, useReducer, useState } from "react";

import {COLORS} from '../constants/colors';
import Input from "../components/Input";
import { singup } from "../store/actions/auth.action";
import { useDispatch } from "react-redux";

const FORM_INPUT_UPDATE='FORM_INPUT_UPDATE'

const formReducer = (state, action) =>{
  console.log(action)
  if (action.type===FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.Input]:action.value
    }
    const updatedValidities={
      ...state.inputValidities,
      [action.input]:action.isValid,
    }
    let updatedFormIsValid = true
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    }
  }
  return state
}

const AuthScreen = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)


    useEffect(()=>{
      if (error) {
        Alert.alert('Ha ocurrido un error',error, [{text: 'OK'}])
        
      }
    })

    const [formState,dispatchFormState] = useReducer(formReducer,{
      inputValues:{
        email: '',
        password: '',
      },
      inputValidities:{
        email: false,
        password: false,
      },
      formIsValid: false,
    })

    const handleSingUp = () => {
        
        if (formState.formIsValid) {
          dispatch(singup(formState.Values.email,formState.Values.password))
        }else{
          Alert.alert('Formulario invalido', 'Ingresa email y password valido', [{text: 'OK'}])
        }
    }


    const onInputChangeHandler = useCallback((inputIdentifier, inputValue,inputValidity) => {
      console.log(inputIdentifier, inputValue,inputValidity)
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value:inputValue,
        isValid:inputValidity,
        input: inputIdentifier,
      })
    },[dispatchFormState]
    )

  return (
    <KeyboardAvoidingView behavior="height" style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.titlle}>Registro</Text>
        <Input
        id='email'
        label='Email'
        keyboardType='email-address'
        requiered
        email
        autoCapitalize='none'
        errorText='Por favor ingresa un email valido'
        onInputChange={onInputChangeHandler}
        initialValue=''
        />
        <Input
        id='password'
        label='Password'
        keyboardType='default'
        requiered
        password
        autoCapitalize='none'
        errorText='Por favor ingresa una contraseña valida'
        onInputChange={onInputChangeHandler}
        initialValue=''
        />
        <Button
        title="Registrarme"
        onPress={handleSingUp}
        />
      {/* <View style={styles.prompt}>
        <TouchableOpacity onPress={()=>console.log('Ingresar')} style={styles.button}>
          <Text style={styles.promptButton}>Ingresar</Text>
        </TouchableOpacity>
        </View> */}
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
