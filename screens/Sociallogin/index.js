import { StyleSheet } from "react-native";
import React from "react";
import { View, ImageBackground } from "react-native";

const Sociallogin = () => {
  return <View style={_styles.ePEOAmxj}>
        <ImageBackground source="https://d3tklmlrp1a8c2.cloudfront.net/media/components/screens/react-native-onboarding.png" resizeMode="contain" style={_styles.OiYMjPhH}>
        </ImageBackground>
      </View>;
};

export default Sociallogin;

const _styles = StyleSheet.create({
  ePEOAmxj: {
    padding: 10,
    position: "relative",
    height: "100%"
  },
  OiYMjPhH: {
    flex: 1,
    justifyContent: "center",
    left: 2,
    top: 0,
    width: 190,
    height: 332
  }
});