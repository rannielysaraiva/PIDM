import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'

export class Cadastro extends Component {
    render() {
        return (
            <View>
                <TextInput placeholder="Nome:"></TextInput>
                <TextInput placeholder="Idade:"></TextInput>
                <TextInput placeholder="Email:"></TextInput>
                <Button title="ENVIAR"></Button>

            </View>
        )
    }
}

export default Cadastro
