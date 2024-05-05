import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Kotak = () => {
  return (
    <View style={styles.kotak}>
      <Text style={styles.teks}>HALO LADIES</Text>
    </View>
  );
};

export default Kotak;

const styles = StyleSheet.create({
    kotak: {
        borderWidth:1,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        height: 100,
        justifyContent: 'center'
    },
    teks: {
      fontSize: 20,
  
    },
});