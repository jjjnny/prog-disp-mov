import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontWeight: 600,
    color: 'white'
  },
  menos: {
    height: 40,
    width: 200,
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
    mais: {
    height: 40,
    width: 200,
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export {styles}