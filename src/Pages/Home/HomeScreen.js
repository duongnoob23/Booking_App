// src/screens/HomeScreen.js
import React from "react";
import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default HomeScreen;
