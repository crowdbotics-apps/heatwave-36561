import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const WelcomeScreen = () => {
  return <View style={styles.container}>
      <ImageBackground source={require('../assets/fireball.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Heatwave</Text>
      <Text style={styles.subtitle}>The hottest app in town</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#b64141"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#fff'
  }
});
export default WelcomeScreen;