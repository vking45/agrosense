import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import DeviceControlCard from '../components/deviceControl';
import ventilation from '../assets/ventilation.png';
import fan from '../assets/fan.png';
import sprinkler from '../assets/sprinkler.png';
import bulb from '../assets/light.png';

const ControlScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.cardsContainer}>
          <DeviceControlCard
            deviceName="A/Cs"
            initialState={true} // Assuming the "Fans" are on by default
            icon={fan}
          />
          <DeviceControlCard
            deviceName="Sprinkler"
            initialState={false} // Assuming the "Sprinkler" is off by default
            icon={sprinkler}
          />
          <DeviceControlCard
            deviceName="Lights"
            initialState={false} // Assuming the "Lights" are off by default
            icon={bulb}
          />
          <DeviceControlCard
            deviceName="Ventilation"
            initialState={true} // Assuming the "Ventilation" is on by default
            icon={ventilation}
          />
          {/* Add a component or button here for "New device" */}
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
    backgroundColor: '#13283c', // Replace with your preferred background color
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  // Add any additional styles here
});

export default ControlScreen;
