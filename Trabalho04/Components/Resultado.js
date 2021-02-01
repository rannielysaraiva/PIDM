import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export class Resultado extends Component {
    render() {
        return (
            <View>
                <Text> Seu IMC é: </Text>
                <Text> Peso normal: </Text>
                <Button title="HOME"></Button>

            </View>
        )
    }
}

export default Resultado
