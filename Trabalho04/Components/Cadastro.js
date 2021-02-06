import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'

export class Cadastro extends Component {
    constructor (props){
        super (props)
        this.state = {
            nome: '',
            idade: 0,
            email: ''
        }
    }
    render() {
        return (
            <View>
                <TextInput placeholder="Nome:" onChangeText= {(nome)=>{this.setState({nome:nome})}}></TextInput>
                <TextInput placeholder="Idade:" onChangeText= {(idade)=>{this.setState({idade:idade})}}></TextInput>
                <TextInput placeholder="Email:" onChangeText= {(email)=>{this.setState({email:email})}}></TextInput>
                <Button title="ENVIAR" onPress= {()=>{this.props.navigation.navigate("perfil",{nome:this.state.nome, idade:this.state.idade, email:this.state.email})}}></Button>

            </View>
        )
    }
}

export default Cadastro