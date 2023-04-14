import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F5F5E0',
    height: 350,
    width: '85vw',
    border: '1px solid #e3e3ac',
    margin: 10,
    padding: 30
  },
  titulo: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 900,
    marginBottom: 20,
    fontFamily:'courier, courier new, serif'
  },
  texto: {
    fontSize: 14,
    fontFamily: 'courier, courier new, serif',
    marginBottom: 10
  }
})

export {styles}