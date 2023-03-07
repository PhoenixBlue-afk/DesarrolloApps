import React, {useState} from "react";

import AuthNavigator from "./AuthNavigator";
import BottomTabNavigator from './BottomTabNavigator'
import { useSelector } from "react-redux";

export default ()=>{
    const userId= useSelector(state=>state.auth.userId);
    return <>{userId ? <BottomTabNavigator/> : <AuthNavigator/>}</>
    
}