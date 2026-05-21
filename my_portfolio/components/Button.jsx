import React from 'react'
import {View, Text, styles} from 'react-native'
import { StyleSheet } from 'react-native'
const Button = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>See Portfolio</Text>
    </View>
  )
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
}
)

export default Button