import React from "react";
import {
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { CheckBox, ListItem } from "react-native-elements";
import styles from "./styles";
import AppButton from "./AppButton.js";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

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
      <HomeStack.Screen name="ShowEvents" component={ShowEvents} />
      <HomeStack.Screen name="EventDetails" component={EventDetails} />
    </HomeStack.Navigator>
  );
};

const HomeScreen = ({ route, navigation }) => {
  const { username } = route.params;

  const handleCreateEvent = () => {
    navigation.navigate("CreateEvent");
  };

  const handleShwoEvents = () => {
    navigation.navigate("ShowEvents");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Welcome </Text>
      <Text style={styles.welcome}> to </Text>
      <Text style={styles.welcome}> EventHub </Text>
      <Text style={styles.welcome}> {username} </Text>
      <View style={styles.container}>
        <AppButton title="Find Events" onPress={handleShwoEvents} />
        <AppButton title="Create Event" onPress={handleCreateEvent} />
      </View>
    </View>
  );
};

const CreateEvent = () => {
  const [checked, setChecked] = React.useState(false);
  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        <Text style={styles.hint}>Tell us about your event</Text>
        <TextInput
          style={styles.input}
          placeholder="Event Name"
          maxLength={10}
        />
        <TextInput
          style={styles.description}
          placeholder="Event Description"
          maxLength={250}
          multiline={true}
          blurOnSubmit={true}
        />
        <CheckBox
          title="Public"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <TouchableOpacity onPress={pickImage}>
          <Text>Select Image</Text>
        </TouchableOpacity>
        {image && (
          <Image
            styles={styles.image}
            source={{ uri: image }}
            style={{ width: 200, height: 200 }}
          />
        )}

        <View style={styles.container}>
          <AppButton title="Create Event" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const ShowEvents = ({ navigation }) => {
  const events = [
    { id: 1, title: "Event 1", description: "Description for Event 1" },
    { id: 2, title: "Event 2", description: "Description for Event 2" },
    { id: 3, title: "Event 3", description: "Description for Event 3" },
    { id: 4, title: "Event 4", description: "Description for Event 4" },
    { id: 5, title: "Event 5", description: "Description for Event 5" },
    { id: 6, title: "Event 6", description: "Description for Event 6" },
    { id: 7, title: "Event 7", description: "Description for Event 7" },
    { id: 8, title: "Event 8", description: "Description for Event 8" },
    { id: 9, title: "Event 9", description: "Description for Event 9" },
    { id: 10, title: "Event 10", description: "Description for Event 10" },
    { id: 11, title: "Event 11", description: "Description for Event 11" },
  ];

  const handleEventPress = (eventId) => {
    navigation.navigate("EventDetails", { eventId });
  };

  return (
    <View style={styles.listContainer}>
      <ScrollView style={{ flex: 1 }}>
        {events.map((event) => (
          <TouchableOpacity
            key={event.id}
            onPress={() => handleEventPress(event.id)}
          >
            <View style={styles.eventItem}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const EventDetails = ({ route }) => {
  const { eventId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Event Details </Text>
      <Text style={styles.welcome}> {eventId} </Text>
    </View>
  );
};

export default HomeStackScreen;
