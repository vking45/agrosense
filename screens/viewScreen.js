import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/header';
import InfoCard from '../components/infocard';
import NavBar from '../components/navbar';
import WeatherDisplay from '../components/weather';

const ViewScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <WeatherDisplay
          temperature="24°C"
          description="Partly Cloudy"
          icon={require('../assets/icon.png')} // Replace with actual path to weather icon
        />
        <View style={styles.cardsContainer}>
          <InfoCard
            icon={require('../assets/icon.png')} // Replace with actual path to CO2 icon
            value="19°C"
            label="CO2"
          />
          <InfoCard
            icon={require('../assets/icon.png')} // Replace with actual path to humidity icon
            value="81%"
            label="Humidity"
          />
          <InfoCard
            icon={require('../assets/icon.png')} // Replace with actual path to soil moisture icon
            value="19°C"
            label="Soil Moisture"
          />
          <InfoCard
            icon={require('../assets/icon.png')} // Replace with actual path to lightning icon
            value="1.54"
            label="Lightning"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#13283c' // Replace with your preferred background color
  },
  container: {
    flex: 1,
    backgroundColor: '#13283c' // Replace with your preferred background color
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});

export default ViewScreen;
