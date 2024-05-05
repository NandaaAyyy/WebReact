import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';


const Tombol = ({ lable, onPress}) => {
  return (
    <View>
    
      <TouchableOpacity style={styles.box} onPress={onPress}>
        <Text style={styles.lable}>{lable}</Text>
    </TouchableOpacity>
    <View>
      <Icon name="home" size={30} color="#900" />
      <Icon name="user" size={30} color="#900" />
      <Icon name="magnifer" size={30} color="#900" />
    </View>
    </View>
     
  );
};

export default Tombol;

const styles = StyleSheet.create({
    box: {
        margin: 10,
        padding: 30,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        borderRadius: 10,
        width: 100,
    },
    lable: {
        fontSize: 20,
        fontWeight:'bold',
    },
});