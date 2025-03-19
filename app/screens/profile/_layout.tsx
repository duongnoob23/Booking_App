import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack>
            <Stack.Screen name="help" options={{ title: "Help", headerShown: false }} />
            <Stack.Screen name="notification" options={{ title: "Notification", headerShown: false }} />
        </Stack>
    );
}
