import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Sử dụng FontAwesome cho icons

const HomeScreen = () => {
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
        <TouchableOpacity style={styles.searchButton}>
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Fake Recent Search Item 1 */}
            <View style={styles.recentSearchItem}>
              <Image
                source={{
                  uri: "https://media.istockphoto.com/id/2148367059/fr/photo/la-ligne-dhorizon-c%C3%B4ti%C3%A8re-de-dakar-s%C3%A9n%C3%A9gal-afrique-de-louest.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAwIfTVBEupXPG_K5DoK1k4kpJ_m7SkDF_UlkLrIcGk=",
                }}
                style={styles.recentSearchImage}
              />
              <View style={styles.recentSearchDetails}>
                <Text style={styles.recentSearchText}>Ivory Coast</Text>
                <Text style={styles.recentSearchSubText}>
                  23-26 Tháng 8, 6-7 Người lớn, 1 trẻ em
                </Text>
              </View>
            </View>
            {/* Fake Recent Search Item 2 */}
            <View style={styles.recentSearchItem}>
              <Image
                source={{
                  uri: "https://media.istockphoto.com/id/840793714/fr/photo/dazur-%C3%A0-nice.webp?a=1&b=1&s=612x612&w=0&k=20&c=jObDEGRB-t88Z8gV5ajGiUfGYTlSlVSioFItP5VLQbk=",
                }}
                style={styles.recentSearchImage}
              />
              <View style={styles.recentSearchDetails}>
                <Text style={styles.recentSearchText}>Senegal</Text>
                <Text style={styles.recentSearchSubText}>
                  23-26 Tháng 8, 6-7 Người lớn, 1 trẻ em
                </Text>
              </View>
            </View>
          </ScrollView>
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
            <View style={styles.dealItem}>
              <Image
                source={{ uri: "https://via.placeholder.com/100" }}
                style={styles.dealImage}
              />
              <Text style={styles.dealText}>Heden Golf</Text>
            </View>
            {/* Fake Deal Item 2 */}
            <View style={styles.dealItem}>
              <Image
                source={{ uri: "https://via.placeholder.com/100" }}
                style={styles.dealImage}
              />
              <Text style={styles.dealText}>Onomo</Text>
            </View>
            {/* Fake Deal Item 3 */}
            <View style={styles.dealItem}>
              <Image
                source={{ uri: "https://via.placeholder.com/100" }}
                style={styles.dealImage}
              />
              <Text style={styles.dealText}>Adagio</Text>
            </View>
            {/* Fake Deal Item 4 */}
            <View style={styles.dealItem}>
              <Image
                source={{ uri: "https://via.placeholder.com/100" }}
                style={styles.dealImage}
              />
              <Text style={styles.dealText}>Sofitel</Text>
            </View>
          </ScrollView>
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
    backgroundColor: "#00F598", // Thay cho gradient vì thiếu react-native-linear-gradient
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
    marginTop: 20,
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
  recentSearchItem: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    alignItems: "center",
    width: 250,
  },
  recentSearchImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  recentSearchDetails: {
    marginLeft: 10,
    flex: 1,
  },
  recentSearchText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  recentSearchSubText: {
    fontSize: 12,
    color: "#666666",
    marginTop: 2,
  },
  dealItem: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginRight: 10,
    width: 100,
  },
  dealImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  dealText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 5,
    textAlign: "center",
  },
});

export default HomeScreen;
