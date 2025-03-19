import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";

export default function RoomIndex() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button title="Search" onPress={() => router.navigate("/room/search")} />
      <Button title="Index" onPress={() => router.navigate("/room")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
