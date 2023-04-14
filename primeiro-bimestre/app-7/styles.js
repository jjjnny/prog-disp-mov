import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
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
    border: 'none'
  },
  botao: {
    backgroundColor: 'white',
    color: 'white',
    borderRadius: 5,
    margin: 20
  },
  label: {
    color: 'white',
    fontWeight: 500
  }
});

export { styles }