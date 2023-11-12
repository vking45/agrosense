import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import DeviceControlCard from '../components/deviceControl';

const ControlScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.cardsContainer}>
          <DeviceControlCard
            deviceName="Fans"
            deviceCount="3"
            initialState={true} // Assuming the "Fans" are on by default
          />
          <DeviceControlCard
            deviceName="Sprinkler"
            deviceCount="1"
            initialState={false} // Assuming the "Sprinkler" is off by default
          />
          <DeviceControlCard
            deviceName="Lights"
            deviceCount="4"
            initialState={false} // Assuming the "Lights" are off by default
          />
          <DeviceControlCard
            deviceName="Ventilation"
            deviceCount="2"
            initialState={true} // Assuming the "Ventilation" is on by default
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
    backgroundColor: '#13283c' // Replace with your preferred background color
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
