import { Animated, Image, View } from "react-native";
import splashImage from "../../../assets/images/splash.png";
import LoadObject from "../../../assets/images/loadObject.png";
import { useEffect, useRef } from "react";

const Splash = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.Image
        source={LoadObject}
        style={[
          {
            position: "absolute",
            width: 120,
            height: 120,
            top: "30%",
            left: "35%",
            zIndex: 1,
          },
          { transform: [{ rotate: spin }] },
        ]}
      />
      <Image
        source={splashImage}
        style={{ flex: 1, width: "100%", height: "100%" }}
        resizeMode="cover"
      />
    </View>
  );
};

export default Splash;
