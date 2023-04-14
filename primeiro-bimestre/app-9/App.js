import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>

    <Text style={{fontSize: 20, fontWeight: 700, margin: 10}}>Vagas de Emprego</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box}>
            <Text style={styles.titulo}>Desenvolvedor WEB</Text>
            <Text style={styles.texto}><b>Salário:</b> R$1500,00 /mês</Text>
            <Text style={styles.texto}><b>Descrição:</b> O candidato ideal terá uma sólida formação em desenvolvimento web, experiência em várias tecnologias e um histórico comprovado de criação de sites e aplicações web de alta qualidade.</Text>
            <Text style={styles.texto}><b>Contato:</b> rh@empresaweb.com.br</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.titulo}>Desenvolvedor Full Stack</Text>
            <Text style={styles.texto}><b>Salário:</b> R$2000,00 /mês</Text>
            <Text style={styles.texto}><b>Descrição:</b> O candidato ideal é alguém que possui habilidades tanto de desenvolvimento front-end quanto back-end, capaz de criar aplicações web completas, desde o planejamento até a implementação e manutenção.</Text>
            <Text style={styles.texto}><b>Contato:</b> rh@empresafullstack.com.br</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.titulo}>Profissional UX/UI</Text>
            <Text style={styles.texto}><b>Salário:</b> R$2500,00 /mês</Text>
            <Text style={styles.texto}><b>Descrição:</b> O candidato ideal é alguém apaixonado por criar interfaces digitais intuitivas e atraentes, focadas na experiência do usuário e capazes de proporcionar soluções visuais inovadoras e funcionais.</Text>
            <Text style={styles.texto}><b>Contato:</b> rh@empresauxui.com.br</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.titulo}>DBA</Text>
            <Text style={styles.texto}><b>Salário:</b> R$5000,00 /mês</Text>
            <Text style={styles.texto}><b>Descrição:</b> O candidato ideal é alguém com habilidades técnicas sólidas em administração de bancos de dados, capaz de garantir a integridade, confiabilidade e desempenho dos bancos de dados da empresa, além de implementar melhores práticas de segurança e otimização.</Text>
            <Text style={styles.texto}><b>Contato:</b> rh@empresadba.com.br</Text>
          </View>
        </ScrollView>
      </View>
  );
}