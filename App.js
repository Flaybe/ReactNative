import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoginStack from "./Login";
import styles from "./styles";
import AppButton from "./AppButton.js";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [username, setUsername] = React.useState("");

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <HomeTabs onLogout={() => setIsLoggedIn(false)} username={username} />
      ) : (
        <LoginStack onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
};

const HomeTabs = ({ onLogout, username }) => {
  return (
    <Tab.Navigator initialRouteName="Welcome">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ username: username }}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
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
        name="Profile"
        component={ProfilePage}
        initialParams={{ onLogout: onLogout, username: username }}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const ProfilePage = ({ route }) => {
  const { onLogout, username } = route.params;

  return (
    <View style={styles.container}>
      <Image source={require("./assets/favicon.png")} />
      <View style={styles.info}>
        <Text style={styles.welcome}> Name: {username} </Text>
      </View>
      <View style={styles.container}>
        <AppButton title="Logout" onPress={onLogout} />
      </View>
    </View>
  );
};

const HomeScreen = ({ route }) => {
  const { username } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Welcome </Text>
      <Text style={styles.welcome}> to </Text>
      <Text style={styles.welcome}> EventHub </Text>
      <Text style={styles.welcome}> {username} </Text>
      <View style={styles.container}>
        <AppButton title="Find Events" />
        <AppButton title="Create Event" />
      </View>
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
