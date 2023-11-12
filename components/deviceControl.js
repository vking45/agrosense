import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Image } from 'react-native';

const DeviceControlCard = ({ deviceName, initialState, icon }) => {
  const [isEnabled, setIsEnabled] = useState(initialState);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={isEnabled ? styles.cardActive : styles.card}>
      {/* Icon will be displayed at the top of the card */}
      <Image source={icon} style={styles.iconStyle} />
      <Text style={styles.deviceName}>{deviceName}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>{isEnabled ? 'On' : 'Off'}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#fefffe' : '#cccdcd'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0f1e2c',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    width: '45%',
    height: 150, // Adjust based on your content
  },
  cardActive: {
    backgroundColor: '#157ede',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    width: '45%',
    height: 150, 
    // Rest of the styles remain the same as card
  },
  iconStyle: {
    width: 40, // Adjust based on your Figma design
    height: 40, // Adjust based on your Figma design
    marginBottom: 10, // Spacing from the icon to the text
  },
  deviceName: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  deviceCount: {
    fontSize: 14,
    color: '#a9a9a9',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Adjust as needed
  },
  switchLabel: {
    fontSize: 18,
    color: '#ffffff',
    marginRight: 10, // Spacing from the label to the switch
  },
  switch: {
    // Custom switch styles if needed
  },
});

export default DeviceControlCard;