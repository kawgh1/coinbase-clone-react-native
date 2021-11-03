import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsAccount from "../components/settings/SettingsAccount";
import SettingsSecurity from "../components/settings/SettingsSecurity";
import TransferComponent from "../components/transfer/TransferComponent";

export default function Transfer() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        paddingHorizontal: 20,

                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View style={{ paddingTop: 30 }}>
                        <TransferComponent />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
