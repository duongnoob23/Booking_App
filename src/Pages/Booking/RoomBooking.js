import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Dùng icon từ Expo
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PriceScreen from "../Hotels/PriceScreen";
import { useState } from "react";

const RoomBooked = () => {
  const bookings = [
    {
      id: "1",
      image:
        "https://media.istockphoto.com/id/2148367059/fr/photo/la-ligne-dhorizon-c%C3%B4ti%C3%A8re-de-dakar-s%C3%A9n%C3%A9gal-afrique-de-louest.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAwIfTVBEupXPG_K5DoK1k4kpJ_m7SkDF_UlkLrIcGk=", // Placeholder cho hình ảnh
      name: "Heden golf",
      rating: 3.9,
      reviews: 200,
      date: "23 - 7 - 2019",
      discount: "25% OFF",
      price: 127,
    },
    {
      id: "2",
      image:
        "https://media.istockphoto.com/id/2148367059/fr/photo/la-ligne-dhorizon-c%C3%B4ti%C3%A8re-de-dakar-s%C3%A9n%C3%A9gal-afrique-de-louest.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAwIfTVBEupXPG_K5DoK1k4kpJ_m7SkDF_UlkLrIcGk=", // Placeholder cho hình ảnh
      name: "Heden golf",
      rating: 3.9,
      reviews: 200,
      date: "23 - 7 - 2019",
      discount: "25% OFF",
      price: 127,
    },
  ];

  const renderBookingItem = ({ item }) => (
    <View style={styles.bookingHistoryScreen__bookingItem}>
      <Image
        source={{ uri: item.image }}
        style={styles.bookingHistoryScreen__bookingImage}
      />
      <View style={styles.bookingHistoryScreen__bookingDetails}>
        <Text style={styles.bookingHistoryScreen__bookingName}>
          {item.name}
        </Text>
        <View style={styles.bookingHistoryScreen__ratingRow}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.bookingHistoryScreen__ratingText}>
            {item.rating} Đánh giá ({item.reviews})
          </Text>
        </View>
        <Text style={styles.bookingHistoryScreen__date}>
          Đã đặt: {item.date}
        </Text>
        <View style={styles.bookingHistoryScreen__priceRow}>
          <Text style={styles.bookingHistoryScreen__discount}>
            {item.discount}
          </Text>
          <Text style={styles.bookingHistoryScreen__price}>${item.price}</Text>
        </View>
      </View>
      <View style={styles.bookingHistoryScreen__actionButtons}>
        <TouchableOpacity style={styles.bookingHistoryScreen__infoButton}>
          <Text style={styles.bookingHistoryScreen__infoButtonText}>
            Thông tin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingHistoryScreen__rebookButton}>
          <Text style={styles.bookingHistoryScreen__rebookButtonText}>
            Đặt lại
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.bookingHistoryScreen}>
      {/* Danh sách đặt phòng */}
      <FlatList
        data={bookings}
        renderItem={renderBookingItem}
        keyExtractor={(item) => item.id}
        style={styles.bookingHistoryScreen__bookingList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bookingHistoryScreen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //     paddingTop: 40, // Khoảng cách từ thanh trạng thái
    //     paddingHorizontal: 15,
  },
  bookingHistoryScreen__title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  bookingHistoryScreen__searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 15,

    height: 40,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#d3d3d3",
  },
  bookingHistoryScreen__searchIcon: {
    marginRight: 10,
  },
  bookingHistoryScreen__searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    padding: 0,
  },
  bookingHistoryScreen__clearIcon: {
    marginLeft: 10,
  },
  bookingHistoryScreen__filterTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bookingHistoryScreen__filterTab: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 20,
    //     paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  bookingHistoryScreen__filterTab__active: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  bookingHistoryScreen__filterTabText: {
    fontSize: 16,
    color: "#333",
  },
  bookingHistoryScreen__filterTabText__active: {
    color: "#FFFFFF",
  },
  bookingHistoryScreen__bookingList: {
    flex: 1,
  },
  bookingHistoryScreen__bookingItem: {
    flexDirection: "row",
    marginBottom: 20,
    //     backgroundColor: "red",
  },
  bookingHistoryScreen__bookingImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  bookingHistoryScreen__bookingDetails: {
    flex: 1,
  },
  bookingHistoryScreen__bookingName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  bookingHistoryScreen__ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  bookingHistoryScreen__ratingText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 5,
  },
  bookingHistoryScreen__date: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    fontWeight: "bold",
  },
  bookingHistoryScreen__priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookingHistoryScreen__discount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFA500",
    marginRight: 50,
  },
  bookingHistoryScreen__price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  bookingHistoryScreen__actionButtons: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  bookingHistoryScreen__infoButton: {
    backgroundColor: "#00A1D6", // Màu trung bình giữa #007AFF và #00C4B4
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: "#00F598",
  },
  bookingHistoryScreen__infoButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  bookingHistoryScreen__rebookButton: {
    backgroundColor: "#00A1D6", // Màu trung bình giữa #007AFF và #00C4B4
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: "#00F598",
  },
  bookingHistoryScreen__rebookButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  header__tabs: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  header__tab: {
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#0090FF",
    paddingHorizontal: 30,
  },
  header__tab__1: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  header__tab__3: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  header__tab__text: {
    fontSize: 14,
    color: "#007AFF",
  },
  active: {
    backgroundColor: "#0090FF",
  },
  activeText: {
    color: "white",
  },
});

export default RoomBooked;
