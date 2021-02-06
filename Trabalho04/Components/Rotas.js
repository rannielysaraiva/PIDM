import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home";
import Cadastro from './Cadastro';
import Imc from './Imc';
import Sobre from './Sobre';
import Resultado from './Resultado';
import Perfil from './Perfil';

const rotas  = createStackNavigator()
const rotasGerais = createStackNavigator()


   function RotaPrincipal(){
    return(

                <rotas.Navigator initialRouteName ="Home">
                    <rotas.Screen name = 'Home' component = {Home}></rotas.Screen>
                    <rotas.Screen name='Cadastro' component={Cadastro}></rotas.Screen>
                    <rotas.Screen name='Imc' component={Imc}></rotas.Screen>
                    <rotas.Screen name='Sobre' component={Sobre}></rotas.Screen>
                    <rotas.Screen name='Resultado' component={Resultado}></rotas.Screen>

                </rotas.Navigator>

    )
}
 export default function rotaGeral (){
    return(
        <NavigationContainer>
                <rotasGerais.Navigator initialRouteName="principal">
                    <rotasGerais.Screen name = "principal" component={RotaPrincipal} options = {{headerShown:false}}></rotasGerais.Screen>
                    <rotasGerais.Screen name = "perfil" component={Perfil} options={{headerShown:false}}></rotasGerais.Screen>
                </rotasGerais.Navigator>
        </NavigationContainer>
    
    ) 
}