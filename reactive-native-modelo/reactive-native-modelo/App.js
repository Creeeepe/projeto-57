import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <Text style={{marginTop:50,color: 'white',
	textAlign: 'center', 
	fontWeight: 'bold',
	fontSize: 50,
	backgroundColor: 'pink',width: 300,
  height: 300,
  /*Adicione o raio da borda esquerda (left) e direita (right) da parte superior e inferior*/
    borderColor: '#ff9fd3',
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    textAlign: 'center',
 /*Adicione a fonte Times New Roman*/
    fontFamily: 'Times New Roman',
    /*Adicione shadowColor (cor da sombra)*/
    textShadowColor: 'black',
    
  textShadowOffset:{width: 10, height: 10},
    textShadowRadius:8,
    }}>FELIZ ANIVERSÁRIO MEU AMIGO !!!</Text>
  
    );
  }
}


