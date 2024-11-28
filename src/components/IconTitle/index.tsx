import { Text, View } from "react-native";
import styles from "./styles";
import { Icon } from "@tabler/icons-react-native";
import { palette } from "../../styles/globalStyles";

interface Props {
  Icon: Icon;
  title: string;
}

const IconTitle = ({ Icon, title }: Props) => {
  return (
    <View style={styles.title}>
      <Icon color={palette.secondary} />
      <Text
        style={{ fontWeight: "bold", fontSize: 24, color: palette.primary }}
      >
        {title}
      </Text>
    </View>
  );
};

export default IconTitle;
