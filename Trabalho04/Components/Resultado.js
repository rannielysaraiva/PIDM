import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export class Resultado extends Component {
    render() {
        let peso = this.props.route.params.peso
        let altura = this.props.route.params.altura
        let imc = peso/(altura*altura)
        let analise = "";

        if (imc < 17){
            analise = "Muito abaixo do peso";
        }else if (imc > 17 && imc< 18.49){
            analise = "Abaixo do peso";
        }else if (imc > 18.5 && imc< 24.99){
            analise = "Normal";
        }else if (imc > 25 && imc< 29.99){
            analise = "[ALERTA!] Acima do peso";
        }else if (imc > 30 && imc< 34.99){
            analise = "Obesidade Tipo 1";
        }else if (imc > 35 && imc< 39.99){
            analise = "Obesidade Tipo 2";
        }else if (imc > 40){
            analise = "Obesidade Tipo 3";
        }
        return (
            <View>
                <Text> Seu IMC é: {imc} </Text>
                <Text> {analise}</Text>
                <Button title="HOME" onPress = {()=>{this.props.navigation.navigate('Home')}}></Button>

            </View>
        )
    }
}

export default Resultado
