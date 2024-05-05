import {StyleSheet, Text, View, FlatList,Image, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import IconMain from '../components/IconMain';


const Data = [
  {id: 1, label: 'Senin' ,image: require('../assets/img/img1.jpg')},
  {id: 2, label: 'Selasa',image: require('../assets/img/img2.jpg')},
  {id: 3, label: 'Rabu',image: require('../assets/img/img3.jpg')},
  {id: 4, label: 'Kamis',image: require('../assets/img/img4.jpg')},
  {id: 5, label: 'Jumat',image: require('../assets/img/img5.jpg')},
  {id: 5, label: 'Sabtu',image: require('../assets/img/img6.jpg')},
  {id: 5, label: 'Minggu',image: require('../assets/img/img7.jpg')},
];


const Main = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/img/imgg.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <FlatList
          data={Data}
          renderItem={({item}) => <IconMain label={item.label} image={item.image}/>} 
          horizontal={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Tentang')}
          style={styles.btn}>
          <Text style={styles.txt}>6 hari terlambat, Pelajari tentang menstruasi tertunda</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Main;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'pink',
    paddingTop: 10,
  },
  txt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: 10,

  },
});
