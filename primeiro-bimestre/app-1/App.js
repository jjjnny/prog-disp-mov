import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: '20pt', margin: 20, fontWeight: '800'}}>PERFIL</Text>
      <Image
      source={{uri:'https://i.pinimg.com/736x/35/50/81/3550815347003dc8d2633778ad3b60c4.jpg'}}
      style={{ width: 300, height: 300, borderRadius: 15}}
      />
      <Text style={{fontSize: '15pt', margin: 20, fontWeight: '700'}}>
      Dados Felinos:
      </Text> 
      <Text style={styles.paragrafo}>
        <b>Nome(s):</b> Diablo Gato, Amante Felino, Chupacabra, Don Ruanito, Ruivo Romântico, Gato de Botas.
      </Text>
      <Text style={styles.paragrafo}><b>Idade:</b> Mais que 35 anos de gato.                    </Text>
      <Text style={styles.paragrafo}><b>Ocupação:</b> Um fora da lei nato.                    </Text>
      <Text style={styles.paragrafo}><b>Família:</b> Imelda (Mama), Humpty Dumpty (Irmão), Kitty Pata-Mansa (Esposa).</Text>
      <Text style={styles.paragrafo}><b>Bebida Favorita:</b> Leche.                               </Text>
    </View>
  );
}