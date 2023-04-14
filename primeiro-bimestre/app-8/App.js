import * as React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
      <View style={styles.container}>
      <Text style={styles.titulo}> Venda de Produtos </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box}>
            <Text style={styles.paragrafo}><b>BATATA</b></Text>
            <Image source={{uri:'https://superprix.vteximg.com.br/arquivos/ids/178620-600-600/Batata-Especial-1kg.png?v=636857520320030000'}} style={{height: 150, width: 150, borderRadius: 10}}/>
            <Text style={styles.paragrafo}><b>Valor:</b> R$10,00 /Kg</Text>
            <Text style={styles.paragrafo}><b>Descrição:</b> Com sua casca brilhante, polpa cremosa e sabor irresistível, ela vai satisfazer todos os seus desejos culinários. Venha buscá-la hoje mesmo e descubra o verdadeiro sabor da batata fresca!</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.paragrafo}><b>BANANA</b></Text>
            <Image source={{uri:'https://mercadoterra.s3.amazonaws.com/web/media/2020/04/banana-nanica.png'}} style={{height: 150, width: 150, borderRadius: 10}}/>
            <Text style={styles.paragrafo}><b>Valor:</b> R$15,00 /Kg</Text>
            <Text style={styles.paragrafo}><b>Descrição:</b> A banana é uma excelente fonte de fibras, potássio e vitaminas essenciais, tornando-a uma escolha saudável para uma dieta equilibrada.</Text>
          </View>

                    <View style={styles.box}>
            <Text style={styles.paragrafo}><b>CENOURA</b></Text>
            <Image source={{uri:'https://www.maisquitanda.com.br/image/cache/1-verduras-legumes/cenoura%20rama-800x800.png'}} style={{height: 150, width: 150, borderRadius: 10}}/>
            <Text style={styles.paragrafo}><b>Valor:</b> R$5,00 /Kg</Text>
            <Text style={styles.paragrafo}><b>Descrição:</b>  Com sua aparência atrativa e sabor excepcional, certamente será uma adição deliciosa e nutritiva à sua próxima refeição. Não perca a oportunidade de levar para casa essa cenoura fresca e saborosa!</Text>
          </View>
        </ScrollView>
      </View>
    )
  }