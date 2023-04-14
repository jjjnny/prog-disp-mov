import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 225,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    backgroundColor: 'white',
    border: 'none',
  },
  botao: {
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 5,
    margin: 20,
    padding: 10
  },
  titulo: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
  },
  paragrafo: {
    fontWeight: 500
  }
})

export default styles