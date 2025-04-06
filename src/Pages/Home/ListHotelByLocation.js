import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome"; // Sử dụng FontAwesome cho biểu tượng

const ListHotelByLocation = () => {
  // Dữ liệu khách sạn (từ API)
  const hotelList = [
    {
      hotelId: 3,
      hotelName: "Adagio",
      hotelLocation: "Đà Nẵng",
      hotelRating: 4.5,
      imageUrl:
        "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1734318543/rooms/wcqbinr8jl5swxprmbdi.jpg",
      sumReview: 20,
      promotionName: "Giảm 15%",
      price: 100,
    },
    {
      hotelId: 1,
      hotelName: "Heden Golf",
      hotelLocation: "Đà Nẵng",
      hotelRating: 3.9,
      imageUrl:
        "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729241122/Room/nipyn0qgyoyhtgkadlyi.jpg",
      sumReview: 85,
      promotionName: "Giảm 25%",
      price: 127,
    },
    {
      hotelId: 2,
      hotelName: "Onomo",
      hotelLocation: "Đà Nẵng",
      hotelRating: 4.3,
      imageUrl:
        "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729241122/Room/nipyn0qgyoyhtgkadlyi.jpg",
      sumReview: 150,
      promotionName: null,
      price: 120,
    },
  ];

  // Component render mỗi item khách sạn
  const HotelItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.hotelItem}>
        {/* Hình ảnh khách sạn */}
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.hotelImage}
          resizeMode="cover"
        />

        {/* Thông tin khách sạn */}
        <View style={styles.hotelDetails}>
          {/* Tên khách sạn và đánh giá */}
          <View style={styles.hotelHeader}>
            <Text style={styles.hotelName}>{item.hotelName}</Text>
            <View style={styles.ratingContainer}>
              <Icon
                name="star"
                size={16}
                color="#EBA731"
                style={styles.starIcon}
              />
              <Text style={styles.ratingText}>{item.hotelRating}</Text>
              <Text style={styles.reviewText}>Đánh giá ({item.sumReview})</Text>
            </View>
          </View>

          {/* Mô tả */}
          <Text style={styles.description}>
            Nằm trong khu vực khách quan...
          </Text>

          {/* Khuyến mãi và giá */}
          <View style={styles.footer}>
            {item.promotionName && (
              <View style={styles.promotion}>
                <Text style={styles.promotionText}>{item.promotionName}</Text>
              </View>
            )}
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Đặt ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Tiêu đề và số lượng khách sạn */}
      <View style={styles.header}>
        <Text style={styles.title}>Khách sạn</Text>
        <Text style={styles.subtitle}>200 khách sạn</Text>
      </View>

      {/* Thanh tìm kiếm và bộ lọc */}
      <View style={styles.filterContainer}>
        {/* Thanh tìm kiếm */}
        <View style={styles.searchBar}>
          <Icon
            name="search"
            size={20}
            color="#666666"
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>Tìm kiếm</Text>
        </View>

        {/* Bộ lọc */}
        <View style={styles.filterButtons}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Tiện nghi</Text>
            <Icon name="angle-down" size={20} color="#666666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Bộ lọc</Text>
            <Icon name="angle-down" size={20} color="#666666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Sắp xếp</Text>
            <Icon name="angle-down" size={20} color="#666666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Danh sách khách sạn */}
      <ScrollView style={styles.scrollView}>
        {hotelList.map((item) => (
          <HotelItem key={item.hotelId} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginTop: 5,
  },
  filterContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchText: {
    fontSize: 16,
    color: "#666666",
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  filterButtonText: {
    fontSize: 14,
    color: "#666666",
  },
  scrollView: {
    flex: 1,
  },
  hotelItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    elevation: 3, // Bóng cho Android
    shadowColor: "#000", // Bóng cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  hotelImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  hotelDetails: {
    padding: 10,
  },
  hotelHeader: {
    marginBottom: 5,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starIcon: {
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginRight: 5,
  },
  reviewText: {
    fontSize: 14,
    color: "#666666",
  },
  description: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  promotion: {
    backgroundColor: "#FF6347",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  promotionText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  bookButton: {
    backgroundColor: "#00C4B4", // Màu xanh theo yêu cầu
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  bookButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ListHotelByLocation;
