import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RateApp = () => {
  return (
    <View style={styles.rateApp}>
      {/* Header */}
      <View style={styles.rateApp__header}>
        <TouchableOpacity>
          <Text style={styles.rateApp__headerBack}>←</Text>
        </TouchableOpacity>
        <Text style={styles.rateApp__headerTitle}>Đánh giá sao</Text>
      </View>

      {/* Tiêu chí đánh giá */}
      <View style={styles.rateApp__criteria}>
        <View style={styles.rateApp__criterion}>
          <Text style={styles.rateApp__criterionLabel}>Đánh giá khách sạn</Text>
          <View style={styles.rateApp__stars}>
            {[...Array(5)].map((_, index) => (
              <Ionicons
                key={index}
                name="star-outline"
                size={20}
                color="#CCCCCC"
              />
            ))}
          </View>
        </View>
        <View style={styles.rateApp__criterion}>
          <Text style={styles.rateApp__criterionLabel}>Đánh giá phòng</Text>
          <View style={styles.rateApp__stars}>
            {[...Array(5)].map((_, index) => (
              <Ionicons
                key={index}
                name="star-outline"
                size={20}
                color="#CCCCCC"
              />
            ))}
          </View>
        </View>
        <View style={styles.rateApp__criterion}>
          <Text style={styles.rateApp__criterionLabel}>Đánh giá địa điểm</Text>
          <View style={styles.rateApp__stars}>
            {[...Array(5)].map((_, index) => (
              <Ionicons
                key={index}
                name="star-outline"
                size={20}
                color="#CCCCCC"
              />
            ))}
          </View>
        </View>
        <View style={styles.rateApp__criterion}>
          <Text style={styles.rateApp__criterionLabel}>Đánh giá dịch vụ</Text>
          <View style={styles.rateApp__stars}>
            {[...Array(5)].map((_, index) => (
              <Ionicons
                key={index}
                name="star-outline"
                size={20}
                color="#CCCCCC"
              />
            ))}
          </View>
        </View>
      </View>

      {/* Hình ảnh */}
      <Text style={styles.rateApp__photosLabel}>Ảnh</Text>
      <View style={styles.rateApp__photos}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // Thay bằng URL hình ảnh
          style={styles.rateApp__photo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // Thay bằng URL hình ảnh
          style={styles.rateApp__photo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // Thay bằng URL hình ảnh
          style={styles.rateApp__photo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // Thay bằng URL hình ảnh
          style={styles.rateApp__photo}
        />
        <TouchableOpacity style={styles.rateApp__addPhoto}>
          <Text style={styles.rateApp__addPhotoText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Nút Xác nhận */}
      <TouchableOpacity style={styles.rateApp__submitButton}>
        <Text style={styles.rateApp__submitButtonText}>Xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rateApp: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  rateApp__header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  rateApp__headerBack: {
    fontSize: 24,
    color: "#00C4B4",
    marginRight: 10,
  },
  rateApp__headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  rateApp__criteria: {
    marginBottom: 20,
  },
  rateApp__criterion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  rateApp__criterionLabel: {
    fontSize: 14,
    color: "#000000",
  },
  rateApp__stars: {
    flexDirection: "row",
  },
  rateApp__photosLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  rateApp__photos: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  rateApp__photo: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  rateApp__addPhoto: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: "#E8ECEF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  rateApp__addPhotoText: {
    fontSize: 30,
    color: "#666666",
  },
  rateApp__submitButton: {
    backgroundColor: "#00C4B4",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 20,
  },
  rateApp__submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default RateApp;
