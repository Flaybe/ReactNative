import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;
