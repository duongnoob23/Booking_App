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
        options={{
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Thông báo",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DiscountHistory")}
              style={{ marginRight: 10 }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "400",
                  color: "#007BFF",
                  // backgroundColor: "red",
                }}
              >
                Xóa
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationStackNavigator;
