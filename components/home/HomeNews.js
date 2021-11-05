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
                        paddingLeft: 20,
                    }}
                >
                    News
                </Text>
                <View style={{ padding: 0, margin: 0, maxWidth: 500 }}>
                    <Image
                        source={require("../../assets/icons/1x/news.png")}
                        resizeMode="contain"
                        style={{
                            width: 360,
                            height: 480,
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default HomeRewards;
