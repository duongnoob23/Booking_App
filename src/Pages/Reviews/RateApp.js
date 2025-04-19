import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RateApp = ({ navigation }) => {
  // State cho đánh giá và nhận xét
  const [ratings, setRatings] = useState({
    hotel: 0,
    room: 0,
    location: 0,
    service: 0,
  });
  const [comment, setComment] = useState("");

  // Xử lý chọn sao
  const handleRating = (criterion, value) => {
    setRatings((prev) => ({
      ...prev,
      [criterion]: value,
    }));
  };

  // Hàm render sao
  const renderStars = (criterion) => {
    const rating = ratings[criterion];
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    const stars = [];

    // Thêm sao đầy
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <TouchableOpacity
          key={`full-${i}`}
          onPress={() => handleRating(criterion, i + 1)}
        >
          <Ionicons name="star" size={20} color="#FFD700" />
        </TouchableOpacity>
      );
    }

    // Thêm sao rỗng
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <TouchableOpacity
          key={`empty-${i}`}
          onPress={() => handleRating(criterion, fullStars + i + 1)}
        >
          <Ionicons name="star-outline" size={20} color="#CCCCCC" />
        </TouchableOpacity>
      );
    }

    return stars;
  };

  const handleTo = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.rateDetail}>
      {/* Header */}
      <View style={styles.rateDetail__header}>
        <TouchableOpacity onPress={handleTo}>
          <Ionicons
            style={styles.iconBed}
            name="chevron-back-outline"
            size={25}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.rateDetail__headerTitle}>Chi tiết đánh giá</Text>
      </View>

      {/* Tiêu chí đánh giá */}
      <View style={styles.rateDetail__criteria}>
        <View style={styles.rateDetail__criterion}>
          <Text style={styles.rateDetail__criterionLabel}>
            Đánh giá khách sạn
          </Text>
          <View style={styles.rateDetail__stars}>{renderStars("hotel")}</View>
        </View>
        <View style={styles.rateDetail__criterion}>
          <Text style={styles.rateDetail__criterionLabel}>Đánh giá phòng</Text>
          <View style={styles.rateDetail__stars}>{renderStars("room")}</View>
        </View>
        <View style={styles.rateDetail__criterion}>
          <Text style={styles.rateDetail__criterionLabel}>
            Đánh giá địa điểm
          </Text>
          <View style={styles.rateDetail__stars}>
            {renderStars("location")}
          </View>
        </View>
        <View style={styles.rateDetail__criterion}>
          <Text style={styles.rateDetail__criterionLabel}>
            Đánh giá dịch vụ
          </Text>
          <View style={styles.rateDetail__stars}>{renderStars("service")}</View>
        </View>
      </View>

      {/* Nhận xét */}
      <Text style={styles.rateDetail__commentLabel}>Nhận xét</Text>
      <TextInput
        style={styles.rateDetail__commentInput}
        value={comment}
        onChangeText={setComment}
        placeholder="Nhập nhận xét của bạn..."
        multiline
      />

      {/* Hình ảnh (fix cứng) */}
      <Text style={styles.rateDetail__photosLabel}>Ảnh</Text>
      <View style={styles.rateDetail__photos}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1418701619/vi/anh/bi%E1%BB%83n-hi%E1%BB%87u-kh%C3%A1ch-s%E1%BA%A1n-tr%C3%AAn-m%E1%BA%B7t-ti%E1%BB%81n-t%C3%B2a-nh%C3%A0-trong-th%C3%A0nh-ph%E1%BB%91-%C4%91i-c%C3%B4ng-t%C3%A1c-v%C3%A0-du-l%E1%BB%8Bch.jpg?s=612x612&w=0&k=20&c=x6d_5RIXuQbFpfFYrtKcA4WnLI3HxTmcqy4naLNMA1I=",
          }}
          style={styles.rateDetail__photo}
        />
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1154773904/vi/anh/ph%C3%B2ng-kh%C3%A1ch-s%E1%BA%A1n-tho%E1%BA%A3i-m%C3%A1i.jpg?s=612x612&w=0&k=20&c=4_WqMoGFrvX6GaaCeHsRHgoyWQ1Xu-Akz8PIBx50Bfo=",
          }}
          style={styles.rateDetail__photo}
        />
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/591821200/vi/anh/3d-k%E1%BA%BFt-xu%E1%BA%A5t-kh%C3%A1ch-s%E1%BA%A1n-sang-tr%E1%BB%8Dng-l%E1%BB%85-t%C3%A2n-v%C3%A0-ph%C3%B2ng-ch%E1%BB%9D.jpg?s=612x612&w=0&k=20&c=-RRMcBrwAb3L5hWy8J5NzSTTtvoPwTY196Vm6f5VsHo=",
          }}
          style={styles.rateDetail__photo}
        />
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/119926339/vi/anh/h%E1%BB%93-b%C6%A1i-resort.jpg?s=612x612&w=0&k=20&c=2gD2N3YByJLQYfk3f1z89qLdLqe1UBVCl_NesEyfTW0=",
          }}
          style={styles.rateDetail__photo}
        />
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/688550958/vi/vec-to/d%E1%BA%A5u-c%E1%BB%97ng-m%C3%A0u-%C4%91en-k%C3%BD-hi%E1%BB%87u-t%C3%ADch-c%E1%BB%B1c.jpg?s=612x612&w=0&k=20&c=ZJYNJ7-s-CEFxNFaj6y4aYQmLlFe9wETgoAX5xj_wWk=",
          }}
          style={styles.rateDetail__photo}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Xác nhận</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rateDetail: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
  },
  rateDetail__header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
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
  button: {
    width: "100%",
    backgroundColor: "#00F598",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});

export default RateApp;
