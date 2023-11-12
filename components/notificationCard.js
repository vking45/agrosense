import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationCard = ({ title, message }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#0f1e2c', // Replace with the color of your card
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#0f1e2c',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    color: '#fefffe', // Replace with your title color
    marginBottom: 5,
  },
  cardMessage: {
    fontSize: 14,
    color: '#808285', // Replace with your message color
  },
});

export default NotificationCard;
