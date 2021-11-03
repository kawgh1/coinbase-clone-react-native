import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeRewards = () => {
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
                    Rewards
                </Text>
                <View style={{ paddingTop: 15, maxWidth: 500 }}>
                    <LinearGradient
                        colors={["#6c13d7", "#6c13d7"]}
                        style={{
                            borderRadius: 15,
                            border: "1px solid whitesmoke",
                            boxShadow: "2px 2px 4px rgb(0,0,0)",
                        }}
                        start={[0.1, 0.1]}
                        end={[0.9, 0.1]}
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
                                    fontSize: 15,
                                    color: "white",
                                    fontWeight: "500",
                                }}
                            >
                                Discover ways to earn crypto
                            </Text>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: "white",
                                    fontWeight: "600",
                                    paddingTop: 10,
                                }}
                            >
                                Start earning
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                    marginRight: 20,
                                }}
                            >
                                <Image
                                    source={require("../../assets/icons/1x/medal.jpeg")}
                                    resizeMode="contain"
                                    style={{
                                        width: 300,
                                        height: 150,
                                    }}
                                />
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </View>
    );
};

export default HomeRewards;
