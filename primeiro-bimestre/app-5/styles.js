import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5E0',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 225,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  botao: {
    height: 40,
    width: 175,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    fontWeight: 600,
    marginTop: 20
  }
});

export {styles}