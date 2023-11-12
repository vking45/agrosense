import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import ViewScreen from './screens/viewScreen';
import NotificationsScreen from './screens/notificationScreen';
import Header from './components/header';
import NavBar from './components/navbar';
import ControlScreen from './screens/controlScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Header />
        <ControlScreen />
      </ScrollView>
        <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#13283c' // Replace with your preferred background color
  },
  container: {
    flex: 1,
    backgroundColor: '#13283c' // Replace with your preferred background color
  },
});
