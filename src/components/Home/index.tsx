import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import styles from "./styles";
import NumericInput from "../Inputs/NumericInput";

interface Props {
  data: {
    mps: string;
    weight: string;
    fps: string;
    joules: string;
  };
  actions: {
    handleChangeMPS: (value: string) => void;
    handleChangeWeight: (value: string) => void;
  };
}

const Home = ({ data, actions }: Props) => {
  const { mps, weight, fps, joules } = data;
  const { handleChangeMPS, handleChangeWeight } = actions;

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
      <Text>FPS: {fps}</Text>
      <Text>Joules: {joules}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
