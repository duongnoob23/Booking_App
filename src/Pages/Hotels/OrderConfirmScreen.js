import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Alert,
  Button,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import Ionicons from "react-native-vector-icons/Ionicons";
import { WebView } from "react-native-webview";
import * as Linking from "expo-linking";
import getServiceIcon from "../../Components/Icon/getServiceIcon";
import { fetchBookingRoom } from "../../Redux/Slice/hotelSlice";
import SkeletonOrderConfirm from "../../Components/Skeleton/Hotels/SkeletonOrderConfirm";
import { formatPrice } from "../../Utils/formarPrice";
import { fetchListPromotion } from "../../Redux/Slice/promotionSlice";
import {
  fetchPaymentOrder,
  resetPaymentData,
  updateCallPayment,
} from "../../Redux/Slice/paymentSlice";

const OrderConfirmScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);

  const [paymentMethod, setPaymentMethod] = useState("ZaloPay");
  const [showWebView, setShowWebView] = useState(false);

  const { userInfor, inforUserChange } = useAppSelector((state) => state.auth);
  const { serviceList } = useAppSelector((state) => state.service);
  const {
    bookingData,
    bookingPayload,
    listUniqueIdBookingRoom,
    loadingBookingRoom,
    roomNumberFake,
  } = useAppSelector((state) => state.hotel);
  const { paymentData, loadingPayment, error } = useAppSelector(
    (state) => state.payment
  );

  const dispatch = useAppDispatch();
  const listRoom = bookingData?.roomBookedList;

  useEffect(() => {
    dispatch(fetchBookingRoom(bookingPayload));
  }, [bookingPayload?.roomRequestList, dispatch]);

  const getUniqueServiceTypes = (serviceSelect) => {
    const serviceTypes = new Set(
      serviceSelect?.map((service) => service.serviceType) || []
    );
    return Array.from(serviceTypes);
  };

  const handleToOrderFood = () => {
    navigation.navigate("OrderFood");
  };

  const handleToSale = () => {
    const totalPrice =
      +bookingData?.totalPriceRoom + +bookingData?.totalPriceService;
    const code = "";
    dispatch(fetchListPromotion({ code, totalPrice }));
    navigation.navigate("Discount", { prePage: "OrderConfirm" });
  };

  const renderListRoom = (item) => (
    <View style={styles.roomWrapper}>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Tên Phòng</Text>
        <Text style={styles.roomValue}>{item?.roomName}</Text>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Loại phòng</Text>
        <Text style={styles.roomValue}>{item?.roomType}</Text>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Số khách</Text>
        <Text style={styles.roomValue}>{item?.adults} người</Text>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Giá</Text>
        <Text style={styles.roomValue}>{formatPrice(item?.priceRoom)}</Text>
      </View>
      <View style={styles.roomInfoService}>
        <View style={styles.roomInfoServiceText}>
          <Text style={styles.roomLabel}>Dịch vụ</Text>
        </View>
        <View style={styles.serviceIcons}>
          {item?.serviceSelect?.length > 0 ? (
            getUniqueServiceTypes(item.serviceSelect).map((type) => (
              <TouchableOpacity
                key={type}
                style={styles.iconWrapper}
                onPress={handleToOrderFood}
              >
                {getServiceIcon(type)}
              </TouchableOpacity>
            ))
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("OrderFood", { prePage: "OrderConfirm" })
              }
            >
              <Ionicons name="add-outline" size={24} color="#007AFF" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Điều kiện</Text>
        <TouchableOpacity
          style={[styles.roomValue, { fontWeight: "bold", color: "#007AFF" }]}
        >
          <View>
            <Text style={{ fontWeight: "bold", color: "#007AFF" }}>
              Xem thêm
            </Text>
          </View>
          <View>
            <Ionicons
              name="chevron-forward-outline"
              size={18}
              color="#007AFF"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handlePayment = () => {
    navigation.navigate("PaymentScreen");
    dispatch(updateCallPayment(true));
  };

  if (loadingBookingRoom) {
    return <SkeletonOrderConfirm />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.headerSection}>
          <Text style={[styles.title, styles.titleCenter]}>
            Thông tin khách hàng
          </Text>
          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Tên</Text>
              <Text style={styles.infoValue}>
                {(inforUserChange && inforUserChange.lastName) ||
                  userInfor.lastName}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>
                {(inforUserChange && inforUserChange.email) || userInfor.email}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Số điện thoại</Text>
              <Text style={styles.infoValue}>
                {userInfor.country}{" "}
                {(inforUserChange && inforUserChange.phoneNumber) ||
                  userInfor.phoneNumber}
              </Text>
            </View>
          </View>
          <View style={styles.br} />
        </View>

        <View style={styles.headerSection}>
          <Text style={[styles.title, styles.titleCenter]}>
            Thông tin khách sạn
          </Text>
          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Tên khách sạn</Text>
              <Text style={styles.infoValue}>{bookingData?.hotelName}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Vị trí khách sạn</Text>
              <Text style={styles.infoValue}>{bookingData.hotelAddress}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Tổng người lớn</Text>
              <Text style={styles.infoValue}>{bookingData.totalAdults}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>CheckIn</Text>
              <Text style={styles.infoValue}>{bookingData.checkIn}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>CheckOut</Text>
              <Text style={styles.infoValue}>{bookingData.checkOut}</Text>
            </View>
          </View>
          <View style={styles.br} />
        </View>

        <View style={styles.roomsSection}>
          <Text style={styles.subTitle}>Phòng đặt</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <ScrollView> */}
            {listRoom?.map((item, index) => (
              <View key={item.uniqueId}>{renderListRoom(item)}</View>
            ))}
          </ScrollView>
          <View style={styles.br} />
        </View>

        <View style={styles.headerSection}>
          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Mã giảm giá</Text>
              <TouchableOpacity
                style={styles.wrapperInfoValueSale}
                onPress={handleToSale}
              >
                <Ionicons name="bookmark-outline" size={18} color="#007AFF" />
                <Text style={styles.infoValueSale}>couponCode</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.headerSection}>
          <Text style={[styles.title, styles.titleCenter]}>Hóa đơn</Text>
          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Giá tiền phòng</Text>
              <Text style={styles.infoValue}>
                {formatPrice(bookingData && bookingData?.totalPriceRoom)}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabelSale}>Giá tiền dịch vụ</Text>
              <Text style={styles.infoValue}>
                {formatPrice(bookingData && bookingData?.totalPriceService)}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Mã giảm giá</Text>
              <Text style={styles.infoValue}>
                {formatPrice(bookingData && bookingData?.priceCoupon)}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Giá cuối cùng</Text>
              <Text style={styles.infoValue}>
                {formatPrice(bookingData && bookingData?.finalPrice)}
              </Text>
            </View>
          </View>
          <View style={styles.br} />
        </View>
      </ScrollView>
      <View style={styles.footerSection}>
        <View style={styles.br} />
        <Text style={styles.subTitle}>Phương thức thanh toán</Text>
        <View style={styles.infoSectionLast}>
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => setPaymentMethod("ZaloPay")}
          >
            <View style={styles.radioCircle}>
              {paymentMethod === "ZaloPay" && (
                <View style={styles.selectedRadio} />
              )}
            </View>
            <Text style={styles.paymentText}>ZaloPay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => setPaymentMethod("ATM")}
          >
            <View style={styles.radioCircle}>
              {paymentMethod === "ATM" && <View style={styles.selectedRadio} />}
            </View>
            <Text style={styles.paymentText}>ATM</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Xác nhận đặt phòng</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  headerSection: {
    // Phần đầu cố định, không cần flex cụ thể vì sẽ chiếm không gian tự nhiên
  },
  roomsSection: {
    // flex: 1, // Chiếm không gian còn lại để ScrollView có thể cuộn
    // marginVertical: 10,
  },
  footerSection: {
    // Phần cuối cố định, không cần flex cụ thể vì sẽ chiếm không gian tự nhiên
  },
  title: {
    fontWeight: "400",
    color: "#000",
    marginBottom: 5,
    textAligin: "center",
  },
  titleCenter: {
    textAlign: "center",
    fontSize: 17,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    marginBottom: 5,
    textAlign: "center",
  },
  infoSection: {
    // marginBottom: 10,
    // flexDirection: "row",
    // justifyContent:"center"
  },
  infoSectionSale: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoSectionLast: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: "#000",
    marginBottom: 2,
  },
  roomInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  roomInfoService: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    flexWrap: "wrap",
  },
  roomInfoServiceText: {
    width: "20%",
  },
  roomLabel: {
    fontSize: 14,
    color: "#666",
  },
  roomValue: {
    fontSize: 14,
    color: "#000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedRadio: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#007AFF",
  },
  paymentText: {
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#00F598",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
  },
  br: {
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  roomWrapper: {
    // marginVertical: 20,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  serviceIcons: {
    width: "76%",
    flexDirection: "row",
    // alignItems: "flex-start",
    justifyContent: "flex-end",
    flexWrap: "wrap",
  },
  iconWrapper: {
    marginLeft: 3,
  },
  infoValueSale: {
    padding: 3,
    color: "#007AFF",
    fontSize: 12,
    marginBottom: 2,
    padding: 2,
    textAlign: "",
  },
  wrapperInfoValueSale: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 8,
  },
});
