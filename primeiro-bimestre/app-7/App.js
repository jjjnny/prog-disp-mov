import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
 
export default function App(){
  const [nome, setNome] = useState('')    
  const [idade, setIdade] = useState(0)
  const [sexo, setSexo] = useState('Escolha...')
  const [escolar, setEscolar] = useState('')
  const [limite, setLimite] = useState(0)
  const [brasileiro, setBrasileiro] = useState(false)
  const [resultado, setResultado] = useState('')

  function confirmar(){
    if (nome != "" && idade != "" && sexo != 'Escolha...' && escolar != 'Escolha...') {
      if (!isNaN(idade)) {
        setResultado('Dados da Conta: \n' + 
                  'Nome: ' + nome + '\n' +
                 'Idade: ' + idade + '\n' +
                 'Sexo: ' + sexo + '\n' +
                 'Escolaridade: ' + escolar + '\n' +
                 'Limite: ' + limite + '\n' +
                 ( (brasileiro) ? 'Brasileiro' : 'Estrangeiro' ))
      } else {
        setResultado('Coloque uma idade válida!');
      }
    } else {
      setResultado('Preencha todos os campos!');
    }

  }
 
  return(
    <View style={styles.container}>

        <Text style={{fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 20}}>Abertura de Conta</Text>

      <View>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
        <Text style={styles.label}>Nome:
          <TextInput style={styles.input} onChangeText={(nome) => setNome(nome)}/>
        </Text>

        <Text style={styles.label}>Idade:
          <TextInput style={styles.input} keyboardType='numeric' onChangeText={(idade) => setIdade(idade)}/>
        </Text>

        <Text style={styles.label}>Sexo:
          <Picker style={styles.input} selectedValue={sexo} onValueChange={(sexo, key) => setSexo(sexo)}>
            <Picker.Item key={0} value='Escolha...' label='Escolha...'/>
            <Picker.Item key={1} value='Feminino' label='Feminino' />
            <Picker.Item key={2} value='Masculino' label='Masculino' />
          </Picker>
        </Text>

        <Text style={styles.label}>Escolar.:
          <Picker style={styles.input} selectedValue={escolar} onValueChange={(escolar, key) => setEscolar(escolar)}>
            <Picker.Item key={0} value='Escolha...' label='Escolha...'/>
            <Picker.Item key={1} value='Ensino Médio Incompleto' label='Ensino Médio Incompleto'/>
            <Picker.Item key={2} value='Ensino Superior' label='Ensino Superior' />
            <Picker.Item key={3} value='Ensino Superior Incompleto' label='Ensino Superior Incompleto'/>
          </Picker>
        </Text>
      </View>
        <Text style={styles.label}>Limite:</Text>
          <Slider
            style={{margin: 10}}
            minimumValue={0}
            maximumValue={1000}
            step={50}
            value={limite}
            onValueChange={ (valorSelecionado) => setLimite(valorSelecionado)}
          />
        <Text style={{textAlign: 'center', color: 'white', fontWeight: 500}}>{limite}</Text>


      </View>
          <Text style={styles.label}>Brasileiro
          <Switch 
            style={{margin: 15}}
            trackColor={{true: '#C28FEB', false: 'silver'}} 
            value={brasileiro}
            onValueChange={ (valorSwitch) => setBrasileiro(valorSwitch)}
            thumbColor='purple'
          />
        </Text>

        <Pressable style={styles.botao} onPress={confirmar}>
          <Text style={{color: 'purple', padding: 10, fontSize: 17, fontWeight: '500'}}>Abrir Conta</Text>
        </Pressable>
  
        <Text style={{color: 'white', fontWeight: 500}}>{resultado}</Text>
    </View>
  );
}