import React, {useState} from 'react';
import { View,
   Text,
    StyleSheet,
     TouchableOpacity,
      TextInput,
      FlatList
     } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import Tarefa from './src/tarefa'; 

export default function App(){
  const [tarefa, setTarefa] = useState('');

  const [list, setList] = useState([])
    
     
//Função para adicionar lista
  function handleAdd(){
    if(tarefa === ""){
      return;  
    }
//Esta é uma lista com uma chave de identificação e um item
    const dados ={
      key: Date.now().toString(),
      item: tarefa,
      completed: false,
    }
//oldArray adicina dados no input e depois retorna para a listagem comm ...
    setList(oldArray => [dados, ...oldArray])

//Zera o input
    setTarefa("")
  }

  //função para deletar itens
  function handleDelete(itemKey){
    let filtraItem = list.filter((tarefa) => {
      return tarefa.key !== itemKey;
    });

    setList(filtraItem);
  }

  //função que percorre as tarefas que foram completadas ou não
  function toggleComplete(itemKey) {
    let updatedList = list.map(tarefa => {
      if (tarefa.key === itemKey) {
        return { ...tarefa, completed: !tarefa.completed };
      }
      return tarefa;
    });

    setList(updatedList);
  }
 
  

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder='Digite sua tarefa'
          style={styles.input}
          value={tarefa} 
          onChangeText={ (text) => setTarefa(text)}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <FontAwesome name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={ (item) => item.key }
        renderItem={ ({ item }) => <Tarefa data={item} deleteItem={ () => handleDelete(item.key)} 
        toggleComplete={toggleComplete}

        /> }
        style={styles.list}


      />
      
      
    </View>

  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F5F5F5',
    padding: 40,
    paddingHorizontal: 20,

  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  containerInput: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  buttonAdd: {
    backgroundColor: '#1E90FF',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 15,
  },
  list: {
    margin: 20,

  }
 
})
