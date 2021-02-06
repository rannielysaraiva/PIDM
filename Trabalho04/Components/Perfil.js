import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'

export class Perfil extends Component {
    render() {
        return (
            <View>
                <Image source={{uri:'https://static.poder360.com.br/2020/10/gato-animal-covid-19-868x644.jpg'}} style={{width:100, height:100}}></Image>
                <Text>Nome:{this.props.route.params.nome}</Text>
                <Text>Idade: {this.props.route.params.idade}</Text>
                <Text>Email: {this.props.route.params.email}</Text>
                <Button title="HOME" onPress = {()=>{this.props.navigation.navigate('Home')}}></Button>

            </View>
        )
    }
}

export default Perfil
