import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./styles";
import axios from "axios";

const Stack = createStackNavigator();

const LoginPage = (onLogin) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Register" component={RegisterView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoginView = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    axios
      .get("https://eventhub80.azurewebsites.net/messages", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          // run onLogin function
          alert("Login successful");
          params.login();
        } else {
          alert("Login failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require("./assets/favicon.png")} />
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder=" Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder=" Password"
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleLogin} title="Login" />
        <Text style={styles.hint}>Don't have an account?</Text>
        <Button
          onPress={() => navigation.navigate("Register")}
          title="Register"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const RegisterView = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const handleRegister = () => {
    // check if passwords match
    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    // Register user in db

    // show success message
    // Show a registration success message for 1 second and then hide it
    alert("Registration successful");

    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require("./assets/favicon.png")} />
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder=" Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder=" Password"
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Write Password Again"
          value={password2}
          onChangeText={setPassword2}
        />

        <Button onPress={handleRegister} title="Register" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
