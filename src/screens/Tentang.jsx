import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import React from 'react';

const Tentang = () => {
  return (
    <ImageBackground source={require('../assets/img/imgg.jpeg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Bahaya Telat Menstruasi</Text>
        <Text style={styles.paragraph}>
          Telatnya menstruasi bisa menjadi tanda adanya masalah kesehatan yang perlu diperhatikan dengan serius. Berikut adalah beberapa bahaya telat menstruasi yang perlu Anda ketahui:
        </Text>
        <Text style={styles.subTitle}>1. Ketidakseimbangan Hormon</Text>
        <Text style={styles.paragraph}>
          Telatnya menstruasi bisa menjadi tanda adanya ketidakseimbangan hormon dalam tubuh, yang dapat mengganggu siklus menstruasi dan berdampak negatif pada kesehatan reproduksi wanita.
        </Text>
        <Text style={styles.subTitle}>2. Kehamilan</Text>
        <Text style={styles.paragraph}>
          Telatnya menstruasi juga bisa menjadi indikasi awal kehamilan. Penting untuk melakukan tes kehamilan jika mengalami telat menstruasi, terutama jika berhubungan seks tanpa pengaman.
        </Text>
        <Text style={styles.subTitle}>3. Gangguan Kesehatan Reproduksi</Text>
        <Text style={styles.paragraph}>
          Beberapa gangguan kesehatan reproduksi seperti sindrom ovarium polikistik (PCOS) atau gangguan tiroid dapat menyebabkan telatnya menstruasi. Konsultasikan dengan dokter untuk diagnosis dan pengobatan yang tepat.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: 'black',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    color: 'pink',
    fontWeight: 'bold',
  },
});
