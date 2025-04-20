import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discount from "../Pages/Promotion/Discount";
import DiscountHistory from "../Pages/Promotion/DiscountHistory ";
import DiscountHistoryExpired from "../Pages/Promotion/DiscountHistoryExpired";
import DiscountHistoryUse from "../Pages/Promotion/DiscountHistoryUse";

import { TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();

const PromotionStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Discount"
        component={Discount}
        options={{
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Mã giảm giá ",
          // headerRight: () => (
          //   <TouchableOpacity
          //     onPress={() => navigation.navigate("DiscountHistory")}
          //     style={{ marginRight: 10 }}
          //   >
          //     <Text
          //       style={{
          //         fontSize: 20,
          //         fontWeight: "400",
          //         color: "#007BFF",
          //         // backgroundColor: "red",
          //       }}
          //     >
          //       Lịch sử
          //     </Text>
          //   </TouchableOpacity>
          // ),
        }}
      />
      <Stack.Screen
        name="DiscountHistory"
        component={DiscountHistory}
        options={{
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Lịch sử ",
        }}
      />
      <Stack.Screen
        name="DiscountHistoryUse"
        component={DiscountHistoryUse}
        options={{
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Lịch sử ",
        }}
      />
      <Stack.Screen
        name="DiscountHistoryExpired"
        component={DiscountHistoryExpired}
        options={{
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
          title: "Lịch sử ",
        }}
      />
    </Stack.Navigator>
  );
};

export default PromotionStackNavigator;
