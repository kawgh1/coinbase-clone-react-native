import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Prices from "./screens/Prices";
import Transfer from "./screens/Transfer";
import Settings from "./screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        position: "absolute",
                        elevation: 0,
                        backgroundColor: "white",
                        height: 80,
                    },
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen
                    name="Coinbase Clone"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Image
                                    source={require("./assets/icons/1x/home.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 17,
                                        height: 17,
                                        tintColor: focused ? "#2150f5" : "gray",
                                    }}
                                />
                                <Text
                                    style={{
                                        color: focused ? "#2150f5" : "gray",
                                        fontSize: 10,
                                    }}
                                >
                                    Home
                                </Text>
                            </View>
                        ),
                    }}
                />

                <Tab.Screen
                    name="Portfolio"
                    component={Portfolio}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Image
                                    source={require("./assets/icons/1x/portfolio.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 17,
                                        height: 17,
                                        tintColor: focused ? "#2150f5" : "gray",
                                    }}
                                />
                                <Text
                                    style={{
                                        color: focused ? "#2150f5" : "gray",
                                        fontSize: 10,
                                    }}
                                >
                                    portfolio
                                </Text>
                            </View>
                        ),
                    }}
                />

                <Tab.Screen
                    name="Transfer"
                    component={Transfer}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Image
                                    source={require("./assets/icons/1x/transfer.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 45,
                                        height: 45,
                                        tintColor: focused
                                            ? "rgb(25,25,200)"
                                            : "#2150f5",
                                    }}
                                />
                            </View>
                        ),
                    }}
                />

                <Tab.Screen
                    name="Prices"
                    component={Prices}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Image
                                    source={require("./assets/icons/1x/prices.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 17,
                                        height: 17,
                                        tintColor: focused ? "#2150f5" : "gray",
                                    }}
                                />
                                <Text
                                    style={{
                                        color: focused ? "#2150f5" : "gray",
                                        fontSize: 10,
                                    }}
                                >
                                    Prices
                                </Text>
                            </View>
                        ),
                    }}
                />

                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Image
                                    source={require("./assets/icons/1x/settings.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 17,
                                        height: 17,
                                        tintColor: focused ? "#2150f5" : "gray",
                                    }}
                                />
                                <Text
                                    style={{
                                        color: focused ? "#2150f5" : "gray",
                                        fontSize: 10,
                                    }}
                                >
                                    Settings
                                </Text>
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
