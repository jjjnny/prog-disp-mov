import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box:{
    backgroundColor: '#F5F5E0',
    height: 425,
    width: 300,
    margin: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 20,
    margin: 40
  },
  paragrafo: {
    fontSize: 17,
    margin: 10
  }
})

export { styles }