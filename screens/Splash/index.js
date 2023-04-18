import { StyleSheet } from "react-native";
import React from "react";
import { View, ImageBackground } from "react-native";

const Splash = () => {
  return <View style={_styles.jvyiQwDS}>
        <ImageBackground source="https://d3tklmlrp1a8c2.cloudfront.net/media/components/screens/react-native-splash.png" resizeMode="contain" style={_styles.QEEPZeCN}>
        </ImageBackground>
      </View>;
};

export default Splash;

const _styles = StyleSheet.create({
  jvyiQwDS: {
    padding: 10,
    position: "relative",
    height: "100%"
  },
  QEEPZeCN: {
    flex: 1,
    justifyContent: "center"
  }
});