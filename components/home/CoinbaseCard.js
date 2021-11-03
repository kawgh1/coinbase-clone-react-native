import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CoinbaseCard() {
    return (
        <View>
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "black",
                        paddingTop: 10,
                    }}
                >
                    Coinbase Card
                </Text>
                <View
                    style={{
                        paddingTop: 15,
                        maxWidth: 500,
                    }}
                >
                    <LinearGradient
                        colors={[
                            "rgba(128,218,235,0.7)",
                            "rgba(25,25,112,0.7)",
                        ]}
                        style={{
                            borderRadius: 15,
                            border: "1px solid whitesmoke",
                            boxShadow: "2px 2px 4px rgb(0,0,0)",
                        }}
                        start={[0.1, 0.1]}
                        end={[0.45, 1]}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <View
                                style={{
                                    height: 200,
                                    width: "auto",
                                    borderRadius: 10,
                                    paddingTop: 15,
                                    paddingLeft: 15,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: "white",
                                        fontWeight: "600",
                                    }}
                                >
                                    Join the waitlist
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: "white",
                                        fontWeight: "400",
                                        paddingTop: 10,
                                        width: 200,
                                    }}
                                >
                                    Get rewards when you spend crypto or US
                                    dollars with our Visa debit card
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                    marginRight: 5,
                                    marginTop: 20,
                                }}
                            >
                                <Image
                                    source={require("../../assets/icons/1x/coinbase-card.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 150,
                                        height: 170,
                                    }}
                                />
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </View>
    );
}
