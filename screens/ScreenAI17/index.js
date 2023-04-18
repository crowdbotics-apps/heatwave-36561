import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EventDetailsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{
        uri: 'https://dummyimage.com/600x400/000/fff'
      }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Concert Title</Text>
        <Text style={styles.subtitle}>Venue Name</Text>
        <View style={styles.bandContainer}>
          <Image source={{
          uri: 'https://dummyimage.com/100x100/000/fff'
        }} style={styles.bandImage} />
          <Text style={styles.bandName}>Band Name</Text>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, vel bibendum sapien. Nulla facilisi. Sed euismod
          euismod libero, vel bibendum sapien. Nulla facilisi.
        </Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    height: 200,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20
  },
  bandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  bandImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  bandName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    lineHeight: 24
  }
});
export default EventDetailsScreen;