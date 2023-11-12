import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const InfoCard = ({ icon, value, label }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardIcon}
        source={icon} // Pass the icon as a prop or require locally
      />
      <Text style={styles.cardValue}>{value}</Text>
      <Text style={styles.cardLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    width: '45%', 
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#0f1e2c' // Replace with your card background color
  },
  cardIcon: {
    width: 30,
    height: 30,
    marginBottom: 10
  },
  cardValue: {
    fontSize: 22,
    color: '#fefffe' // Replace with your value color
  },
  cardLabel: {
    fontSize: 14,
    color: '#808285' // Replace with your label color
  }
});

export default InfoCard;
