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
          description="In-Range"
          icon={require('../assets/temp.png')} // Replace with actual path to weather icon
        />
        <View style={styles.cardsContainer}>
          <InfoCard
            icon={require('../assets/co2.png')} // Replace with actual path to CO2 icon
            value="82%"
            label="CO2"
          />
          <InfoCard
            icon={require('../assets/humidity.png')} // Replace with actual path to humidity icon
            value="92%"
            label="Humidity"
          />
        </View>
        <View style={styles.cardsContainer}>
          <InfoCard
            icon={require('../assets/soil.png')} // Replace with actual path to soil moisture icon
            value="62%"
            label="Soil Moisture"
          />
          <InfoCard
            icon={require('../assets/light.png')} // Replace with actual path to lightning icon
            value="1.54"
            label="Lighting"
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
    paddingTop: 30,
    backgroundColor: '#13283c' // Replace with your preferred background color
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  }
});

export default ViewScreen;
