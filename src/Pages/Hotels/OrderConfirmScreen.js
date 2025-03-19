import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const OrderConfirmScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("ZaloPay");

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>THÔNG TIN KHÁCH HÀNG</Text>

      {/* Thông tin khách hàng */}
      <View style={styles.infoSection}>
        <Text style={styles.infoLabel}>Tên</Text>
        <Text style={styles.infoValue}>Nguyễn Quân</Text>
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoValue}>quannt03@gmail.com</Text>
        <Text style={styles.infoLabel}>Số điện thoại</Text>
        <Text style={styles.infoValue}>+84 84986156736</Text>
      </View>

      {/* Thông tin phòng */}
      <View style={styles.infoSection}>
        <Text style={styles.subTitle}>THÔNG TIN PHÒNG</Text>
        <View style={styles.roomInfo}>
          <Text style={styles.roomLabel}>Số phòng</Text>
          <Text style={styles.roomValue}>1</Text>
        </View>
        <View style={styles.roomInfo}>
          <Text style={styles.roomLabel}>Loại phòng</Text>
          <Text style={styles.roomValue}>Vip</Text>
        </View>
        <View style={styles.roomInfo}>
          <Text style={styles.roomLabel}>Phòng</Text>
          <Text style={styles.roomValue}>3 đêm (127,000 x 3 = 381,000)</Text>
        </View>
        <View style={styles.roomInfo}>
          <Text style={styles.roomLabel}>Giảm giá</Text>
          <Text style={styles.roomValue}>-25,000</Text>
        </View>
        <View style={styles.roomInfo}>
          <Text style={styles.roomLabel}>Tổng tiền</Text>
          <Text style={[styles.roomValue, { fontWeight: "bold" }]}>
            355,000
          </Text>
        </View>
      </View>

      {/* Phương thức thanh toán */}
      <View style={styles.infoSection}>
        <Text style={styles.subTitle}>PHƯƠNG THỨC THANH TOÁN</Text>
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

      {/* Nút Xác nhận đặt phòng */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Xác nhận đặt phòng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  infoSection: {
    marginBottom: 30,
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: "#000",
    marginBottom: 15,
  },
  roomInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
    marginBottom: 15,
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
    backgroundColor: "#007AFF", // Màu xanh dương thay vì gradient
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default OrderConfirmScreen;
