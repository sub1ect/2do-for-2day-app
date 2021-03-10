import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>2Do for 2Day</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: 'darkviolet',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})