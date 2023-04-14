import React, { Component, useState } from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { styles } from './styles';

export default function App() {

  const [val1, setGas] = useState(0)
  const [val2, setEta] = useState(0)
  const [resultado, setResultado] = useState('')

  function calcular () {
    cal = Number(val2)/Number(val1);
    if (cal < 0.7) {
      setResultado(('Compre o Etanol!'))
    } else {
      setResultado(('Compre a Gasolina!'))
    }
  }

    return(
      <View style={styles.container}>

      <Text style={styles.paragraph}>Etanol ou Gasolina</Text>

      <Image
      source={{uri:'https://cdn.autopapo.com.br/box/uploads/2017/05/29171515/ilustra-flex.jpg'}}
      style={{ width: 200, height: 200, borderRadius: 15, marginBottom: 20}}
      />

      <TextInput style={styles.input}
      placeholder= "Preço da Gasolina..."
      onChangeText={(val1) => setGas(val1)}
      />

      <TextInput style={styles.input}
      placeholder= "Preço do Etanol..."
      onChangeText={(val2) => setEta(val2)}
      />

      <Pressable style={styles.botao} onPress={calcular}>
        <Text style={{textAlign: 'center', color: 'white', fontWeight: 600}}>Calcular</Text>
      </Pressable>
      <Text style={styles.paragraph}>{resultado}</Text>
      
      </View>
    )
  }