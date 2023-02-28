import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

// with React Native, we can use hooks to manage state
// useState is a hook that allows us to manage state in a functional component
// useState returns an array with two elements
// the first element is the current value of the state
// the second element is a function that allows us to update the state
// we can use array destructuring to assign the two elements to variables


export default function App() {

    const [counter, setCounter] = useState(0);
    const [resetCounter, setResetCounter] = useState(0);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.toolbar}>
                <Text style={styles.label}>You have reset me {resetCounter} times </Text>
            </SafeAreaView>
            <View style={styles.content}>
                <Text>You clicked {counter} times</Text>
                <Button 
                    onPress={ () => setCounter(counter + 1) }
                    title="Click me"
                />
                <Button
                    onPress={ () => {
                        setCounter(0);
                        setResetCounter(resetCounter + 1);
                    }}
                    title="Reset"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
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
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
});
