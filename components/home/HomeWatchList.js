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
// Dummy Data
import { staticCoinsArray } from "../../StaticCoinsData";

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
    // console.log("static Coins array", staticCoinsArray);

    // this is my work for getting to the for loops at the end
    // its a mess, but some of it could be useful

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
    for (let i = 0; i < staticCoinsArray.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (staticCoinsArray[i].name === data[j].name) {
                watchlistCoins.push(data[j]);
            }
        }
    }

    // console.log("watchlist coins array ", watchlistCoins);

    /**
     * Number.prototype.format(n, x)
     *
     * @param integer n: length of decimal
     * @param integer x: length of sections
     */
    Number.prototype.format = function (n, x) {
        var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
        return this.toFixed(Math.max(0, ~~n)).replace(
            new RegExp(re, "g"),
            "$&,"
        );
    };

    // (1234).format(); // "1,234"
    // (12345).format(2); // "12,345.00"
    // (123456.7).format(3, 2); // "12,34,56.700"
    // (123456.789).format(2, 4); // "12,3456.79"

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
                                        paddingTop: 10,
                                        paddingHorizontal: 25,
                                        justifyContent: "space-between",
                                        paddingBottom: 10,
                                    }}
                                >
                                    <View>
                                        <Image
                                            source={{ uri: coin.image.large }}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: 50,
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
                                            {/* Conditional rendering of prices */}
                                            $
                                            {coin.market_data.current_price
                                                .usd > 0.01
                                                ? coin.market_data.current_price.usd
                                                      .toFixed(2)
                                                      .toString()
                                                      .replace(
                                                          /\B(?=(\d{3})+(?!\d))/g,
                                                          ","
                                                      )
                                                : coin.market_data.current_price.usd.format(
                                                      8,
                                                      3
                                                  )}
                                            {/* ${numberWithCommas(coin.price)} */}
                                            {/* Intl.NumberFormat(
                                                      "en-US"
                                                  ).format(
                                                      coin.market_data.current_price.usd
                                                  ) */}
                                            {/* {coin.market_data.current_price.usd
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )} */}
                                            {/* {coin.market_data.current_price.usd.format(
                                                6,
                                                3
                                            )} */}
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
