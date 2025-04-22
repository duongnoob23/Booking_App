import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationsScreen from "../Pages/Notification/NotificationScreen";
const Stack = createNativeStackNavigator();
import { TouchableOpacity, Text } from "react-native";
const NotificationStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Notification"
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default NotificationStackNavigator;
