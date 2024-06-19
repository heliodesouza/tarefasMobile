import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App(){
  const [nome, setNome] = useState('Fulano')

  function handleMudaNome(){
    setNome("40TECH")
  }


  return(
    <View style={styles.container}>
      
      <Text>{nome}</Text>
      <TouchableOpacity style={styles.button} onPress={handleMudaNome}>
        <Text style={styles.buttonText}>Mudar Nome</Text>

      </TouchableOpacity>
    </View>

  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#f1f1f1',
    padding: 28,

  },
  title: {
    fontSize: 32,
    color: '#121212',
    fontWeight: 'bold',
    textAlign:'center'
  },
  button:{
    backgroundColor: 'blue',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 35 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'

  }
})

