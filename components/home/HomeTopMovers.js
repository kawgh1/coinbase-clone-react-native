import axios from "axios";
import React, { useEffect, useState } from "react";
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

    const [topMoverCoins, setTopMoverCoins] = useState([]);

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

    // get the coingecko API coin data objects for the coins we want (in our TopMovers array)
    // and pull those data objects into a new array that we will draw data from to display in topMovers

    for (let j = 0; j < data.length; j++) {
        // if (staticCoins[i].name === data[j].name) {
        topMoverCoins.push(data[j]);
        // }
    }

    const sortedArray = topMoverCoins.sort((a, b) => {
        return (
            b.market_data.price_change_percentage_24h -
            a.market_data.price_change_percentage_24h
        );
    });

    const top10MoversArray = sortedArray.slice(0, 10);

    console.log("top 10 movers array", top10MoversArray);
    // console.log("topMover coins array ", topMoverCoins);

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
                {top10MoversArray.map((coin) => (
                    <View key={coin.id}>
                        {/* Mover Container */}
                        <View
                            style={{
                                width: 150,
                                height: 150,
                                borderWidth: 0.5,
                                borderColor: "#ddd",
                                borderRadius: 10,
                                marginRight: 15,
                                paddingHorizontal: 15,
                                paddingVertical: 15,
                            }}
                        >
                            {/* Icon and Symbol */}
                            <View
                                style={{
                                    paddingRight: 10,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Image
                                    source={{ uri: coin.image.large }}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: 50,
                                        marginRight: 10,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: "700",
                                    }}
                                >
                                    {coin.symbol.toUpperCase()}
                                </Text>
                            </View>
                            {/* Coin name */}
                            <View
                                style={{
                                    marginTop: 5,
                                    paddingRight: 10,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    textAlign: "right",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontWeight: "700",
                                    }}
                                >
                                    {coin.name}
                                </Text>
                            </View>

                            {/* Coin price */}
                            <View
                                style={{
                                    marginTop: 5,
                                    paddingRight: 12,
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
                                    {/* Conditional rendering of prices */}$
                                    {coin.market_data.current_price.usd > 0.01
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
                            </View>

                            {/* Coin percent increase last 24 hours */}
                            <View
                                style={{
                                    paddingTop: 5,
                                    paddingRight: 10,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                }}
                            >
                                {/* Price Change % */}
                                <Text
                                    style={
                                        coin.market_data
                                            .price_change_percentage_24h >= 0
                                            ? {
                                                  fontSize: 16,
                                                  fontWeight: "700",
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
                                        .price_change_percentage_24h >= 0
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
            </ScrollView>
        </View>
    );
};

export default HomeTopMovers;
