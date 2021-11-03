import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import SwitchToggle from "react-native-switch-toggle";

const SettingsSecurity = () => {
    const [face, setFace] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    return (
        <View style={{ marginBottom: 90 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 10 }}>
                Security
            </Text>
            <View style={{ paddingTop: 30, flexDirection: "column" }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 40,
                    }}
                >
                    <Text
                        style={{
                            flexWrap: "wrap",
                            fontSize: 17,
                            letterSpacing: 0.5,
                            fontWeight: "300",
                        }}
                    >
                        Require PIN / Face ID
                    </Text>
                    <SwitchToggle
                        switchOn={face}
                        backgroundColorOn="#2150f5"
                        backgroundColorOff="#ddd"
                        size="medium"
                        onPress={(switchOn) => {
                            if (!face) {
                                setFace(true);
                            } else {
                                setFace(false);
                            }
                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 40,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "300",
                            letterSpacing: 0.5,
                            color: !face ? "#ddd" : "black",
                        }}
                    >
                        PIN / Face ID Settings
                    </Text>
                    <Image
                        source={require("../../assets/icons/1x/arrow.jpg")}
                        style={{ width: 10, height: 10 }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 40,
                    }}
                >
                    <Text
                        style={{
                            flexWrap: "wrap",
                            fontSize: 17,
                            letterSpacing: 0.5,
                            fontWeight: "300",
                        }}
                    >
                        Privacy mode
                    </Text>

                    <SwitchToggle
                        switchOn={privacy}
                        backgroundColorOn="#2150f5"
                        backgroundColorOff="#ddd"
                        size="medium"
                        onPress={(switchOn) => {
                            if (!privacy) {
                                setPrivacy(true);
                            } else {
                                setPrivacy(false);
                            }
                        }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 40,
                    }}
                >
                    <Text
                        style={{
                            flexWrap: "wrap",
                            fontSize: 17,
                            fontWeight: "300",
                            letterSpacing: 0.5,
                        }}
                    >
                        Support
                    </Text>
                    <Image
                        source={require("../../assets/icons/1x/arrow.jpg")}
                        style={{ width: 10, height: 10 }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity style={styles.appButtonContainer}>
                        <Text style={styles.appButtonText}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appButtonContainer: {
        width: "100%",
        borderWidth: 0.5,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingVertical: 17,
        paddingHorizontal: 100,
    },
    appButtonText: {
        fontSize: 16,
        color: "crimson",
        fontWeight: "600",
        alignSelf: "center",
    },
});

export default SettingsSecurity;
