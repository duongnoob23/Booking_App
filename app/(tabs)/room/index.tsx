import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";

export default function RoomIndex() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button title="Next" onPress={() => router.navigate({ pathname: "/room/next", params: { id: "123", name: "John Doe" } })} />
      <Button title="Search" onPress={() => router.navigate({ pathname: "/room/search", params: { id: "123", name: "John Doe" } })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
