import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'

export class Imc extends Component {
    constructor (props){
        super(props)
        this.state={
            altura:0,
            peso:0
        }
    }
    render() {
        return (
            <View>
                <TextInput placeholder="Altura" onChangeText={(altura)=>{this.setState({altura:altura})}}></TextInput>
                <TextInput placeholder="Peso" onChangeText={(peso)=>{this.setState({peso:peso})}}></TextInput>
                <Button title="CALCULAR" onPress = {()=>{this.props.navigation.navigate
                        ('Resultado',{altura:this.state.altura, peso:this.state.peso})}}></Button>
            </View>
        )
    }
}

export default Imc
