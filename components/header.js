import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import icon from '../assets/icon.png';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.avatar}
        source={icon} // Replace with your image path
      />
      <Text style={styles.locationName}>Agrosense</Text>
      <Image
        style={styles.settingsIcon}
        source={icon} // Replace with your settings icon path
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#000' // Replace with your header background color
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  locationName: {
    fontSize: 20,
    color: '#fff' // Replace with your text color
  },
  settingsIcon: {
    width: 24,
    height: 24
  }
});

export default Header;
