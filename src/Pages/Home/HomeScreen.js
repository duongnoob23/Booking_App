import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Sử dụng FontAwesome cho icons
import { FlatList } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
const HomeScreen = ({ navigation }) => {
  const dealData = [
    { id: "1", name: "Heden Golf", image: "https://via.placeholder.com/100" },
    { id: "2", name: "Onomo", image: "https://via.placeholder.com/100" },
    { id: "3", name: "Adagio", image: "https://via.placeholder.com/100" },
    { id: "4", name: "Sofitel", image: "https://via.placeholder.com/100" },
  ];

  const continueSearch = [
    {
      id: "1",
      name: "Heden Golf",
      image:
        "https://media.istockphoto.com/id/2148367059/fr/photo/la-ligne-dhorizon-c%C3%B4ti%C3%A8re-de-dakar-s%C3%A9n%C3%A9gal-afrique-de-louest.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAwIfTVBEupXPG_K5DoK1k4kpJ_m7SkDF_UlkLrIcGk=",
      details: " 23-26 Tháng 8, 6-7 Người lớn, 1 trẻ em",
    },
    {
      id: "2",
      name: "Onomo",
      image:
        "https://media.istockphoto.com/id/2148367059/fr/photo/la-ligne-dhorizon-c%C3%B4ti%C3%A8re-de-dakar-s%C3%A9n%C3%A9gal-afrique-de-louest.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAwIfTVBEupXPG_K5DoK1k4kpJ_m7SkDF_UlkLrIcGk=",
      details: " 23-26 Tháng 8, 6-7 Người lớn, 1 trẻ em",
    },
    {
      id: "3",
      name: "Adagio",
      image:
        "https://media.istockphoto.com/id/2148367059/fr/photo/la-ligne-dhorizon-c%C3%B4ti%C3%A8re-de-dakar-s%C3%A9n%C3%A9gal-afrique-de-louest.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAwIfTVBEupXPG_K5DoK1k4kpJ_m7SkDF_UlkLrIcGk=",
      details: " 23-26 Tháng 8, 6-7 Người lớn, 1 trẻ em",
    },
    {
      id: "4",
      name: "Sofitel",
      image:
        "https://media.istockphoto.com/id/2148367059/fr/photo/la-ligne-dhorizon-c%C3%B4ti%C3%A8re-de-dakar-s%C3%A9n%C3%A9gal-afrique-de-louest.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAwIfTVBEupXPG_K5DoK1k4kpJ_m7SkDF_UlkLrIcGk=",
      details: " 23-26 Tháng 8, 6-7 Người lớn, 1 trẻ em",
    },
    {
      id: "5",
      name: "Sofitel",
      image:
        "https://media.istockphoto.com/id/2148367059/fr/photo/la-ligne-dhorizon-c%C3%B4ti%C3%A8re-de-dakar-s%C3%A9n%C3%A9gal-afrique-de-louest.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAwIfTVBEupXPG_K5DoK1k4kpJ_m7SkDF_UlkLrIcGk=",
      details: " 23-26 Tháng 8, 6-7 Người lớn, 1 trẻ em",
    },
  ];

  const handleToRate = (name) => {
    navigation.navigate(`${name}`);
  };
  // Chia continueSearch thành 2 phần
  console.log(continueSearch.length / 2);
  const WidthtwoRowScrollView = 210 * Math.ceil(continueSearch.length / 2);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Tìm Phòng</Text>
        <TouchableOpacity>
          <Icon name="filter" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <ScrollView style={styles.body}>
        {/* "Khách Sạn" Text */}
        <View style={styles.hotelLabelContainer}>
          <Text style={styles.hotelLabel}>Khách Sạn</Text>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Icon name="map-marker" size={24} color="#0090FF" />
          <Text style={styles.inputText}>Bạn muốn ở đâu</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon name="calendar" size={24} color="#0090FF" />
          <Text style={styles.inputText}>Ngày & giờ nhận phòng</Text>
          <Icon
            name="angle-down"
            size={20}
            color="#0090FF"
            style={styles.arrowIcon}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="calendar" size={24} color="#0090FF" />
          <Text style={styles.inputText}>Ngày & giờ thanh toán</Text>
          <Icon
            name="angle-down"
            size={20}
            color="#0090FF"
            style={styles.arrowIcon}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="building" size={24} color="#0090FF" />
          <Text style={styles.inputText}>0 Người lớn, 0 Trẻ em, 0 Phòng</Text>
          <Icon
            name="angle-down"
            size={20}
            color="#0090FF"
            style={styles.arrowIcon}
          />
        </View>

        {/* Search Button */}
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => handleToRate("RateReviews")}
        >
          <Text style={styles.searchButtonText}>Tìm kiếm</Text>
        </TouchableOpacity>

        {/* Recent Searches Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>TIẾP TỤC TÌM KIẾM CỦA BẠN</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>XEM TẤT CẢ</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={[
                  styles.twoRowScrollView,
                  { width: WidthtwoRowScrollView },
                ]}
              >
                {continueSearch?.map((item, index) => {
                  return (
                    <View key={index} style={styles.recentSearchItem}>
                      <Image
                        source={{
                          uri: `${item.image}`,
                        }}
                        style={styles.recentSearchImage}
                      />
                      <View style={styles.recentSearchDetails}>
                        <Text style={styles.recentSearchText}>{item.name}</Text>
                        <Text style={styles.recentSearchSubText}>
                          {item.details}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Weekend Deals Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>ƯU ĐÃI CUỐI TUẦN</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>XEM TẤT CẢ</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Fake Deal Item 1 */}
            <TouchableOpacity
              style={styles.dealItem}
              onPress={() => navigation.navigate("HotelDetails")}
            >
              <View style={styles.dealImage}>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/2148367059/fr/photo/la-ligne-dhorizon-c%C3%B4ti%C3%A8re-de-dakar-s%C3%A9n%C3%A9gal-afrique-de-louest.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAwIfTVBEupXPG_K5DoK1k4kpJ_m7SkDF_UlkLrIcGk=",
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.dealDetails}>
                <Text style={styles.dealName}>Heden golf</Text>
                <View style={styles.dealReviews}>
                  <Icon
                    style={styles.iconStart}
                    name="star"
                    size={24}
                    color="#EBA731"
                  />
                  <Text style={styles.dealPoint}>8.1</Text>
                  <Text style={styles.dealReviewsText}>Đánh giá (556) </Text>
                </View>
                <Text style={styles.dealDesc}>
                  Nằm trong những khu vườn cảnh quan ...
                </Text>
                <View style={styles.dealFooter}>
                  <Text style={styles.dealSale}>Giảm 25%</Text>
                  <Text style={styles.dealPrice}> 127$</Text>
                  <TouchableOpacity>
                    <Text style={styles.dealBooking}>Đặt ngay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            {/* Fake Deal Item 2 */}
          </ScrollView>
        </View>
        <View>
          <Text>{"\n\n"} </Text>
        </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#E0E0E0",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000000",
  },
  body: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  hotelLabelContainer: {
    backgroundColor: "#0090FF",
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 10,
  },
  hotelLabel: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    // borderWidth: 1,
    // borderColor: "#E0E0E0",
    // borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 8,
  },
  inputText: {
    flex: 1,
    marginLeft: 15,
    color: "black",
    fontWeight: "400",
    fontSize: 18,
  },
  arrowIcon: {
    marginLeft: 10,
  },
  searchButton: {
    // backgroundColor: "#00F598", // Thay cho gradient vì thiếu react-native-linear-gradient
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    elevation: 3,
  },
  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "400",
  },
  section: {
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "gray",
    textTransform: "uppercase",
  },
  viewAllText: {
    fontSize: 14,
    color: "#007AFF",
  },
  twoRowScrollView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  recentSearchItem: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    alignItems: "center",
    width: 200,
    height: 70,
    marginBottom: 10,
  },
  recentSearchImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  recentSearchDetails: {
    marginLeft: 10,
    flex: 1,
  },
  recentSearchText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
  },
  recentSearchSubText: {
    fontSize: 10,
    color: "#666666",
    marginTop: 2,
  },
  dealItem: {
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginRight: 10,
    width: 250,
    backgroundColor: "#EFEFEF",
  },
  dealImage: {
    width: 250,
    height: 150,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 240,
    height: 140,
    borderRadius: 5,
  },
  dealDetails: {
    marginLeft: 8,
    marginRight: 10,
    width: "100%",
  },
  dealName: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 5,
    marginBottom: 5,
    color: "black",
  },
  dealReviews: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 5,
  },
  iconStart: {
    marginRight: 10,
  },
  dealPoint: {
    color: "red",
    fontWeight: "400",
    marginRight: 10,
    fontSize: 12,
  },

  dealReact: {
    fontSize: 12,
  },
  dealReviewsText: {
    fontSize: 12,
  },
  dealLocation: {
    color: "black",
    marginRight: 12,
  },
  dealLocationName: {
    fontSize: 12,
  },
  dealFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },
  dealSale: {
    color: "#EBA731",
    fontWeight: "bold",
    fontSize: 14,
  },
  dealPrice: {
    fontWeight: "600",
    fontSize: 14,
  },
  dealDesc: {
    fontSize: 12,
    fontWeight: 400,
    marginBottom: 5,
  },
  dealBooking: {
    fontSize: 14,
    fontWeight: 400,
    borderRadius: 10,
    backgroundColor: "#00F598",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  dealText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 5,
    textAlign: "center",
  },
  searchButton: {
    marginVertical: 15,
    borderRadius: 8,
    overflow: "hidden", // Đảm bảo gradient không bị cắt bởi borderRadius
  },
  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  searchButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
