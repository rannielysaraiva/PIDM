import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export class Sobre extends Component {
    render() {
        return (
            <View>
                <Text> Oii, quero ser aprovada!</Text>
                <Button title="HOME" onPress = {()=>{this.props.navigation.navigate('Home')}}></Button>
            </View>
        )
    }
}

export default Sobre
