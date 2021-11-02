import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Stylesheet,
    Image,
    StyleSheet,
} from "react-native";
import HomeWatchList from "./HomeWatchList";

export default function Home() {
    const styles = StyleSheet.create({
        appButtonContainer: {
            backgroundColor: "#2150f5",
            borderRadius: 8,
            paddingVertical: 17,
            paddingHorizontal: 90,
        },
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView style={{ flex: 1 }}>
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: 50,
                    }}
                >
                    <Image
                        source={require("../assets/icons/1x/wallet.jpeg")}
                        style={{ width: 220, height: 220 }}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 700 }}>
                        Welcome to Coinbase
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#5d616d",
                            paddingTop: 2,
                        }}
                    >
                        Invest in the future today!
                    </Text>
                    <View style={{ paddingTop: 30 }}>
                        <TouchableOpacity style={styles.appButtonContainer}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: "white",
                                    fontWeight: "600",
                                    alignSelf: "center",
                                }}
                            >
                                Fund Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                    <HomeWatchList />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
