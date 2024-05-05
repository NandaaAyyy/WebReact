import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import React from 'react';

const IconMain = ({label, image}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.box}>
        <Image
          source={image}
          style={styles.image}
        />
      </View>
      <Text style={styles.textIcon}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconMain;

const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    margin: 5,
    padding: 5,
    width: 84,
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    borderWidth: 3,
    borderColor:'pink',
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textIcon: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    width: '100%',
    height: '100%', 
  },
});
