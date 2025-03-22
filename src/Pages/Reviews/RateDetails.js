import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RateDetails = () => {
  return (
    <View style={styles.rateDetail}>
      {/* Header */}
      <View style={styles.rateDetail__header}>
        <TouchableOpacity>
          <Text style={styles.rateDetail__headerBack}>←</Text>
        </TouchableOpacity>
        <Text style={styles.rateDetail__headerTitle}>Chi tiết đánh giá</Text>
      </View>

      {/* Tiêu chí đánh giá */}
      <View style={styles.rateDetail__criteria}>
        <View style={styles.rateDetail__criterion}>
          <Text style={styles.rateDetail__criterionLabel}>
            Đánh giá khách sạn
          </Text>
          <View style={styles.rateDetail__stars}>
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
        <View style={styles.rateDetail__criterion}>
          <Text style={styles.rateDetail__criterionLabel}>Đánh giá phòng</Text>
          <View style={styles.rateDetail__stars}>
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
        <View style={styles.rateDetail__criterion}>
          <Text style={styles.rateDetail__criterionLabel}>
            Đánh giá địa điểm
          </Text>
          <View style={styles.rateDetail__stars}>
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
        <View style={styles.rateDetail__criterion}>
          <Text style={styles.rateDetail__criterionLabel}>
            Đánh giá dịch vụ
          </Text>
          <View style={styles.rateDetail__stars}>
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

      {/* Nhận xét */}
      <Text style={styles.rateDetail__commentLabel}>Nhận xét</Text>
      <TextInput
        style={styles.rateDetail__commentInput}
        value="Khách sạn đẹp, đồ ăn tuyệt vời"
        multiline
      />

      {/* Hình ảnh */}
      <Text style={styles.rateDetail__photosLabel}>Ảnh</Text>
      <View style={styles.rateDetail__photos}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // Thay bằng URL hình ảnh
          style={styles.rateDetail__photo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // Thay bằng URL hình ảnh
          style={styles.rateDetail__photo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // Thay bằng URL hình ảnh
          style={styles.rateDetail__photo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/80" }} // Thay bằng URL hình ảnh
          style={styles.rateDetail__photo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rateDetail: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  rateDetail__header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  rateDetail__headerBack: {
    fontSize: 24,
    color: "#00C4B4",
    marginRight: 10,
  },
  rateDetail__headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  rateDetail__criteria: {
    marginBottom: 20,
  },
  rateDetail__criterion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  rateDetail__criterionLabel: {
    fontSize: 14,
    color: "#000000",
  },
  rateDetail__stars: {
    flexDirection: "row",
  },
  rateDetail__commentLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  rateDetail__commentInput: {
    backgroundColor: "#E8ECEF",
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    color: "#000000",
    marginBottom: 20,
    minHeight: 80,
  },
  rateDetail__photosLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  rateDetail__photos: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  rateDetail__photo: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default RateDetails;
