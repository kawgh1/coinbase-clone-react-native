import axios from "axios";
import React, { useEffect, useState } from "react";
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

    const [watchlistCoins, setWatchlistCoins] = useState([]);
    // coingecko api call
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(
                `https://api.coingecko.com/api/v3/coins/`
            );
            // console.log("request.data is ", request.data);
            setData(request.data);
        }
        fetchData();
    }, []);

    // console.log("data is ", data);

    // static coin data
    const [staticCoins, setStaticCoins] = useState([
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
            name: "Solana",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xrp.png",
            nick: "SOL",
            price: 1.12,
            drop: 12.1,
        },
        {
            id: 4,
            name: "Shiba Inu",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/bch.png",
            nick: "SHIB",
            price: 603.85,
            drop: -3.45,
        },
        {
            id: 5,
            name: "Chainlink",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/ltc.png",
            nick: "LINK",
            price: 203.35,
            drop: -1.17,
        },
        {
            id: 6,
            name: "Cardano",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xlm.png",
            nick: "CAD",
            price: 0.37,
            drop: -2.36,
        },
        {
            id: 6,
            name: "AAVE",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xlm.png",
            nick: "AAVE",
            price: 0.37,
            drop: -2.36,
        },
        {
            id: 6,
            name: "Decentraland",
            icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xlm.png",
            nick: "MANA",
            price: 0.37,
            drop: -2.36,
        },
    ]);

    // var intersection = data.filter(function (e) {
    //     return staticCoins.indexOf(e) > -1;
    // });

    // for (let item in data) console.log(item);

    // const bitcoin = data[0];

    // console.log("data 0 is ", bitcoin);

    // console.log("intersection ", intersection);

    // const watchlist = data.map((coin) => coin.name);

    // // for (let i = 1; i < data.length; i++) console.log(watchlist[i]);

    // const finalArray = [];

    // get the coingecko API coin data objects for the coins we want (in our static Coins array)
    // and pull those data objects into a new array that we will draw data from to display in watchlist
    for (let i = 0; i < staticCoins.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (staticCoins[i].name === data[j].name) {
                watchlistCoins.push(data[j]);
            }
        }
    }

    console.log("watchlist coins array ", watchlistCoins);

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
                        height: "fit-content",
                        width: "100%",
                        borderWidth: 0.5,
                        borderRadius: 10,
                        borderColor: "#ddd",
                    }}
                >
                    <View>
                        {watchlistCoins.map((coin) => (
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
                                            source={{ uri: coin.image.large }}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: 50,
                                                borderWidth: 0.5,
                                                borderColor: "#e2e2e2",
                                            }}
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
                                                color: "#444",
                                            }}
                                        >
                                            {coin.symbol.toUpperCase()}
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
                                        {/* Current Price */}
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: "600",
                                            }}
                                        >
                                            {/* ${numberWithCommas(coin.price)} */}
                                            $
                                            {coin.market_data.current_price.usd
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{8})+(?!\d))/g,
                                                    ","
                                                )}
                                            {/* {Intl.NumberFormat("en-US").format(
                                                coin.market_data.current_price
                                                    .usd
                                            )} */}
                                        </Text>
                                        {/* Price Change % */}
                                        <Text
                                            style={
                                                coin.market_data
                                                    .price_change_percentage_24h >=
                                                0
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
                                            {coin.market_data
                                                .price_change_percentage_24h >=
                                            0
                                                ? `+${coin.market_data.price_change_percentage_24h.toFixed(
                                                      2
                                                  )}`
                                                : coin.market_data.price_change_percentage_24h.toFixed(
                                                      2
                                                  )}
                                            %
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            {/* <Text>Watchilst</Text>
            {data.map((coin) => (
                <View key={coin.id}>
                    <View
                        style={{
                            paddingTop: 25,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <View>
                            <Image
                                source={{ uri: coin.image.large }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 50,
                                    borderWidth: 0.5,
                                    borderColor: "#e2e2e2",
                                }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingLeft: 15 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "600",
                                }}
                            >
                                {coin.name}
                            </Text>
                        </View>
                        <View style={{ paddingLeft: 15 }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "300",
                                }}
                            >
                                {coin.market_data.current_price.usd}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: "300",
                                    color: "#5d616d",
                                }}
                            >
                                0 {coin.symbol}
                            </Text>
                        </View>
                    </View>
                </View>
            ))} */}
        </View>
    );
}
