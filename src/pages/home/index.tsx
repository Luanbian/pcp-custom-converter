import { useEffect, useState } from "react";
import Component from "../../components/Home";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const [mps, setMps] = useState("");
  const [weight, setWeight] = useState("");
  const [fps, setFps] = useState("");
  const [joules, setJoules] = useState("");

  const handleChangeMPS = (value: string) => {
    setMps(value);
  };
  const handleChangeWeight = (value: string) => {
    setWeight(value);
  };

  const convertMpsToFps = (mps: string) => {
    return parseFloat(mps) * 3.28084;
  };
  const convertGramsToKilo = (grams: string) => {
    return parseFloat(grams) / 1000;
  };

  useEffect(() => {
    if (mps && weight) {
      const fps = convertMpsToFps(mps);
      setFps(fps.toFixed(2));

      const kilo = convertGramsToKilo(weight);
      const joules = 0.5 * kilo * Math.pow(parseFloat(mps), 2);
      setJoules(joules.toFixed(2));
    } else {
      setFps("");
      setJoules("");
    }
  }, [mps, weight]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Component
        data={{ mps, weight, fps, joules }}
        actions={{ handleChangeMPS, handleChangeWeight }}
      />
    </SafeAreaView>
  );
};

export default Home;
