import React,{ useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { temperature, humidity, moisture, co2, light } from '../components/requests';
import InfoCard from '../components/infocard';
import WeatherDisplay from '../components/weather';
import Header from '../components/header';
import { showMessage } from 'react-native-flash-message';

const ViewScreen = () => {

  const [temp, setTemp] = useState(0);
  const [humid, setHumidity] = useState(0);
  const [moist, setMoist] = useState(0);
  const [carbon, setCarbon] = useState(0);
  const [lux, setLux] = useState(0);

  const onFetch = async () => {

    showMessage({
      type: 'info',
      message: "Refreshing",
    })

    const _temp = await temperature();
    console.log(_temp);
    setTemp(_temp);
    const _humid = await humidity();
    console.log(_humid);
    setHumidity(_humid);
    const _moist = await moisture();
    console.log(_moist);
    setMoist(_moist);
    const _car = await co2();
    console.log(_car);
    setCarbon(_car);
    const _lux = await light();
    console.log(_lux);
    setLux(_lux);

  }

  useEffect(() => {
    (async () => {
      
      const _temp = await temperature();
      console.log(_temp);
      setTemp(_temp);

    });
    }, []) 

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Header refresh={onFetch} />
        <WeatherDisplay
          temperature={ temp + "°C" }
          description="In-Range"
          icon={require('../assets/temp.png')} // Replace with actual path to weather icon
        />
        <View style={styles.cardsContainer}>
          <InfoCard
            icon={require('../assets/co2.png')} // Replace with actual path to CO2 icon
            value={ carbon + " PPM"}
            label="CO2"
          />
          <InfoCard
            icon={require('../assets/humidity.png')} // Replace with actual path to humidity icon
            value={ humid + "%"}
            label="Humidity"
          />
        </View>
        <View style={styles.cardsContainer}>
          <InfoCard
            icon={require('../assets/soil.png')} // Replace with actual path to soil moisture icon
            value={ moist + "%"}
            label="Soil Moisture"
          />
          <InfoCard
            icon={require('../assets/light.png')} // Replace with actual path to lightning icon
            value={ lux + " lux"}
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
