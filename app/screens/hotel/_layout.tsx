import { TouchableOpacity, Text } from 'react-native';
import { Share } from 'react-native';
import { Stack } from 'expo-router';

export default function LayoutRoomScreen() {
    return (
        <Stack>
            <Stack.Screen name="detail" options={({ route }: { route: any }) => ({
                title: route.params?.id ? `${route.params.id}` : "Room",
                headerShown: true,
                headerRight: () => (
                    <TouchableOpacity
                        onPress={async () => {
                            try {
                                await Share.share({
                                    message: `Check out this room: ${route.params?.id || 'Room'}`,
                                });
                            } catch (error) {
                                console.error(error);
                            }
                        }}
                        style={{ marginRight: 15 }}
                    >
                        <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>
                            Share
                        </Text>
                    </TouchableOpacity>
                ),
            })}
            />
            <Stack.Screen name='pay' options={{ title: "Pay", headerShown: true }}></Stack.Screen>
        </Stack>

    );
}
