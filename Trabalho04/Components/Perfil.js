import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'

export class Perfil extends Component {
    render() {
        return (
            <View>
                <Image source={{uri:'https://static.poder360.com.br/2020/10/gato-animal-covid-19-868x644.jpg'}} style={{width:100, height:100}}></Image>
                <Text>Nome:</Text>
                <Text>Idade:</Text>
                <Text>Email:</Text>
                <Button title="HOME"></Button>

            </View>
        )
    }
}

export default Perfil
