import { StyleSheet } from "react-native";
import React from "react";
import { View, ImageBackground } from "react-native";

const Maps = () => {
  return <View style={_styles.xijKDLct}>
        <ImageBackground source="https://d3tklmlrp1a8c2.cloudfront.net/media/components/screens/react-native-maps.png" resizeMode="contain" style={_styles.GZAAzsMr}>
        </ImageBackground>
      </View>;
};

export default Maps;

const _styles = StyleSheet.create({
  xijKDLct: {
    padding: 10,
    position: "relative",
    height: "100%"
  },
  GZAAzsMr: {
    flex: 1,
    justifyContent: "center"
  }
});