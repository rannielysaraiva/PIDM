import React, { Component } from 'react'
import { View, Text } from 'react-native'
import {estilo} from '../style/Style'

export class Header extends Component {
    render() {
        return (
            <View style={estilo.header}>
                <Text>
                    {this.props.title}
                </Text>

            </View>
        )
    }
}

export default Header
