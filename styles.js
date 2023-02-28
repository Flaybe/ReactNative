import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  toolbar: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 80,
  },
  label: {
    color: "white",
    fontSize: 20,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 2,
    margin: 10,
  },
  hint: {
    color: "gray",
    fontSize: 12,
    paddingTop: 200,
  },
});

export default styles;
