import React, { Component, useState } from 'react';
import { View, Text, Button, TextInput} from 'react-native';
import { styles } from './styles';

export default function App() {

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(0)

  function calcular () {
    setResultado((Number(num1) * Number(num2)))
  }

    return(
      <View style={styles.container}>

      <Text style={styles.paragraph}>Multiplicador de Números</Text>

      <TextInput style={styles.input}
      placeholder= "Digite o primeiro número..."
      onChangeText={(num1) => setNum1(num1)}
      />

      <TextInput style={styles.input}
      placeholder= "Digite o segundo número..."
      onChangeText={(num2) => setNum2(num2)}
      />

      <Button title="Calcular" onPress={calcular} color='blue'/>
      <Text style={styles.paragraph}>Resultado: {resultado}</Text>
      </View>
    )
  }