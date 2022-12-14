import React from "react";
import { View, ImageBackground } from "react-native";

const Maps = () => {
  return <View style={{
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
        <ImageBackground source="https://d3tklmlrp1a8c2.cloudfront.net/media/components/screens/react-native-maps.png" resizeMode="contain" style={{
      flex: 1,
      justifyContent: "center"
    }}>
        </ImageBackground>
      </View>;
};

export default Maps;