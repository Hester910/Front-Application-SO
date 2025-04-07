import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import FullLoadScreen from './src/FullLoadScreen';
//import LazyLoadScreen from './src/LazyLoadScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FullLoadScreen />
      {/* <LazyLoadScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
