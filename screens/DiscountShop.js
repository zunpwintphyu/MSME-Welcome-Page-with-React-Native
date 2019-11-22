import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

import { FontAwesome, Foundation, Entypo } from "@expo/vector-icons";
export default class DiscountShop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
            "Cantarell-Regular": require("../assets/Font/Cantarell-Regular.ttf"),
            "Cantarell-Bold": require("../assets/Font/Cantarell-Bold.ttf"),
            "Dosis-ExtraBold": require("../assets/Font/Dosis-ExtraBold.otf")
        });
        this.setState({ fontLoaded: true });
    }
    render() {
        if (this.state.fontLoaded) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Welcome from MSME</Text>
                    <View style={styles.firstContainer}>
                        <View style={styles.secContainer}>
                            <View style={styles.first}>
                                <FontAwesome name="group" size={24} style={styles.firsticon} />
                                <Text style={styles.text}>Members</Text>
                            </View>
                            <View style={styles.second}>
                                <Foundation
                                    name="torso-business"
                                    size={30}
                                    style={styles.firsticon}
                                />
                                <Text style={styles.text}>Executive Council</Text>
                            </View>
                        </View>

                        <View style={styles.thirdContainer}>
                            <View style={styles.third}>
                                <FontAwesome
                                    name="recycle"
                                    size={24}
                                    style={styles.firsticon}
                                />
                                <Text style={styles.text}>Committee</Text>
                            </View>
                            <View style={styles.fourth}>
                                <Entypo name="shop" size={24} style={styles.firsticon} />
                                <Text style={styles.text}>Discount Shop</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: "#1DF407"
    },
    title: {
        color: "white",
        fontSize: 23,
        fontFamily: "Cantarell-Bold",
        textAlign: "center"
    },
    firstContainer: {
        flexDirection: "row",
        
        marginLeft: "15%",
        marginRight: "10%"
    },
    secContainer: {
        flex: 1,
        width: "50%",
        marginTop: "15%"
    },
    thirdContainer: {
        flex: 1,
        width: "100%",
        marginTop: "15%"
    },
    text: {
        //   paddingTop:'50%',
        fontSize: 10,
        fontFamily: "Cantarell-Bold",
        textAlign: "center"
    },
    first: {
        width: 120,
        height: 160,
        borderWidth: 1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 80,
        backgroundColor: "white",
        borderColor: "white"
    },
    second: {
        width: 120,
        height: 160,
        borderWidth: 1,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 7,
        marginTop: 10,
        backgroundColor: "white",
        borderColor: "white"
    },
    third: {
        width: 120,
        height: 160,
        borderWidth: 1,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 7,
        backgroundColor: "white",
        borderColor: "white"
    },
    fourth: {
        width: 120,
        height: 160,
        borderWidth: 1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 80,
        marginTop: 10,
        backgroundColor: "white",
        borderColor: "white"
    },
    firsticon: {
        color: "green",
        textAlign: "center",
        paddingTop: "50%"
    }
});
