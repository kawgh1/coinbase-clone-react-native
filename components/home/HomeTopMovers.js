import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";

const HomeTopMovers = () => {
    // display commas when number is over 1,000
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

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
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                    paddingTop: 10,
                }}
            >
                Top Movers
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingTop: 20 }}
            >
                {coins.map((coin) => (
                    <View key={coin.id}>
                        <View
                            style={{
                                width: 150,
                                height: 150,
                                borderWidth: 0.5,
                                borderColor: "#ddd",
                                borderRadius: 10,
                                marginRight: 15,
                                paddingHorizontal: 15,
                            }}
                        >
                            <View
                                style={{
                                    marginTop: 15,
                                    paddingRight: 10,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Image
                                    source={{ uri: coin.icon }}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        marginRight: 10,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: "700",
                                    }}
                                >
                                    {coin.nick}
                                </Text>
                            </View>

                            <View
                                style={{
                                    marginTop: 15,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: "600",
                                        paddingLeft: 6,
                                        color: "#444",
                                    }}
                                >
                                    ${numberWithCommas(coin.price)}
                                </Text>
                            </View>

                            <View
                                style={{
                                    paddingTop: 15,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Text
                                    style={
                                        coin.drop >= 0
                                            ? {
                                                  fontSize: 15,
                                                  fontWeight: "700",
                                                  paddingLeft: 10,
                                                  color: "green",
                                              }
                                            : {
                                                  fontSize: 15,
                                                  fontWeight: "700",
                                                  paddingLeft: 10,
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
            </ScrollView>
        </View>
    );
};

export default HomeTopMovers;
