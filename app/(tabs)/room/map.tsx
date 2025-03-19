import React from "react";
import { View, Text, TextInput, Image, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";


const Map = () => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <View style={styles.header}>
        <Text style={styles.title}>Khách sạn</Text>
        <Text style={styles.subtitle}>200 khách sạn</Text>
      </View>

      {/* Ô tìm kiếm */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput placeholder="Tìm kiếm" style={styles.searchInput} />
      </View>

      {/* Bản đồ (Chỗ này bạn có thể thay bằng Google Maps sau) */}
      <View style={styles.mapContainer}>
        <Text style={{ color: "#aaa" }}>[Bản đồ sẽ hiển thị ở đây]</Text>
      </View>

      {/* Card khách sạn */}
      <View style={styles.hotelCard}>
        <Image source={{ uri: "https://source.unsplash.com/100x100/?hotel,pool" }} style={styles.hotelImage} />
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>Heden golf</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
            <Text style={styles.rating}> 3.9 </Text>
            <Text style={styles.reviewCount}>(200 đánh giá)</Text>
          </View>
          <Text style={styles.hotelDesc}>Nằm trong những khu vườn cảnh quan ...</Text>
          <View style={styles.priceRow}>
            <Text style={styles.discount}>Giảm 25%</Text>
            <Text style={styles.price}>$127</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Map;

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { marginBottom: 10 },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: { fontSize: 16, color: "#666" },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 10,
  },
  searchInput: { flex: 1, marginLeft: 8 },
  mapContainer: {
    flex: 1.5,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  hotelCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  hotelImage: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  hotelInfo: { flex: 1 },
  hotelName: { fontSize: 16, fontWeight: "bold" },
  ratingRow: { flexDirection: "row", alignItems: "center", marginVertical: 4 },
  rating: { fontSize: 14, fontWeight: "bold" },
  reviewCount: { fontSize: 12, color: "#666" },
  hotelDesc: { fontSize: 12, color: "#666" },
  priceRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 5 },
  discount: { fontSize: 14, color: "red", fontWeight: "bold" },
  price: { fontSize: 16, fontWeight: "bold" },
  searchIcon: { marginRight: 8 },
});
