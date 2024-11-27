import { Text, View } from "react-native";
import styles from "./styles";
import { Icon } from "@tabler/icons-react-native";

interface Props {
  Icon: Icon;
  title: string;
  children?: React.ReactNode;
}

const IconTitleOutput = ({ Icon, title, children }: Props) => {
  return (
    <View style={styles.outputItem}>
      <View style={styles.title}>
        <Icon color={"black"} />
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

export default IconTitleOutput;
