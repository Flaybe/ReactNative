import React from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./styles";
import AppButton from "./AppButton.js";
import axios from "axios";

const Stack = createStackNavigator();

const LoginStack = ({ onLogin }) => {
  console.log("onLogin:", onLogin);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {(props) => <LoginView {...props} onLogin={onLogin} />}
      </Stack.Screen>
      <Stack.Screen name="Register" component={RegisterView} />
    </Stack.Navigator>
  );
};

const LoginView = ({ onLogin, navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    axios
      .post("https://eventhub80.azurewebsites.net/user", {
        name: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          // run onLogin function
          alert("Login successful");
          onLogin(username);
        } else {
          alert("Login failed");
          onLogin(username);
        }
      })
      .catch((error) => {
        onLogin(username);
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to EventHub</Text>
      <Image source={require("./assets/favicon.png")} />
      <KeyboardAvoidingView style={styles.container} behavior="position">
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
      </KeyboardAvoidingView>

      <AppButton onPress={handleLogin} title="Login" />
      <View style={{ height: 50 }} />
      <Text style={styles.hint}>Don't have an account?</Text>
      <AppButton
        onPress={() => navigation.navigate("Register")}
        title="Create Account"
      />
      <View style={{ height: 100 }} />
    </View>
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

        <AppButton onPress={handleRegister} title="Register" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginStack;
