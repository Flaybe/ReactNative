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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoginPage from "./Login";
import styles from "./styles";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("isLoggedIn:", isLoggedIn);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("isLoggedIn:", isLoggedIn);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <HomeTabs onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
};

const HomeTabs = ({ username }) => {
  return (
    <Tab.Navigator initialRouteName="Welcome">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
          tabBarOnPress: () => {
            navigator.navigate("Home", { username });
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Welcome"
        component={WelcomePage}
        options={{
          tabBarLabel: "Welcome",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const WelcomePage = ({ username }) => {
  return (
    <View style={styles.container}>
      <Text> Welcome {username} </Text>
      <Button
        title="Logout"
        onPress={() => {
          isLoggedIn = false;
        }}
      />
    </View>
  );
};

const HomeScreen = ({ username }) => {
  return (
    <View style={styles.container}>
      <Text> Welcome {username} </Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default App;
