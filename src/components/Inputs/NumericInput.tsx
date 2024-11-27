import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from "react-native";

interface Props {
  placeholder: string;
  onchange: (value: string) => void;
  value: string;
}

const NumericInput = ({ placeholder, onchange, value }: Props) => {
  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const inputValue = event.nativeEvent.text;
    const numericValue = inputValue.replace(/[^0-9.,]/g, "");
    onchange(numericValue);
  };

  return (
    <TextInput
      keyboardType="numeric"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      style={{ fontSize: 28 }}
    />
  );
};

export default NumericInput;
