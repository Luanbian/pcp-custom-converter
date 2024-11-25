import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./styles";
import NumericInput from "../Inputs/NumericInput";
import { useState } from "react";

const Home = () => {
  const [mps, setMps] = useState("");
  const [weight, setWeight] = useState("");

  const handleChangeMPS = (value: string) => {
    setMps(value);
  };
  const handleChangeWeight = (value: string) => {
    setWeight(value);
  };

  return (
    <View style={styles.container}>
      <NumericInput
        placeholder="Coloque a velocidade em metros pos segundo"
        onchange={handleChangeMPS}
        value={mps}
      />
      <NumericInput
        placeholder="Coloque o peso em gramas"
        onchange={handleChangeWeight}
        value={weight}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
