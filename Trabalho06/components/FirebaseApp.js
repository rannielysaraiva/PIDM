import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default class FirebaseApp extends Component{
    constructor(props){
        super(props)
        this.getUser()
        this.state = ({aluno: ''})
    }
    getUser = async () => {
        const userDocument = await firestore().collection('alunos').doc().get('yp2T5uJMFWcpt1A1UExa')
        this.setState({aluno: userDocument._data})
    }
  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>
          {this.state.aluno}
        </Text>
      </View>
    )
  }
}