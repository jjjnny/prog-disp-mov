import React, { Component, useState } from 'react';
import { View, Text, Pressable} from 'react-native';
import { styles } from './styles';

export default function App() {

const [pessoas, setPessoas] = useState('0')

  function mais(){
    setPessoas((Number(pessoas) + 1))
  }

  function menos(){
    if (pessoas != 0) {
    setPessoas((Number(pessoas) - 1))
    }
  }

  return(
    <View style={styles.container}>
    <Text style={{fontSize: 100, textAlign: 'center'}}>
        {pessoas}
    </Text>
    <Pressable style={styles.mais} onPress={mais}>
      <Text style={styles.texto}>+</Text>
    </Pressable>

    <Pressable style={styles.menos} onPress={menos}>
      <Text style={styles.texto}>-</Text>
    </Pressable>
    </View>
    )
}