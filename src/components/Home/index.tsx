import { View, Text } from "react-native";
import styles from "./styles";
import NumericInput from "../Inputs/NumericInput";
import { IconBolt, IconMeteor, IconWeight } from "@tabler/icons-react-native";
import IconTitleInput from "../Inputs/IconTitleInput";
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
        <IconTitleInput Icon={IconMeteor} title="Velocidade da munição (m/s)" />
        <NumericInput
          placeholder="Coloque a velocidade em metros pos segundo"
          onchange={handleChangeMPS}
          value={mps}
        />
        <IconTitleInput Icon={IconWeight} title="Peso da munição (g)" />
        <NumericInput
          placeholder="Coloque o peso em gramas"
          onchange={handleChangeWeight}
          value={weight}
        />
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
