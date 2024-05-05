import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Icon = ({label}) => {
  return (
  <TouchableOpacity style={styles.container}>

    <View style={styles.iconn}>
        <Text style={styles.text}>icon</Text>
    </View >
    <Text style={styles.text}>{label}</Text>

  </TouchableOpacity>
  
  )
}

export default Icon

const styles = StyleSheet.create({})