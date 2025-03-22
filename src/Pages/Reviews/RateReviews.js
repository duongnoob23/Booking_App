import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Để hiển thị icon ngôi sao (rating)
const RateReviews = () => {
  const ratingsData = [
    {
      id: "1",
      name: "Duy",
      time: "20 mins ago",
      content: "Khách sạn đẹp, đồ ăn tuyệt vời",
      score: 4.5,
    },
    {
      id: "2",
      name: "Hương",
      time: "2 days ago",
      content: "Không thể quên được. Rất thích nơi này!",
      score: 5,
    },
    {
      id: "3",
      name: "Quân",
      time: "2 days ago",
      content: "Đẹp, thích vui",
      score: 4.5,
    },
  ];

  return (
    <View style={styles.ratings}>
      {/* Header */}
      <View style={styles.ratings__header}>
        <TouchableOpacity>
          <Ionicons
            style={styles.iconBed}
            name="chevron-back-outline"
            size={25}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.ratings__headerTitle}>Đánh giá</Text>
      </View>

      {/* Thanh tìm kiếm */}
      <TextInput
        style={styles.ratings__searchInput}
        placeholder="Tìm đánh giá"
        placeholderTextColor="#666666"
      />

      {/* Nút viết đánh giá */}
      <TouchableOpacity style={styles.ratings__writeButton}>
        <Text style={styles.ratings__writeButtonText}>VIẾT ĐÁNH GIÁ</Text>
      </TouchableOpacity>

      {/* Thống kê đánh giá */}
      <View style={styles.ratings__stats}>
        <View style={styles.ratings__statsScore}>
          <Text style={styles.ratings__statsScoreValue}>4.4</Text>
          <Text style={styles.ratings__statsScoreLabel}>Rất tốt</Text>
        </View>
        <View style={styles.ratings__statsBars}>
          <View style={styles.ratings__statsBar}>
            <View style={[styles.ratings__statsBarFill, { width: "30%" }]} />
          </View>
          <View style={styles.ratings__statsBar}>
            <View style={[styles.ratings__statsBarFill, { width: "40%" }]} />
          </View>
          <View style={styles.ratings__statsBar}>
            <View style={[styles.ratings__statsBarFill, { width: "20%" }]} />
          </View>
          <View style={styles.ratings__statsBar}>
            <View style={[styles.ratings__statsBarFill, { width: "7%" }]} />
          </View>
          <View style={styles.ratings__statsBar}>
            <View style={[styles.ratings__statsBarFill, { width: "1%" }]} />
          </View>
        </View>
        <View style={styles.ratings__statsLabels}>
          <Text style={styles.ratings__statsLabel}>4.5</Text>
          <Text style={styles.ratings__statsLabel}>4.8</Text>
          <Text style={styles.ratings__statsLabel}>4.6</Text>
          <Text style={styles.ratings__statsLabel}>4.4</Text>
          <Text style={styles.ratings__statsLabel}>4.5</Text>
        </View>
      </View>

      {/* Danh sách đánh giá */}
      {ratingsData.map((item) => (
        <View key={item.id} style={styles.ratings__item}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }} // Thay bằng URL avatar
            style={styles.ratings__itemAvatar}
          />
          <View style={styles.ratings__itemContent}>
            <View style={styles.ratings__itemHeader}>
              <Text style={styles.ratings__itemName}>{item.name}</Text>
              <Text style={styles.ratings__itemScore}>{item.score}</Text>
            </View>
            <Text style={styles.ratings__itemTime}>{item.time}</Text>
            <Text style={styles.ratings__itemText}>{item.content}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ratings: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  ratings__header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  ratings__headerBack: {
    fontSize: 24,
    color: "#00C4B4",
    marginRight: 10,
  },
  ratings__headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  ratings__searchInput: {
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    color: "#000000",
    marginBottom: 10,
  },
  ratings__writeButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  ratings__writeButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#00C4B4",
  },
  ratings__stats: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  ratings__statsScore: {
    marginRight: 20,
    alignItems: "center",
  },
  ratings__statsScoreValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  },
  ratings__statsScoreLabel: {
    fontSize: 16,
    color: "#000000",
  },
  ratings__statsBars: {
    flex: 1,
  },
  ratings__statsBar: {
    backgroundColor: "#E0E0E0",
    height: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  ratings__statsBarFill: {
    backgroundColor: "#FFC107",
    height: 10,
    borderRadius: 5,
  },
  ratings__statsLabels: {
    marginLeft: 10,
  },
  ratings__statsLabel: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 5,
  },
  ratings__item: {
    flexDirection: "row",
    marginBottom: 15,
  },
  ratings__itemAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  ratings__itemContent: {
    flex: 1,
  },
  ratings__itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratings__itemName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  ratings__itemScore: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  ratings__itemTime: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 5,
  },
  ratings__itemText: {
    fontSize: 14,
    color: "#000000",
  },
});

export default RateReviews;
