import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const MapScreen = ({ route }) => {

    console.log(route.params.location ? route.params.location : "Hell")
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/MapNear.png")} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
    },
    image: {
        width: width * 0.9,
        height: height * 0.6,
        borderRadius: 15,
        resizeMode: "contain",
    },
});

export default MapScreen;
