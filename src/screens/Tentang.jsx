import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Tentang = () => {
  return (
    <View>
      <Text style={styles.text}>Tentang</Text>
    </View>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
