import React, { Component } from 'react'
import Card from './Card'
import CardItem from './CardItem'
import { estilo } from '../style/Style'
import { Button, Text } from 'react-native'

export class Modal extends Component {
    render() {
        return (
            <Card>  

                <CardItem>
                    <Text style={estilo.title}>
                        {this.props.route.params.album}
                    </Text>
                    <Text>
                        Lista de Músicas
                    </Text>
                </CardItem>

                <CardItem>
                    <Text>
                        {this.props.route.params.lista}
                    </Text>
                </CardItem>

                <CardItem>
                    <Button title="Voltar" onPress={()=>{this.props.navigation.navigate("Home")}}></Button>
                </CardItem>

            </Card>
        )
    }
}

export default Modal
