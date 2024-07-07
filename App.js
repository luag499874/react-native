import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigation} from "@react-navigation/stack";
import Inicio from "./pantallas/inicio";
import Calculadora from "./pantallas/calculadora";

const stack = createStackNavigation();

export default function App(){
    return (
        <NavigationContainer>
            <stack.navigator initialRouteName="Inicio">
            <stack.Screen name="Inicio"component={Inicio}/>
            <stack.Screen name="calculadora"component={Calculadora}/>
        </stack.navigator>
        </NavigationContainer>
      );
}
