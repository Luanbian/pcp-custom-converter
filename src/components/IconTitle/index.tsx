import { Text, View } from "react-native";
import styles from "./styles";
import { Icon } from "@tabler/icons-react-native";

interface Props {
  Icon: Icon;
  title: string;
}

const IconTitle = ({ Icon, title }: Props) => {
  return (
    <View style={styles.title}>
      <Icon color={"black"} />
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>{title}</Text>
    </View>
  );
};

export default IconTitle;
