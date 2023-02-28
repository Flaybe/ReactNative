import Reac, {Component} from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";


class App extends Component {
    state = {
        counter: 0,
        resetCounter: 0,
    };

    onPress = () => {
        this.setState({counter: this.state.counter + 1});
    };

    onReset = () => {
        this.setState({counter: 0, resetCounter: this.state.resetCounter + 1});
    };

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.toolbar}>
                    <Text style={styles.label}>You have reset me {this.state.resetCounter} times </Text>
                </SafeAreaView>
                <View style={styles.content}>
                    <Text>You clicked {this.state.counter} times</Text>
                    <Button 
                        onPress={this.onPress}
                        title="Click me"
                    />
                    <Button
                        onPress={this.onReset}
                        title="Reset"
                    />
                </View>
            </View>
        );
    }
}

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
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },

});

export default App;


