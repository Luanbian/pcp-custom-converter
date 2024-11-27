import { View, Text } from "react-native";
import styles from "./styles";
import NumericInput from "../Inputs/NumericInput";
import { IconBolt, IconMeteor, IconWeight } from "@tabler/icons-react-native";
import IconTitle from "../IconTitle";
import IconTitleOutput from "../Outputs/IconTitleOutput";

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
      <View style={styles.inputBox}>
        <View style={{ width: "100%" }}>
          <IconTitle Icon={IconMeteor} title="Velocidade da munição (m/s)" />
          <NumericInput onchange={handleChangeMPS} value={mps} />
        </View>
        <View style={{ width: "100%" }}>
          <IconTitle Icon={IconWeight} title="Peso da munição (g)" />
          <NumericInput onchange={handleChangeWeight} value={weight} />
        </View>
      </View>

      <View style={styles.outputBox}>
        <IconTitleOutput Icon={IconMeteor} title="Velocidade da munição (fps)">
          <Text style={{ fontSize: 28 }}>{fps}</Text>
        </IconTitleOutput>
        <IconTitleOutput Icon={IconBolt} title="Energia (j)">
          <Text style={{ fontSize: 28 }}>{joules}</Text>
        </IconTitleOutput>
      </View>
    </View>
  );
};

export default Home;
