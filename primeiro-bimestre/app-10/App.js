import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Pressable} from 'react-native';

import {Picker} from '@react-native-picker/picker'

import styles from './styles'

export default function App() {

  const [preValor, setPreValor] = useState(NaN)

  const [valor, setValor] = useState('')
  const [de, setDe] = useState('')
  const [para, setPara] = useState('')
  const [convertido, setConvertido] = useState(null)

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>
      <View style={{display: 'flex', alignItems: 'end'}}>
      <Text style={styles.paragrafo}>Valor:
      <TextInput style={styles.input} onChangeText={e=>setPreValor(e)} />
      </Text>

      <Text style={styles.paragrafo}>De:
      <Picker style={styles.input} selectedValue={de} onValueChange={e=>setDe(e)}>
        <Picker.Item label="" />
        <Picker.Item value="1" label="Real" />
        <Picker.Item value="4.91" label="Dólar" />
        <Picker.Item value="5.40" label="Euro" />
      </Picker>
      </Text>

      <Text style={styles.paragrafo}>Para:
      <Picker style={styles.input} selectedValue={para} onValueChange={e=>setPara(e)}>
        <Picker.Item label="" />
        <Picker.Item value="1" label="Real" />
        <Picker.Item value="4.91" label="Dólar" />
        <Picker.Item value="5.40" label="Euro" />
      </Picker>
      </Text>
      </View>
      
      <Pressable style={styles.botao} onPress={()=>{
        if(!isNaN(preValor) && de != "" && para != ""){
        setValor(preValor)
        setConvertido(de/para)
        } else{
          setConvertido("Insira um valor válido!")
        }
      }}><Text style={[styles.paragrafo, {color: 'white'}]}>Converter</Text></Pressable>

      <Text style={[styles.titulo, {marginBottom: 20}]}>
        {convertido != null && (isNaN(convertido)?convertido:(convertido*valor).toFixed(2))}
      </Text>
    </View>
  )
}
