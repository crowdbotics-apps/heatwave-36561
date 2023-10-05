import React from "react";
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from "react-native";
const showsData = [{
  id: "1",
  name: "Show 1",
  venue: "Venue 1",
  distance: "2 miles",
  likes: 100,
  upvotes: 50
}, {
  id: "2",
  name: "Show 2",
  venue: "Venue 2",
  distance: "5 miles",
  likes: 200,
  upvotes: 75
}, {
  id: "3",
  name: "Show 3",
  venue: "Venue 3",
  distance: "1 mile",
  likes: 300,
  upvotes: 125
} // Add more shows as needed
];

const ShowItem = ({
  item
}) => <View style={styles.itemContainer}>
    <Image style={styles.image} source={{
    uri: "https://tinyurl.com/42evm3m3"
  }} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.venue}>{item.venue}</Text>
      <Text style={styles.distance}>{item.distance}</Text>
      <Text style={styles.likes}>Likes: {item.likes}</Text>
      <Text style={styles.upvotes}>Upvotes: {item.upvotes}</Text>
    </View>
  </View>;

const ShowsScreen = () => <SafeAreaView style={styles.container}>
    <FlatList data={showsData} renderItem={ShowItem} keyExtractor={item => item.id} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  textContainer: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  venue: {
    fontSize: 16
  },
  distance: {
    fontSize: 14,
    color: "#888"
  },
  likes: {
    fontSize: 14,
    color: "#888"
  },
  upvotes: {
    fontSize: 14,
    color: "#888"
  }
});
export default ShowsScreen;