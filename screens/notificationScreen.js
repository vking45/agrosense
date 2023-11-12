import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/header';
import NavBar from '../components/navbar';
import NotificationCard from '../components/notificationCard';

const NotificationsScreen = () => {
  // Dummy data for the purpose of this example
  const notifications = [
    { id: 1, title: 'Lorem Ipsum', message: 'lorem Ipsum lorem Ipsum dolor simat dolor simat' },
    { id: 2, title: 'Lorem Ipsum', message: 'lorem Ipsum lorem Ipsum dolor simat dolor simat' },
    { id: 3, title: 'Lorem Ipsum', message: 'lorem Ipsum lorem Ipsum dolor simat dolor simat' },
    { id: 4, title: 'Lorem Ipsum', message: 'lorem Ipsum lorem Ipsum dolor simat dolor simat' },
    { id: 5, title: 'Lorem Ipsum', message: 'lorem Ipsum lorem Ipsum dolor simat dolor simat' },
    { id: 6, title: 'Lorem Ipsum', message: 'lorem Ipsum lorem Ipsum dolor simat dolor simat' },
    { id: 7, title: 'Lorem Ipsum', message: 'lorem Ipsum lorem Ipsum dolor simat dolor simat' },
    { id: 8, title: 'Lorem Ipsum', message: 'lorem Ipsum lorem Ipsum dolor simat dolor simat' },
    // ... other notifications
  ];

  return (
    <View>
      <ScrollView style={styles.notificationsContainer}>
        <Text style={styles.screenTitle}>Notifications</Text>
        {notifications.map(notification => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            message={notification.message}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#13283c', // Replace with your background color
  },
  notificationsContainer: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 24,
    color: '#fefffe', // Replace with your title color
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default NotificationsScreen;
