import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ListingsPage = () => {
  return <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Available Shows in Your Area</Text>
        </View>
        <View style={styles.listing}>
          <Image source={{
          uri: 'https://via.placeholder.com/150'
        }} style={styles.image} />
          <View style={styles.listingInfo}>
            <Text style={styles.listingTitle}>Show Title</Text>
            <Text style={styles.listingLocation}>Location</Text>
            <Text style={styles.listingDate}>Date and Time</Text>
          </View>
        </View>
        <View style={styles.listing}>
          <Image source={{
          uri: 'https://via.placeholder.com/150'
        }} style={styles.image} />
          <View style={styles.listingInfo}>
            <Text style={styles.listingTitle}>Show Title</Text>
            <Text style={styles.listingLocation}>Location</Text>
            <Text style={styles.listingDate}>Date and Time</Text>
          </View>
        </View>
        <View style={styles.listing}>
          <Image source={{
          uri: 'https://via.placeholder.com/150'
        }} style={styles.image} />
          <View style={styles.listingInfo}>
            <Text style={styles.listingTitle}>Show Title</Text>
            <Text style={styles.listingLocation}>Location</Text>
            <Text style={styles.listingDate}>Date and Time</Text>
          </View>
        </View>
        <View style={styles.mapContainer}>
          <Image source={{
          uri: 'https://via.placeholder.com/350'
        }} style={styles.map} />
        </View>
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  header: {
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  listing: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20
  },
  listingInfo: {
    flex: 1
  },
  listingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  listingLocation: {
    fontSize: 16,
    marginBottom: 5
  },
  listingDate: {
    fontSize: 16
  },
  mapContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center'
  },
  map: {
    width: 350,
    height: 200
  }
});
export default ListingsPage;