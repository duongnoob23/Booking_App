import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const hotels = [
  {
    id: "1",
    name: "Heden golf",
    rating: 3.9,
    reviews: 200,
    price: 127,
    discount: "Giảm 25%",
    image: require("@/assets/images/icon.png"),
  },
  {
    id: "2",
    name: "Onomo",
    rating: 4.3,
    reviews: 150,
    price: 120,
    image: require("@/assets/images/icon.png"),

  },
  {
    id: "3",
    name: "Adagio",
    rating: 4.5,
    reviews: 20,
    price: 100,
    discount: "Giảm 15%",
    image: require("@/assets/images/icon.png"),

  },
  {
    id: "4",
    name: "Sofitel",
    rating: 4.5,
    reviews: 20,
    price: 127,
    discount: "Giảm 25%",
    image: require("@/assets/images/icon.png"),
  },
];

export default function HotelListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Khách sạn</Text>
      <Text style={styles.subHeader}>200 khách sạn</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput placeholder="Tìm kiếm" style={styles.searchInput} />
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text>Tiện nghi</Text>
          <Ionicons name="chevron-down" size={16} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text>Bộ lọc</Text>
          <Ionicons name="chevron-down" size={16} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text>Sắp xếp</Text>
          <Ionicons name="chevron-down" size={16} color="#555" />
        </TouchableOpacity>
      </View>

      <FlatList data={hotels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hotelCard}>
            <Image source={item.image} style={styles.hotelImage} />
            <View style={styles.hotelInfo}>
              <Text style={styles.hotelName}>{item.name}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={14} color="orange" />
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.reviews}>Đánh giá ({item.reviews})</Text>
              </View>
              {item.discount && <Text style={styles.discount}>{item.discount}</Text>}
              <View style={styles.priceContainer}>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity style={styles.bookButton} onPress={() => router.navigate({ pathname: "/screens/hotel/detail", params: { id: item.name } })}>
                  <Text style={styles.bookText}>Đặt ngay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { fontSize: 22, fontWeight: "bold" },
  subHeader: { fontSize: 14, color: "#666", marginBottom: 16 },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    alignItems: "center",
    padding: 10,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16 },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 6,
  },
  hotelCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    overflow: "hidden",
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 12 },
    // borderWidth: 1,
  },
  hotelImage: { width: 80, height: 80, borderRadius: 8, margin: 10 },
  hotelInfo: { flex: 1, padding: 10 },
  hotelName: { fontSize: 16, fontWeight: "bold" },
  ratingContainer: { flexDirection: "row", alignItems: "center", marginVertical: 4 },
  rating: { marginLeft: 4, fontWeight: "bold", color: "#555" },
  reviews: { marginLeft: 6, fontSize: 12, color: "#777" },
  discount: { color: "orange", fontWeight: "bold" },
  priceContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: 16, fontWeight: "bold" },
  bookButton: { backgroundColor: "#00AFFF", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 5 },
  bookText: { color: "#fff", fontWeight: "bold" },
});
