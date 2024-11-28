import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import styles from "./styles";

interface Props {
  onchange: (value: string) => void;
  value: string;
}

const NumericInput = ({ onchange, value }: Props) => {
  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const inputValue = event.nativeEvent.text;
    const numericValue = inputValue.replace(/[^0-9.,]/g, "").replace(",", ".");
    onchange(numericValue);
  };

  return (
    <TextInput
      keyboardType="numeric"
      value={value}
      onChange={handleChange}
      style={styles.input}
    />
  );
};

export default NumericInput;
