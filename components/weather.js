import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherDisplay = ({ temperature, description, icon }) => {
  return (
    <View style={styles.weatherContainer}>
      <Image
        style={styles.weatherIcon}
        source={icon} // Pass the icon as a prop or require locally
      />
      <Text style={styles.temperatureText}>{temperature}</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'transparent'
  },
  weatherIcon: {
    width: 100,
    height: 100
  },
  temperatureText: {
    fontSize: 48,
    color: '#fff' // Replace with your temperature color
  },
  weatherDescription: {
    fontSize: 18,
    color: '#fff' // Replace with your description color
  }
});

export default WeatherDisplay;
