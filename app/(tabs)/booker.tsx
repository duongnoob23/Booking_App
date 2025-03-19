import { StyleSheet, View, Text } from "react-native";

export default function Booker() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đã đặt</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
