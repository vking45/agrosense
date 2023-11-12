import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import icon from '../assets/icon.png';

const NavBar = () => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity>
        <Image
          source={icon} // Replace with your icon path
          style={styles.navIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={icon} // Replace with your icon path
          style={styles.navIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={icon} // Replace with your icon path
          style={styles.navIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#0f1e2c' // Replace with your navbar background color
  },
  navIcon: {
    width: 24,
    height: 24
  }
});

export default NavBar;
