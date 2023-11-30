import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Header from './components/header';
import NavBar from './components/navbar';
import ControlScreen from './screens/controlScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewScreen from './screens/viewScreen';
import NotificationsScreen from './screens/notificationScreen';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
          <ViewScreen />
      </ScrollView>
      <FlashMessage position="bottom" />
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
