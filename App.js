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
import { useNavigation } from "@react-navigation/native";
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

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <HomeTabs onLogout={handleLogout} username={username} />
      ) : (
        <LoginStack onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
};

const HomeTabs = ({ onLogout, username }) => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        initialParams={{ username: username }}
        options={{
          headerShown: false,
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
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={size} />
          ),
        }}
      >
        {(props) => (
          <ProfilePage {...props} username={username} onLogout={onLogout} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const ProfilePage = ({ username, onLogout }) => {
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

const HomeStack = createStackNavigator();
const HomeStackScreen = ({ username }) => {
  return (
    // hide header
    <HomeStack.Navigator initialRouteName="HomeStack ">
      <HomeStack.Screen
        name="HomeStack"
        component={HomeScreen}
        initialParams={{ username: username }}
        options={{ headerTitle: "Home" }}
      />
      <HomeStack.Screen name="CreateEvent" component={CreateEvent} />
    </HomeStack.Navigator>
  );
};

const HomeScreen = ({ route, navigation }) => {
  const { username } = route.params;

  const handleCreateEvent = () => {
    navigation.navigate("CreateEvent");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Welcome </Text>
      <Text style={styles.welcome}> to </Text>
      <Text style={styles.welcome}> EventHub </Text>
      <Text style={styles.welcome}> {username} </Text>
      <View style={styles.container}>
        <AppButton title="Find Events" />
        <AppButton title="Create Event" onPress={handleCreateEvent} />
      </View>
    </View>
  );
};

const CreateEvent = () => {
  return (
    <View style={styles.container}>
      <Text> Create Event </Text>
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
