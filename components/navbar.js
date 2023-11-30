import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import home from '../assets/home.png';
import config from '../assets/config.png';
import control from '../assets/control.png'
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("Home")}>
        <Image
          source={home} // Replace with your icon path
          style={styles.navIcon}
        />
        </Pressable>
      </TouchableOpacity>
      <TouchableOpacity>
        <Pressable>
        <Image
          source={config} // Replace with your icon path
          style={styles.navIcon}
        />
        </Pressable>
      </TouchableOpacity>
      <TouchableOpacity>
        <Pressable onPress={() => navigation.navigate("Control")}>
        <Image
          source={control} // Replace with your icon path
          style={styles.navIcon}
        />
        </Pressable>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    marginBottom: 20,
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
