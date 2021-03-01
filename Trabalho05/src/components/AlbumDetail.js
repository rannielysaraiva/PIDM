import React, { Component } from 'react'
import { View, Text, Image, Button } from 'react-native'
import { estilo } from '../style/Style'
import Card from './Card'
import CardItem from './CardItem'

export class AlbumDetail extends Component {
    constructor(props){
        super (props)
        this.state={
            musicas: []
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums/' +this.props.id+'/tracks.json')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
            musicas: responseJson.tracks,
        })
    })
    }

    render() {

        let lista = []

    this.state.musicas.map((item, index)=>{
    lista.push(<Text key= {index}> {item.title} </Text>)
    })

        return (
            <View>

                <Card>

                    <CardItem>
                        <Text style={estilo.title}>
                             {this.props.title}
                        </Text>
                        <Text>
                             {this.props.artista}
                        </Text>
                    </CardItem>

                    <CardItem>
                       <Image source={"https://raw.githubusercontent.com/san650/ten/master/apps/music"+this.props.imagem} style={estilo.imagem}></Image>
                    </CardItem>

                    <CardItem>
                        <Button title="Ver musicas" onPress={()=>{this.props.navigation.navigate("Modal",{album: this.props.title, lista: lista})}}></Button>
                        <Button title="Comprar"></Button>
                    </CardItem>

                </Card>

            </View>
        )
    }
}

export default AlbumDetail
