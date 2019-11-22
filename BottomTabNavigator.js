import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { Text } from "react-native";

import AboutAs from "./screens/AboutAs.js";
import DiscountShop from "./screens/DiscountShop.js";
import News from "./screens/News.js";
import Setting from "./screens/Setting.js";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";
export default createAppContainer(
    createBottomTabNavigator(
        {
            DiscountShop: {
                screen: DiscountShop,
                navigationOptions: () => ({
                    title: "DiscountShop",
                    tabBarLabel: "DiscountShop",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Entypo name="shop" size={24} color={tintColor} />
                    )
                })
            },
            AboutAs: {
                screen: AboutAs,
                navigationOptions: () => ({
                    title: "AboutAs",
                    tabBarLabel: "AboutAs",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Ionicons name="ios-people" size={24} color={tintColor} />
                    )
                })
            },

            News: {
                screen: News,
                navigationOptions: () => ({
                    title: "News",
                    tabBarLabel: "News",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Entypo name="news" size={24} color={tintColor} />
                    )
                })
            },
            Setting: {
                screen: Setting,
                navigationOptions: () => ({
                    title: "Setting",
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Feather name="settings" size={24} color={tintColor} />
                    )
                })
            }
        },
        {
            initialRouteName: "DiscountShop",
            tabBarOptions: {
                activeTintColor: "black",
                inactiveTintColor: "white",
                labelStyle: {
                    fontSize: 10,
                    paddingBottom: 3,
                },
                style: {
                    height: 60,
                    backgroundColor: '#1DF407',
                }
            }
        }
    )
);
