import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import home from '../assets/home.png';
import config from '../assets/config.png';
import control from '../assets/control.png'

const NavBar = () => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity>
        <Image
          source={home} // Replace with your icon path
          style={styles.navIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={config} // Replace with your icon path
          style={styles.navIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={control} // Replace with your icon path
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
    paddingTop: 20,
    backgroundColor: '#13283c', // Replace with your navbar background color
    borderTopWidth: 1,
    borderTopColor: '#fff'
  },
  navIcon: {
    padding: 5,
    width: 30,
    height: 30
  }
});

export default NavBar;
