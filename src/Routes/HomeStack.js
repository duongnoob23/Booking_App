import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Pages/Home/HomeScreen";
import DetailScreen from "../Pages/Detail/DetailScreen";
import HotelDetails from "../Pages/Hotels/HotelDetails";
import OrderFood from "../Pages/Foods/OrderFood";
import FoodDetails from "../Pages/Foods/FoodDetails";
import FoodCart from "../Pages/Foods/FoodCart";
import OrderPayment from "../Pages/Payment/OrderPayment";
import SuccessPayment from "../Pages/Payment/SuccessPayment";
import RateReviews from "../Pages/Reviews/RateReviews";
import RateDetails from "../Pages/Reviews/RateDetails";
import RateApp from "../Pages/Reviews/RateApp";
import ListHotelByLocation from "../Pages/Hotels/ListHotelByLocation";
import HotelRoomList from "../Pages/Hotels/HotelRoomList";
import InfoConfirmScreen from "../Pages/Hotels/InfoConfirmScreen";
import OrderConfirmScreen from "../Pages/Hotels/OrderConfirmScreen";
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        title: "Trang chủ ",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen
        name="HotelDetails"
        component={HotelDetails}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="OrderFood"
        component={OrderFood}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="FoodDetails"
        component={FoodDetails}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="FoodCart"
        component={FoodCart}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="OrderPayment"
        component={OrderPayment}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="SuccessPayment"
        component={SuccessPayment}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="RateReviews"
        component={RateReviews}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="RateDetails"
        component={RateDetails}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="RateApp"
        component={RateApp}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="ListHotelLocation"
        component={ListHotelByLocation}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="HotelRoomList"
        component={HotelRoomList}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="InfoConfirm"
        component={InfoConfirmScreen}
        options={{
          title: "Thông Tin",
          headerShown: true,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
      <Stack.Screen
        name="OrderConfirm"
        component={OrderConfirmScreen}
        options={{
          headerShown: false,
          tabBarVisible: false, // Ẩn thanh tab dưới cùng
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
