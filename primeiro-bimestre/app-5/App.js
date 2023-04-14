import React, { Component, useState } from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { styles } from './styles';


export default function App() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState('')

  function calcular () {
    cal = (Number(altura) * Number(altura))/ Number(peso) 
    if (cal < 18.5) {
      setResultado(('Abaixo do Peso!'))
    } else if (cal <= 24.9){
      setResultado(('Peso Normal!'))
    } else if (cal <= 29.9){
      setResultado(('Sobrepreso!'))
    } else if (cal <= 34.9){
      setResultado(('Obesidade Grau I!'))
    } else if (cal <=39.9) {
      setResultado(('Obesidade Grau II!'))
    } else {
      setResultado(('Obesidade Grau III!'))
    }
  }

    return(
      <View style={styles.container}>

      <Text style={styles.paragraph}>Cálculo de IMC</Text>

      <Image
      source={{uri:'https://static.quizur.com/i/b/572e96c26a9531.55115050572e96c249e477.62691525.jpg'}}
      style={{ width: 200, height: 200, borderRadius: 15, marginBottom: 20}}
      />

      <TextInput style={styles.input}
      placeholder= "Digite seu peso..."
      onChangeText={(peso) => setPeso(peso)}
      />

      <TextInput style={styles.input}
      placeholder= "Digite sua altura..."
      onChangeText={(altura) => setAltura(altura)}
      />

      <Pressable style={styles.botao} onPress={calcular}>
        <Text style={{textAlign: 'center', color: 'white', fontWeight: 600}}>Calcular</Text>
      </Pressable>
      <Text style={styles.paragraph}>{resultado}</Text>
      
      </View>
    )
  }