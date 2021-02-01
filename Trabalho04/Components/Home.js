import React, { Component } from 'react'
import { View, Button } from 'react-native'

export class Home extends Component {
    render() {
        return (
            <View>
                <Button title="Cadastro"> </Button>
                <Button title="IMC"> </Button>
                <Button title="Sobre"> </Button>
            </View>
        )
    }
}

export default Home