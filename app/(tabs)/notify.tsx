import { StyleSheet, View, Text } from "react-native";

export default function Notify() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thông báo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
