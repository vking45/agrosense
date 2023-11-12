import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const DeviceControlCard = ({ deviceName, deviceCount, initialState }) => {
  const [isEnabled, setIsEnabled] = useState(initialState);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.deviceName}>{deviceName}</Text>
        <Text style={styles.deviceCount}>{deviceCount} device</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1c2a38', // Replace with the color of your card
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Add shadow and elevation styles as needed
  },
  cardContent: {
    flexDirection: 'column',
  },
  deviceName: {
    fontSize: 16,
    color: '#ffffff', // Replace with your title color
    marginBottom: 4,
  },
  deviceCount: {
    fontSize: 12,
    color: '#a9a9a9', // Replace with your subtitle color
  },
});

export default DeviceControlCard;
