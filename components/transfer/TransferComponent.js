import React from "react";
import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";

export default function TransferComponent() {
    return (
        <View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                    style={{ fontSize: 24, fontWeight: "bold", paddingTop: 10 }}
                >
                    Transfer
                </Text>
            </View>

            {/* Buy */}
            <View style={{ flexDirection: "column", paddingTop: 30 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <Icon
                        name="plus"
                        type="font-awesome"
                        style={{
                            fontSize: 18,
                            fontWeight: "700",
                            letterSpacing: 0.5,

                            letterSpacing: 0.5,
                            marginBottom: 30,
                            marginRight: 30,
                        }}
                    />
                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "700",
                                letterSpacing: 0.5,
                            }}
                        >
                            Buy
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "300",
                                letterSpacing: 0.5,
                                marginBottom: 30,
                            }}
                        >
                            Buy crypto with cash
                        </Text>
                    </View>
                </View>
            </View>

            {/* Sell */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Icon
                    name="minus"
                    type="font-awesome"
                    style={{
                        fontSize: 18,
                        fontWeight: "700",
                        letterSpacing: 0.5,

                        letterSpacing: 0.5,
                        marginBottom: 30,
                        marginRight: 30,
                    }}
                />
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "700",
                            letterSpacing: 0.5,
                        }}
                    >
                        Sell
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "300",
                            letterSpacing: 0.5,
                            marginBottom: 30,
                        }}
                    >
                        Sell crypto for cash
                    </Text>
                </View>
            </View>

            {/* Convert */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Icon
                    name="refresh"
                    type="font-awesome"
                    style={{
                        fontSize: 18,
                        fontWeight: "700",
                        letterSpacing: 0.5,

                        letterSpacing: 0.5,
                        marginBottom: 30,
                        marginRight: 30,
                    }}
                />
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "700",
                            letterSpacing: 0.5,
                        }}
                    >
                        Convert
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "300",
                            letterSpacing: 0.5,
                            marginBottom: 30,
                        }}
                    >
                        Convert one crypto to another
                    </Text>
                </View>
            </View>

            {/* Send */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Icon
                    name="arrow-up"
                    type="font-awesome"
                    style={{
                        fontSize: 18,
                        fontWeight: "700",
                        letterSpacing: 0.5,

                        letterSpacing: 0.5,
                        marginBottom: 30,
                        marginRight: 30,
                    }}
                />
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "700",
                            letterSpacing: 0.5,
                        }}
                    >
                        Send
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "300",
                            letterSpacing: 0.5,
                            marginBottom: 30,
                        }}
                    >
                        Send crypto to another wallet
                    </Text>
                </View>
            </View>

            {/* Receive */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Icon
                    name="arrow-down"
                    type="font-awesome"
                    style={{
                        fontSize: 18,
                        fontWeight: "700",
                        letterSpacing: 0.5,

                        letterSpacing: 0.5,
                        marginBottom: 30,
                        marginRight: 30,
                    }}
                />
                <View
                    style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "700",
                            letterSpacing: 0.5,
                        }}
                    >
                        Receive
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "300",
                            letterSpacing: 0.5,
                            marginBottom: 30,
                        }}
                    >
                        Receive crypto from another wallet
                    </Text>
                </View>
            </View>
        </View>
    );
}
