import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useState } from 'react';

const Pengaturan = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const toggleNotification = () => setNotificationEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notifikasi</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotification}
          value={notificationEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Tema Gelap</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor="#f4f3f4"
          ios_backgroundColor="#3e3e3e"
          value={false}
        />
      </View>
      <Text style={styles.infoText}>Terimakasih atas Kunjungannya</Text>
    </View>
  );
};

export default Pengaturan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#334', 
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingLabel: {
    padding: 10,
    fontSize: 18,
    color: '#333', 
  },
  infoText: {
    padding: 10,
    fontSize: 14,
    color: '#666', 
    textAlign: 'center',
  },
});
