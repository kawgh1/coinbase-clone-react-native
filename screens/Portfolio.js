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
// Dummy Data
import { staticCoinsArray } from "../StaticCoinsData";

const Portfolio = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.coingecko.com/api/v3/coins/`)
            .then(function (response) {
                // console.log(response);
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    /*  
        Then what’s the way to run a for loop inside JSX? 
        Well, we have to use callback approach. 
        Check this code – 
    */
    const runCallback = (cb) => {
        return cb();
    };

    // static coin data
    // console.log(staticCoinsArray);

    const portfolioArray = [];

    // get the coingecko API coin data objects for the coins we want (in our portfolioArray array)
    // and pull those data objects into a new array that we will draw data from to display in portfolioArray

    // also need to push the "quantity" for each coin from static Coin Array into portfolioArray for each coin held

    for (let i = 0; i < staticCoinsArray.length; i++) {
        for (let j = 0; j < data.length; j++) {
            // if the coins have the same name as our static Coin data and quantity is NOT 0
            if (
                staticCoinsArray[i].name === data[j].name &&
                staticCoinsArray[i].quantity !== 0
            ) {
                // add quantity of coin from Static Coin data to the data array object
                data[j].quantity = staticCoinsArray[i].quantity;
                // push that updated data array object into portfolio array
                portfolioArray.push(data[j]);
                // portfolio array now has coin quantity that our static user holds
            }
        }
    }

    const portfolioBalanceArray = [];

    // get portfolio balance
    for (let i = 0; i < portfolioArray.length; i++) {
        for (let j = 0; j < staticCoinsArray.length; j++) {
            if (portfolioArray[i].name === staticCoinsArray[j].name) {
                portfolioBalanceArray.push(
                    portfolioArray[i].market_data.current_price.usd *
                        staticCoinsArray[j].quantity
                );
            }
        }
    }
    let finalBalance = 0;

    // Calculation the sum of the (price * quantity) for each crypto in portfolioBalanceArray using forEach
    portfolioBalanceArray.forEach((x) => {
        finalBalance += x;
    });

    console.log("final balance is ", finalBalance);

    console.log("portfolio balance array", portfolioBalanceArray);
    // console.log("data is ", data);

    console.log("portfolio array is ", portfolioArray);
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
                            color: "#333",
                            fontSize: 18,
                            fontWeight: "600",
                        }}
                    >
                        Portfolio Balance
                    </Text>
                    <Text
                        style={{
                            color: "#222",
                            fontSize: 29,
                            fontWeight: "bold",
                            paddingTop: 5,
                        }}
                    >
                        $
                        {finalBalance
                            .toFixed(2)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Text>
                    {portfolioArray.map((coin) => (
                        <View key={coin.id}>
                            <View
                                style={{
                                    paddingTop: 25,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    height: "fit-content",
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
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: "600",
                                            marginLeft: 2,
                                            color: "#444",
                                        }}
                                    >
                                        {coin.quantity}&nbsp;
                                        {coin.symbol.toUpperCase()}
                                    </Text>
                                </View>
                                <View style={{ paddingLeft: 15 }}>
                                    <Text
                                        style={{
                                            fontSize: 17,
                                            fontWeight: "600",
                                        }}
                                    >
                                        $
                                        {(
                                            coin.quantity *
                                            coin.market_data.current_price.usd
                                        )
                                            .toFixed(2)
                                            .toString()
                                            .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ","
                                            )}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: "300",
                                            color: "#5d616d",
                                        }}
                                    >
                                        {coin.market_data.current_price.usd}
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
