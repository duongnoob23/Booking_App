import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  navigation,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../Redux/hook";
import { fetchListPromotion } from "../../Redux/Slice/promotionSlice";
import { formatPrice } from "../../Utils/formarPrice";
import {
  fetchBookingRoom,
  updateBookingPayload,
} from "../../Redux/Slice/hotelSlice";

import cloneDeep from "lodash/cloneDeep";
const Discount = ({ navigation, route }) => {
  const prePage = route?.params?.prePage || "";
  console.log(">>> prePage", route.params);
  console.log(">>> prePage", prePage);
  const { listPromotion, loadingPromotion } = useAppSelector(
    (state) => state.promotion
  );
  const { bookingPayload } = useAppSelector((state) => state.hotel);
  const { accessToken, isLoggedIn } = useAppSelector((state) => state.auth);
  console.log("21>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", bookingPayload);
  const dispatch = useAppDispatch();

  console.log("24 DS>>>>>>>>>>>>>>>>>>>>>>>>>>>>", listPromotion);
  // const test = [
  //   {
  //     code: "SUMMER25",
  //     description: "Giảm giá 25% với những hóa đơn trên 2 triệu đồng.",
  //     discountValue: 25,
  //     expirationDate: "30-04-2025 17:40:08",
  //     id: 1,
  //     minBookingAmount: 200000,
  //     validFromDate: "04-04-2025 17:40:54",
  //   },
  //   {
  //     code: "WELCOME100",
  //     description: "Giảm ngay 100.000đ với hóa đơn đầu tiên",
  //     discountValue: 100000,
  //     expirationDate: "27-04-2025 17:42:36",
  //     id: 2,
  //     minBookingAmount: 0,
  //     validFromDate: "04-04-2025 17:43:01",
  //   },
  // ];

  const handleFetchListPromotion = () => {
    const code = "";
    const totalPrice = 1900000.0;
    dispatch(fetchListPromotion({ code, totalPrice }));
  };
  const discountItems = listPromotion;

  const handleToDiscountHistory = () => {
    navigation.navigate("DiscountHistory");
  };

  const handleChooseSale = (item) => {
    console.log(prePage);
    if (prePage === "OrderConfirm") {
      const bookingPayload_ = cloneDeep(bookingPayload);
      bookingPayload_.couponId = item?.id;
      dispatch(updateBookingPayload(bookingPayload_));
      dispatch(fetchBookingRoom());
      navigation.navigate("OrderConfirm");
      console.log(item);
    } else {
      console.log(item);
    }
  };

  console.log("accessToken isLoggedIn", accessToken, isLoggedIn);

  if (!accessToken && !isLoggedIn) {
    return (
      <View style={styles.RequireLogin}>
        <Text style={styles.RequireLoginText}>
          Bạn cần đăng nhập để xem mã giảm giá
        </Text>
      </View>
    );
  }

  console.log(discountItems);
  if (accessToken && isLoggedIn && !discountItems) {
    return (
      <View style={styles.RequireLogin}>
        <Text style={styles.RequireLoginText}>Bạn chưa có mã giảm giá nào</Text>
      </View>
    );
  }

  if (loadingPromotion) {
    return (
      <View>
        <Text>loading....</Text>
      </View>
    );
  }

  return (
    <View style={styles.discountCodes}>
      {/* Header */}
      {/* <View style={styles.discountCodes__header}>
        <TouchableOpacity
          style={styles.discountButton}
          onPress={() => handleFetchListPromotion()}
        >
          <Text style={styles.discountCodes__headerHistory}>Fetch</Text>
        </TouchableOpacity>
      </View> */}

      {/* Danh sách mã giảm giá */}
      {/* <TouchableOpacity onPress={() => handleFetchListPromotion()}>
        <Text>Fetch</Text>
      </TouchableOpacity> */}
      {discountItems.length > 0 ? (
        discountItems.map((item) => (
          <TouchableOpacity
            key={item?.id}
            style={styles.discountCodes__item}
            onPress={() => handleChooseSale(item)}
          >
            <Ionicons
              name="gift-outline"
              size={45}
              color="#007BFF"
              style={styles.discountCodes__itemIcon}
            />
            <View style={styles.discountCodes__itemContent}>
              <Text style={styles.discountCodes__itemTitle}>
                {item?.description}
              </Text>
              <Text style={styles.discountCodes__itemCode}>{item?.code}</Text>

              <Text style={styles.discountCodes__itemExpiry}>
                Số tiền đặt phòng thấp nhất{" "}
                {formatPrice(item?.minBookingAmount)}
              </Text>
              <Text style={styles.discountCodes__itemExpiry}>
                Hạn sử dụng: {item?.expirationDate}
              </Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.RequireLogin}>
          <Text style={styles.RequireLoginText}>
            Bạn chưa có mã giảm giá nào
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  discountCodes: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  discountCodes__header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  discountCodes__headerBack: {},
  discountCodes__headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  discountButton: {
    backgroundColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  discountCodes__headerHistory: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    textAlign: "Center",
  },
  discountCodes__item: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingVertical: 10,
  },
  discountCodes__itemIcon: {
    marginRight: 10,
  },
  discountCodes__itemContent: {
    flex: 1,
  },
  discountCodes__itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 5,
  },
  discountCodes__itemCode: {
    fontSize: 14,
    color: "#007BFF",
    marginBottom: 5,
  },
  discountCodes__itemExpiry: {
    fontSize: 14,
    color: "#888888",
  },
});

export default Discount;
