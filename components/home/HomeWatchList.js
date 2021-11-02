import React, { useState } from "react";
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

export default function HomeWatchList() {
    // display commas when number is over 1,000
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // static coin data
    const [coins, setCoins] = useState([
        {
            id: 1,
            name: "Bitcoin",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/btc.png",
            nick: "BTC",
            price: 63421.18,
            drop: 3.89,
        },
        {
            id: 2,
            name: "Ethereum",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/eth.png",
            nick: "ETH",
            price: 4500.55,
            drop: 4.62,
        },
        {
            id: 3,
            name: "Ripple",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xrp.png",
            nick: "XRP",
            price: 1.12,
            drop: 12.1,
        },
        {
            id: 4,
            name: "Bitcoin Cash",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/bch.png",
            nick: "BCH",
            price: 603.85,
            drop: -3.45,
        },
        {
            id: 5,
            name: "Litecoin",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/ltc.png",
            nick: "LTC",
            price: 203.35,
            drop: -1.17,
        },
        {
            id: 6,
            name: "Stellar Lumens",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xlm.png",
            nick: "XLM",
            price: 0.37,
            drop: -2.36,
        },
    ]);

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
                    Watchlist
                </Text>
            </View>
            <View style={{ paddingTop: 10 }}>
                <View
                    style={{
                        height: 600,
                        width: "100%",
                        borderWidth: 0.5,
                        borderRadius: 10,
                        borderColor: "#ddd",
                    }}
                >
                    <View>
                        {coins.map((coin) => (
                            <View key={coin.id}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        paddingTop: 35,
                                        paddingHorizontal: 25,
                                        justifyContent: "space-between",
                                        paddingBottom: 20,
                                    }}
                                >
                                    <View>
                                        <Image
                                            source={{ uri: coin.icon }}
                                            style={{ width: 35, height: 35 }}
                                        />
                                    </View>
                                    <View style={{ paddingLeft: 15, flex: 1 }}>
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: "600",
                                            }}
                                        >
                                            {coin.name}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                fontWeight: "600",
                                                color: "#5d616d",
                                            }}
                                        >
                                            {coin.nick}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            paddingLeft: 15,
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "flex-end",
                                            minWidth: 100,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: "600",
                                            }}
                                        >
                                            ${numberWithCommas(coin.price)}
                                        </Text>
                                        <Text
                                            style={
                                                coin.drop >= 0
                                                    ? {
                                                          fontSize: 14,
                                                          fontWeight: "600",
                                                          color: "green",
                                                      }
                                                    : {
                                                          fontSize: 14,
                                                          fontWeight: "600",
                                                          color: "red",
                                                      }
                                            }
                                        >
                                            {coin.drop >= 0
                                                ? `+${coin.drop}`
                                                : coin.drop}
                                            %
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
}
