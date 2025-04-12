import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useAppSelector } from "../../Redux/hook";
import Ionicons from "react-native-vector-icons/Ionicons";
import getServiceIcon from "../../Components/Icon/getServiceIcon";

const OrderConfirmScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);
  const [paymentMethod, setPaymentMethod] = useState("ZaloPay");
  const test = {
    country: "+84",
    email: "lamtiendung11082002@gmail.com",
    firstName: "Lâm",
    lastName: "Tiến Dưỡng ",
    phoneNumber: "0982474802",
    userId: "0",
  };
  const { userInfor } = useAppSelector((state) => state.auth);
  const { serviceList } = useAppSelector((state) => state.service);
  const { bookingData } = useAppSelector((state) => state.hotel);
  console.log(">>> 31 OCS listUniqueIdBookingRoom", bookingData);
  console.log(
    ">>> 33 OCS listUniqueIdBookingRoom",
    bookingData?.roomBookedList
  );
  // console.log("______ serviceList:", Object.keys(serviceList));
  // useEffect(() => {

  // }, [bookingData]);
  const listRoom = bookingData?.roomBookedList;

  useEffect(() => {
    console.log("bookingData updated:", bookingData);
  }, [bookingData]);

  const getUniqueServiceTypes = (serviceSelect) => {
    const serviceTypes = new Set();
    serviceSelect.forEach((serviceId) => {
      // Tìm loại dịch vụ chứa serviceId
      Object.entries(serviceList).forEach(([type, services]) => {
        if (services.some((service) => service.id === serviceId)) {
          serviceTypes.add(type);
        }
      });
    });
    return Array.from(serviceTypes);
  };
  // Sửa renderListRoom để dùng với ScrollView
  const renderListRoom = (item) => (
    <View style={styles.roomWrapper}>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Tên Phòng </Text>
        <Text style={styles.roomValue}>{item?.roomName}</Text>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Loại phòng</Text>
        <Text style={styles.roomValue}>{item?.roomType}</Text>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Số khách </Text>
        <Text style={styles.roomValue}>{item?.adults} người </Text>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Giá</Text>
        <Text style={styles.roomValue}>{item?.priceRoom}</Text>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Dịch vụ</Text>
        <View style={styles.serviceIcons}>
          {item?.serviceSelect?.length > 0 ? (
            getUniqueServiceTypes(item.serviceSelect).map((type) => (
              <View key={type} style={styles.iconWrapper}>
                {getServiceIcon(type)}
              </View>
            ))
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate("OrderFood")}>
              <Ionicons name="add-outline" size={20} color="#007AFF" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomLabel}>Điều kiện</Text>
        <Text style={[styles.roomValue, { fontWeight: "bold" }]}>
          {/* 355,000 */}
        </Text>
      </View>
      {/* <View style={styles.br}></View> */}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {/* Phần đầu: Thông tin khách hàng (cố định) */}
        <View style={styles.headerSection}>
          <Text style={styles.title}>THÔNG TIN KHÁCH HÀNG</Text>
          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Tên</Text>
              <Text style={styles.infoValue}>{userInfor.lastName}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{userInfor.email}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Số điện thoại</Text>
              <Text style={styles.infoValue}>
                {userInfor.country} {userInfor.phoneNumber}
              </Text>
            </View>
          </View>
          <View style={styles.br}></View>
        </View>

        {/* Phần giữa: Danh sách phòng (cuộn) */}
        <View style={styles.roomsSection}>
          <Text style={styles.subTitle}>Phòng đặt</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {listRoom?.map((item, index) => (
              <View key={item?.uniqueId}>{renderListRoom(item)}</View>
            ))}
          </ScrollView>
          <View style={styles.br}></View>
        </View>

        {/* Phần cuối: Mã giảm giá, Phương thức thanh toán, Nút xác nhận (cố định) */}
        <View style={styles.footerSection}>
          <View style={styles.infoSection}>
            <Text style={styles.subTitle}>MÃ GIẢM GIÁ</Text>
            <Text>TEST 10</Text>
          </View>
          <View style={styles.br}></View>

          <Text style={styles.subTitle}>PHƯƠNG THỨC THANH TOÁN</Text>
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
                {paymentMethod === "ATM" && (
                  <View style={styles.selectedRadio} />
                )}
              </View>
              <Text style={styles.paymentText}>ATM</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Xác nhận đặt phòng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerSection: {
    // Phần đầu cố định, không cần flex cụ thể vì sẽ chiếm không gian tự nhiên
  },
  roomsSection: {
    flex: 1, // Chiếm không gian còn lại để ScrollView có thể cuộn
    // marginVertical: 10,
  },
  footerSection: {
    // Phần cuối cố định, không cần flex cụ thể vì sẽ chiếm không gian tự nhiên
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    marginBottom: 10,
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
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },
  roomInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  roomLabel: {
    fontSize: 14,
    color: "#666",
  },
  roomValue: {
    fontSize: 14,
    color: "#000",
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
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  iconWrapper: {
    marginLeft: 8,
  },
});

export default OrderConfirmScreen;
