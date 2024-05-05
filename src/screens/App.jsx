import {StyleSheet, Text, View, Alert, FlatList} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kotak from './Kotak';
import Tombol from './Tombol';
import Home from './Home';
import About from './About';
import BottomTabNavigator from './bottomnavigation/index.jsx'

const Data = [          
  {id: 1, lable: 'Click'},
  {id: 2, lable: 'Cancel'},
  {id: 3, lable: 'Save'}, 
];

const App = () => {
  return (
    <View>
      <Text style={styles.tulisan}>MyMenstruasi</Text>
      <Kotak />
      <Tombol 
        lable={'Klik'}
        onPress={() => Alert.alert('Info' ,'Hai keren kan!')}
        />
        <Tombol lable={'Save'} onPress={() => Alert.alert('Info','Haloo')} /> 
        <FlatList
          data={Data}
          renderItem={({item}) => <Tombol lable={item.lable} />}
          keyExtractor={item => item.id}
          horizontal={true}
         />
      </View>
    )
};


