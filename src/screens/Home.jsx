import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import IconMenu from './icon';


const Data = [
  {id: 1, label: 'Catatan Menstruasi'},
  {id: 2, label: 'Prediksi Kehamilan'},
  {id: 3, label: 'Penyakit Kewanitaan'},
  {id: 4, label: 'Gejala Menstruasi'},
  {id: 5, label: 'Pantangan Wanita Menstruasi'},
];

const Home = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
        style={styles.btn}>
        <Text style={styles.txt}>Ke About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'gold',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
