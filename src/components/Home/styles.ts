import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
  },
  inputBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  outputBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    gap: 24,
  },
});

export default styles;
