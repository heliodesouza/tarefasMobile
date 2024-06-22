

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

export default function Tarefa({ data, deleteItem, toggleComplete }) {
  return (
    <View style={styles.container}>
      <CheckBox
        checked={data.completed}
        onPress={() => toggleComplete(data.key)}
      />
      <Text style={[styles.text, data.completed && styles.completedText]}>
        {data.item}
      </Text>
      <TouchableOpacity onPress={deleteItem}>
       <FontAwesome name="trash" size={20} color="#FF0000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#A9A9A9',
  },
});
