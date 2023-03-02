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
    margin: 10,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  hint: {
    color: "gray",
    fontSize: 12,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#2e4494",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5,
  },
  info: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "center",
  },
});

export default styles;
