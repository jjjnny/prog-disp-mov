import React, { Component, useState } from 'react';
import { Text, View, Image, Pressable} from 'react-native';
import { styles } from './styles';
  

export default function App() {

const [numero, setNumero] = useState("?");
const n1 = numero;

  function gerarNumero () {
    n2 = (Math.floor(Math.random() * 10))
    if (n1 != n2) {
      setNumero(n2)
    } else {
      setNumero(n2+1)
    }
}

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Jogo do Número Aleatório</Text>
      <Image
        source={{uri:'https://epipoca.com.br/wp-content/uploads/2021/06/Charada-nas-HQ-da-DC-Comics-Reproducao-1200x720.jpg'}}
        style={{ width: 200, height: 200, borderRadius: 15}}
      />
      <Text style={styles.paragrafo}>Pense em um número de 0 a 10</Text>
      <Text style={{color: 'green', fontSize: 80, fontWeight: 'bold'}}>{numero}</Text>
      <Pressable style={styles.botao} onPress={gerarNumero}>
        <Text style={styles.textoBotao}>Adivinhar</Text>
      </Pressable>
    </View>
  );
}