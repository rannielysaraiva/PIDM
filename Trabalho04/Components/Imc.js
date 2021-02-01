import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'

export class Imc extends Component {
    render() {
        return (
            <View>
                <TextInput placeholder="Peso"></TextInput>
                <TextInput placeholder="Altura"></TextInput>
                <Button title="CALCULAR"></Button>
            </View>
        )
    }
}

export default Imc
