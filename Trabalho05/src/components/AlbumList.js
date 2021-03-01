import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AlbumDetail from './AlbumDetail'
import Header from './Header'
import { estilo } from '../style/Style'

export class AlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {
            albuns: [],
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
        .then((response)=> response.json())
        .then((responseJson)=>{this.setState({
            albuns: responseJson.albums
        })
    })
    }

    render() {
        let cards = [];

        this.state.albuns.map((item, index) => {
             cards.push(<AlbumDetail key={index} title={item.name} artista ={item.artist} imagem={item.image} id={item.id} navigation={this.props.navigation}></AlbumDetail>)
        })
    
        return (
            <View>
                <Header title="Lista de Albuns"></Header>
                <Text>
                    Galeria
                </Text>
                {cards}
            </View>
        )
    }
}

export default AlbumList
