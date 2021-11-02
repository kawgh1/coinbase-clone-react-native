import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import axios from "axios";

const Portfolio = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.coingecko.com/api/v3/coins/`)
            .then(function (response) {
                // console.log(response);
                setData(response.data);
                console.log("data is ", data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView style={{ flex: 1 }}>
                <View
                    style={{
                        paddingTop: 50,
                        paddingHorizontal: 20,
                        marginBottom: 90,
                    }}
                >
                    <Text
                        style={{
                            color: "#5d616f",
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        Portfolio Balance
                    </Text>
                    <Text
                        style={{
                            color: "#090C0D",
                            fontSize: 29,
                            fontWeight: "bold",
                            paddingTop: 5,
                        }}
                    >
                        $16,758.24
                    </Text>
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
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Portfolio;
