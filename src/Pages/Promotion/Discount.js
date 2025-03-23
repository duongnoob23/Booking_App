import React from "react";
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
const Discount = ({ navigation }) => {
  //   const navigation = useNavigation();

  const discountItems = [
    {
      id: "1",
      title: "Giảm 20% cho các đặt phòng trên 1500K",
      code: "Mã: STAY20",
      expiry: "Hạn sử dụng: 15/03/2025",
    },
    {
      id: "2",
      title: "Giảm 100K cho lần đặt phòng đầu tiên",
      code: "Mã: 15FT",
      expiry: "Hạn sử dụng: 12/03/2025",
    },
    {
      id: "3",
      title: "Giảm 50K khi thanh toán bằng Mastercard",
      code: "Mã: MT3",
      expiry: "Hạn sử dụng: 13/03/2025",
    },
  ];

  const handleToDiscountHistory = () => {
    navigation.navigate("DiscountHistory");
  };

  return (
    <View style={styles.discountCodes}>
      {/* Header */}
      <View style={styles.discountCodes__header}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="#007BFF"
            style={styles.discountCodes__headerBack}
          />
        </TouchableOpacity>
        <Text style={styles.discountCodes__headerTitle}>Mã giảm giá</Text> */}
        <TouchableOpacity
          style={styles.discountButton}
          onPress={() => handleToDiscountHistory()}
        >
          <Text style={styles.discountCodes__headerHistory}>Lịch sử</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách mã giảm giá */}
      {discountItems.map((item) => (
        <View key={item.id} style={styles.discountCodes__item}>
          <Ionicons
            name="gift-outline"
            size={45}
            color="#007BFF"
            style={styles.discountCodes__itemIcon}
          />
          <View style={styles.discountCodes__itemContent}>
            <Text style={styles.discountCodes__itemTitle}>{item.title}</Text>
            <Text style={styles.discountCodes__itemCode}>{item.code}</Text>
            <Text style={styles.discountCodes__itemExpiry}>{item.expiry}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  discountCodes: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
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
    backgroundColor: "green",
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 5,
  },
  discountCodes__itemCode: {
    fontSize: 16,
    color: "#007BFF",
    marginBottom: 5,
  },
  discountCodes__itemExpiry: {
    fontSize: 16,
    color: "#888888",
  },
});

export default Discount;
