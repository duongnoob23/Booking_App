import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Để hiển thị icon ngôi sao (rating)

const FoodDetails = () => {
  return (
    <View style={styles.container}>
      {/* Hình ảnh món ăn */}
      <Ionicons name="chevron-back-outline" size={40} color="black" />

      <Image
        source={{
          uri: "https://media.istockphoto.com/id/2061716709/fr/photo/burger-de-c%C3%B4tes-grill%C3%A9es.webp?a=1&b=1&s=612x612&w=0&k=20&c=PvlYSm7Q_q7ro2i7tMJ4lnjELvPeBKnWIyzvOObmkEQ=", // Thay bằng URL hình ảnh thực tế
        }}
        style={styles.foodImage}
      />
      {/* Tiêu đề và đánh giá */}
      <View style={styles.header}>
        <View>
          <Ionicons name="chevron-back-outline" size={40} color="black" />
          <Text>Danh sách đồ ăn</Text>
        </View>
        <ImageBackground
          source={{
            uri: "https://media.istockphoto.com/id/2061716709/fr/photo/burger-de-c%C3%B4tes-grill%C3%A9es.webp?a=1&b=1&s=612x612&w=0&k=20&c=PvlYSm7Q_q7ro2i7tMJ4lnjELvPeBKnWIyzvOObmkEQ=",
          }}
          style={styles.foodImage}
        ></ImageBackground>
        <Text style={styles.foodName}>Hamburger</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>3.9</Text>
          <Text style={styles.reviewCount}>Đánh giá (200)</Text>
        </View>
      </View>
      {/* Mô tả món ăn */}
      <Text style={styles.description}>
        Một chiếc bánh vòng hạt anh túc được chế biến hoàn hảo, kèm phô mai, mứt
        tây và dưa chua. Sau đó, một lớp thịt được thêm vào, kèm theo một lát cà
        chua, hai nửa lát tây và hai nửa lát pastrami. Hoàn thiện món ăn này chỉ
        mất năm phút và chứa chưa đến 400 calo.
      </Text>
      {/* Giá tiền */}
      <Text style={styles.price}>Giá: 15.000Đ</Text>
      {/* Nút Thêm vào giỏ */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>THÊM VÀO GIỎ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Hiệu ứng bóng cho Android
  },
  foodImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    color: "#FFD700",
    marginLeft: 5,
    marginRight: 5,
  },
  reviewCount: {
    fontSize: 14,
    color: "#666",
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: "#00C4B4", // Màu xanh lam gradient
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FoodDetails;
