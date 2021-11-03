import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from "react-native";
import axios from "axios";

const Prices = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("All Assets");
    const [marketChangePercent, setMarketChangePercent] = useState(0);

    const positiveCoinArray = [];
    const negativeCoinArray = [];

    useEffect(() => {
        axios
            .get(`https://api.coingecko.com/api/v3/coins/`)
            .then(function (response) {
                // console.log(response);
                setData(response.data);
                // console.log("data is ", data);

                // This is my proxy for marketChange Percent
                // it equals the 24hr % change for Bitcoin plus 24hr % change for Ethereum
                // that sum divided by 2
                setMarketChangePercent(
                    (
                        (response.data[0].market_data
                            .market_cap_change_percentage_24h +
                            Number(
                                response.data[1].market_data
                                    .market_cap_change_percentage_24h
                            )) /
                        2
                    ).toFixed(2)
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    // This is my proxy for marketChange Percent
    // it equals the 24hr % change for Bitcoin plus 24hr % change for Ethereum
    // that sum divided by 2

    // const marketChangePercentConst = Number(
    //     (Object(Object(data[0]).market_data).market_cap_change_percentage_24h +
    //         Number(
    //             Object(Object(data[1]).market_data)
    //                 .market_cap_change_percentage_24h
    //         )) /
    //         2
    // ).toFixed(2);

    // console.log("market change ", marketChangePercent);

    const listTab = [
        {
            status: "All Assets",
            allCoinArray: data,
        },
        {
            status: "Gainers",
            positiveCoinArray: positiveCoinArray,
        },
        {
            status: "Losers",
            negativeCoinArray: negativeCoinArray,
        },
    ];

    const setStatusFilter = (status) => {
        setStatus(status);
    };

    // used for "Market is up 2.34%" view
    /* console.log(
        "bitcoin market cap % change is",
        Object(Object(data[0]).market_data).market_cap_change_percentage_24h
    ); */

    for (let j = 0; j < data.length; j++) {
        if (data[j].market_data.price_change_percentage_24h >= 0) {
            positiveCoinArray.push(data[j]);
        } else {
            negativeCoinArray.push(data[j]);
        }
    }

    // console.log("positive coins", positiveCoinArray);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View
                    style={{
                        paddingHorizontal: 20,
                        marginBottom: 90,
                    }}
                >
                    <View style={{ paddingTop: 50 }}>
                        <Text
                            style={{
                                color: "#090c0d",
                                fontSize: 29,
                                fontWeight: "bold",
                            }}
                        >
                            Market is{" "}
                            {marketChangePercent >= 0 ? "up " : "down "}
                            <Text
                                style={
                                    marketChangePercent
                                        ? marketChangePercent >= 0
                                            ? {
                                                  fontSize: 29,
                                                  fontWeight: "600",
                                                  color: "green",
                                              }
                                            : {
                                                  fontSize: 29,
                                                  fontWeight: "600",
                                                  color: "white",
                                              }
                                        : { color: "white" }
                                }
                            >
                                {marketChangePercent
                                    ? marketChangePercent + "%"
                                    : ""}
                            </Text>
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={{
                                    color: "#5d616f",
                                    fontWeight: "500",
                                    fontSize: 14,
                                    paddingLeft: 2,
                                }}
                            >
                                in the past 24 hours
                            </Text>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                    source={require("../assets/icons/1x/search.png")}
                                    style={{ width: 20, height: 20 }}
                                />
                            </View>
                        </View>
                    </View>
                    {/* End Header */}

                    {/* Display Coins */}
                    <View style={{ paddingTop: 20 }}>
                        <View style={styles.listTab}>
                            {listTab.map((e) => (
                                <TouchableOpacity
                                    key={e.status}
                                    style={[
                                        styles.btntab,
                                        status === e.status &&
                                            styles.btnTabActive,
                                    ]}
                                    onPress={() => setStatusFilter(e.status)}
                                >
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {e.status}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {(status === "All Assets"
                        ? data
                        : status === "Gainers"
                        ? positiveCoinArray
                        : negativeCoinArray
                    ).map((coin) => (
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
                                        {/* Conditional rendering of prices */}$
                                        {coin.market_data.current_price.usd >
                                        0.01
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
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    listTab: {
        backgroundColor: "white",
        flexDirection: "row",
    },
    btntab: {
        width: Dimensions.get("window").width / 4,
        flexDirection: "row",
        padding: 10,
        justifyContent: "center",
        borderRadius: 20,
    },
    btnTabActive: {
        backgroundColor: "#f3f7ff",
    },
});

export default Prices;
