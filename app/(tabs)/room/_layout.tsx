import { Slot, Stack } from "expo-router";

export default function RoomLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home", headerShown: true }} />
      <Stack.Screen name="next" options={{ title: "Next", headerShown: true }} />
      <Stack.Screen name="search" options={{ title: "Search", headerShown: true }} />
      <Stack.Screen name="map" options={{ title: "Map", headerShown: true }} />
    </Stack>
  )
}
