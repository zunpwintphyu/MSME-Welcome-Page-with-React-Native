import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class News extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>News</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
