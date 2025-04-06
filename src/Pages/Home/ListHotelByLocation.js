import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome"; // Sử dụng FontAwesome cho biểu tượng
import Ionicons from "react-native-vector-icons/Ionicons";
import SkeletonListHotelByLocation from "../../Components/Skeleton/Home/SkeletonListHotelByLocation";
import { useAppSelector } from "../../Redux/hook";
import ModalAmenity from "../../Components/Modal/Home/ModalAmenity";
import ModalSort from "../../Components/Modal/Home/ModalSort";
const ListHotelByLocation = ({ navigation }) => {
  //   const hotelList1 = [
  //     {
  //       hotelId: 3,
  //       hotelName: "Adagio",
  //       hotelLocation: "Đà Nẵng",
  //       hotelRating: 4.5,
  //       imageUrl:
  //         "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1734318543/rooms/wcqbinr8jl5swxprmbdi.jpg",
  //       sumReview: 20,
  //       promotionName: "Ưu đãi đầu năm 2025",
  //       price: 100,
  //     },
  //     {
  //       hotelId: 1,
  //       hotelName: "Heden Golf",
  //       hotelLocation: "Đà Nẵng",
  //       hotelRating: 3.9,
  //       imageUrl:
  //         "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729241122/Room/nipyn0qgyoyhtgkadlyi.jpg",
  //       sumReview: 85,
  //       promotionName: "Ưu đãi đầu năm 2025",
  //       price: 127,
  //     },
  //     {
  //       hotelId: 2,
  //       hotelName: "Onomo",
  //       hotelLocation: "Đà Nẵng",
  //       hotelRating: 4.3,
  //       imageUrl:
  //         "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729241122/Room/nipyn0qgyoyhtgkadlyi.jpg",
  //       sumReview: 150,
  //       promotionName: null,
  //       price: 120,
  //     },
  //   ];

  const [searchText, setSearchText] = useState("");
  const {
    hotelList,
    locationList,
    hotelDetail,
    hotelByLocation,
    loading,
    error,
    inforFilter,
  } = useAppSelector((state) => state.hotel);
  const HotelItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.hotelItem}>
        {/* Hình ảnh khách sạn */}
        <View style={styles.image}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.hotelImage}
            resizeMode="cover"
          />
        </View>

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
          {item.promotionName && (
            <View style={styles.promotion}>
              <Text style={styles.promotionText}>{item.promotionName}</Text>
            </View>
          )}
          {/* Khuyến mãi và giá */}
          <View style={styles.footer}>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Đặt ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // console.log(hotelByLocation);
  const modalDefault = {
    Amenity: false,
    FilterBy: false,
    SortBy: false,
  };
  const [modalVisible, setModalVisible] = useState({
    modalDefault,
  });

  const handleApply = () => {
    // console.log("Xác nhận các tiện ích");
    console.log(inforFilter.amenityIds);
    console.log(inforFilter.sortById);
  };

  if (loading) {
    return <SkeletonListHotelByLocation />;
  }

  //   console.log(">>> 123 ListLocationi", hotelByLocation);
  return (
    <SafeAreaView style={styles.container}>
      {/* Tiêu đề và số lượng khách sạn */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerNavi}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons
            name="chevron-back"
            size={20}
            color="black"
            style={[styles.searchIcon]}
          />
          <Text style={styles.title}>Khách sạn</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>{hotelByLocation?.length} khách sạn</Text>
      </View>

      {/* Thanh tìm kiếm và bộ lọc */}
      <View style={styles.filterContainer}>
        {/* Thanh tìm kiếm */}
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <Ionicons
              name="search-outline"
              size={20}
              color="#0090FF"
              style={[styles.searchIcon]}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.searchText}
            placeholder="Tìm kiếm"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <TouchableOpacity>
            <Ionicons
              name="close-outline"
              size={20}
              color="black"
              style={[styles.searchIcon]}
            />
          </TouchableOpacity>
        </View>

        {/* Bộ lọc */}
        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() =>
              setModalVisible({
                ...modalDefault,
                Amenity: !modalVisible.Amenity,
              })
            }
          >
            <Text style={styles.filterButtonText}>Tiện nghi</Text>
            <Icon name="angle-down" size={25} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() =>
              setModalVisible({
                ...modalDefault,
                FilterBy: !modalVisible.FilterBy,
              })
            }
          >
            <Text style={styles.filterButtonText}>Bộ lọc</Text>
            <Icon name="angle-down" size={25} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() =>
              setModalVisible({
                ...modalDefault,
                SortBy: !modalVisible.SortBy,
              })
            }
          >
            <Text style={styles.filterButtonText}>Sắp xếp</Text>
            <Icon name="angle-down" size={25} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Danh sách khách sạn */}
      {/* ) : modalVisible.FilterBy ? (
        <ModalFilter
          onClose={() => setModalVisible({ ...modalVisible, FilterBy: false })}
          onApply={handleApplyFilter} // Giả sử bạn có hàm này
        /> */}
      {modalVisible.Amenity ? (
        <ModalAmenity
          onClose={() => setModalVisible({ ...modalVisible, Amenity: false })}
          onApply={handleApply}
        />
      ) : modalVisible.SortBy ? (
        <ModalSort
          onClose={() => setModalVisible({ ...modalVisible, SortBy: false })}
          onApply={handleApply} // Giả sử bạn có hàm này
        />
      ) : (
        <ScrollView style={styles.scrollView}>
          {hotelByLocation &&
            hotelByLocation?.map((item, index) => (
              <HotelItem key={index} item={item} />
            ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ListHotelByLocation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginTop: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerNavi: {
    flexDirection: "row",
    alignItems: "center",
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
    //     padding: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
    fontWeight: "800",
  },
  searchText: {
    flex: 1,
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
    color: "#000000",
  },
  scrollView: {
    flex: 1,
  },
  hotelItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    elevation: 3, // Bóng cho Android
    shadowColor: "#000", // Bóng cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: "200",
    justifyContent: "center",
    alignItems: "center",
  },
  hotelImage: {
    width: "95%",
    height: "90%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRadius: 10,
  },
  hotelDetails: {
    padding: 10,
  },
  hotelHeader: {
    marginBottom: 5,
  },
  hotelName: {
    fontSize: 20,
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
    marginLeft: 40,
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
    backgroundColor: "#F8D146",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
  },
  promotionText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 20,
  },
  bookButton: {
    backgroundColor: "#00F598", // Màu xanh theo yêu cầu
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  bookButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "400",
  },
});
