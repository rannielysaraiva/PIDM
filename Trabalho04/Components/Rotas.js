import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import Cadastro from './Cadastro';
import Imc from './Imc';
import Sobre from './Sobre';
import Resultado from './Resultado';

const rotas  = createStackNavigator()


export default function RotaPrincipal(){
    return(
        <NavigationContainer>
            <rotas.Navigator initialRouteName="Home">
                <rotas.Screen name='Home' component={Home}></rotas.Screen>
                <rotas.Screen name='Cadastro' component={Cadastro}></rotas.Screen>
                <rotas.Screen name='Imc' component={Imc}></rotas.Screen>
                <rotas.Screen name='Sobre' component={Sobre}></rotas.Screen>
                <rotas.Screen name='Resultado' component={Resultado}></rotas.Screen>




            </rotas.Navigator>

        </NavigationContainer>
       


    )
}