import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function TodoItem({item, pressHandler}) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.text}</Text>
      <MaterialIcons name='delete' size={32} color='white' onPress={() => pressHandler(item.key)}/>
    </View>
    
  )
}


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 16,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 16,
    maxWidth: '85%',
  },
})