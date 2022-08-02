import React from "react";
import { View, ImageBackground } from "react-native";

const Sociallogin = () => {
  return <View style={{
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
        <ImageBackground source="https://d3tklmlrp1a8c2.cloudfront.net/media/components/screens/react-native-onboarding.png" resizeMode="contain" style={{
      flex: 1,
      justifyContent: "center",
      left: 2,
      top: 0,
      width: 190,
      height: 332
    }}>
        </ImageBackground>
      </View>;
};

export default Sociallogin;