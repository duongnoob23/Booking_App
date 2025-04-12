// src/Pages/HotelDetails/HotelDetails.js
import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  navigation,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome"; // Sử dụng FontAwesome cho icons
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useAppSelector } from "../../Redux/hook";
import SkeletonPriceScreen from "../../Components/Skeleton/Hotels/SkeletonPriceScreen";
import RateReviews from "../Reviews/RateReviews";
import MapPriceScreen from "../../Components/Map/MapPriceScreen";
const PriceScreen = ({ navigation, route }) => {
  // console.log(">>> route PriceScreen", route);
  // const [dataPrice, setDataPrice] = useState(route.params.data);
  // console.log(">>> dataPrice", dataPrice);

  const { hotelList, hotelDetail, loading, error } = useAppSelector(
    (state) => state.hotel
  );
  // console.log("------------------------------");
  // console.log(">>> 53 PriceScreen", hotelDetail);
  const handleOrderFood = () => {
    navigation.navigate("OrderFood");
  };

  const handleToFoodDetail = () => {
    navigation.navigate("FoodDetails");
  };

  // if (loading) {
  //   return <SkeletonPriceScreen />;
  // }

  const ratingsData = [
    {
      id: "1",
      name: "Duy",
      time: "20 mins ago",
      content: "Khách sạn đẹp, đồ ăn tuyệt vời",
      score: 4.5,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40&q=80",
    },
    {
      id: "2",
      name: "Hương",
      time: "2 days ago",
      content: "Không thể quên được. Rất thích nơi này!",
      score: 5,
      image:
        "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "Quân",
      time: "2 days ago",
      content: "Đẹp, thích vui",
      score: 4.5,
      image: "",
    },
  ];
  return (
    <ScrollView style={styles.body}>
      {/* Title and description */}
      <View style={styles.body__section}>
        <Text style={styles.body__title}>MÔ TẢ KHÁCH SẠN</Text>
        <Text style={styles.body__description}>
          {hotelDetail && hotelDetail.review.description}
          {/* {hotelDetail && hotelDetail.review.} */}
        </Text>
      </View>
      {/* Facilities */}
      <View style={styles.body__section1}>
        <Text style={styles.body__subtitle}>TIỆN ÍCH</Text>
        <View style={styles.body__facilities}>
          <View style={styles.body__facility}>
            <Ionicons name="wifi-outline" size={44} color="#007AFF" />
            <Text style={styles.body__facility__text}>WiFi</Text>
          </View>
          <View style={styles.body__facility}>
            <Ionicons name="barbell-outline" size={44} color="#007AFF" />
            <Text style={styles.body__facility__text}>Phòng Gym</Text>
          </View>
          <View style={styles.body__facility}>
            <Ionicons name="restaurant-outline" size={44} color="#007AFF" />
            <Text style={styles.body__facility__text}>Bữa sáng miễn phí</Text>
          </View>
          <View style={styles.body__facility}>
            <Ionicons name="happy-outline" size={44} color="#007AFF" />
            <Text style={styles.body__facility__text}>Phích hợp trẻ em</Text>
          </View>
        </View>
      </View>
      {/* Check-in/out info */}
      <View style={styles.body__section}>
        <View style={styles.body__info}>
          <Ionicons name="location-outline" size={25} color="#007AFF" />
          <Text style={styles.body__info__text}>
            {hotelDetail && hotelDetail.review.location}
          </Text>
        </View>
        <View style={styles.body__info}>
          <Ionicons name="call-outline" size={25} color="#007AFF" />
          <Text style={styles.body__info__text}>
            {hotelDetail && hotelDetail.review.phoneNumber}
          </Text>
        </View>
        <View style={styles.body__info__view}>
          <View style={styles.body__info}>
            <Ionicons name="calendar-outline" size={25} color="#007AFF" />
            <Text style={styles.body__info__text}>Nhận phòng: 12:00</Text>
          </View>
          <View style={styles.body__info}>
            <Ionicons name="calendar-outline" size={25} color="#007AFF" />
            <Text style={styles.body__info__text}>Trả phòng: 14:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.body__section2}>
        <View style={styles.body__service}>
          <Ionicons name="fast-food-outline" size={25} color="#007AFF" />
          <Text style={styles.body__service__text}>Bữa tối</Text>
        </View>
        <View style={styles.body__service}>
          <Ionicons name="logo-octocat" size={25} color="#007AFF" />
          <Text style={styles.body__service__text}>Thú cưng</Text>
        </View>
        <View style={styles.body__service}>
          <Ionicons name="business-outline" size={25} color="#007AFF" />
          <Text style={styles.body__service__text}>Phòng vip</Text>
        </View>
        <View style={styles.body__service}>
          <Ionicons name="pizza-outline" size={25} color="#007AFF" />
          <Text style={styles.body__service__text}>Bữa sáng</Text>
        </View>
        <View style={styles.body__service}>
          <Ionicons name="water-outline" size={25} color="#007AFF" />
          <Text style={styles.body__service__text}>Bể bơi</Text>
        </View>
        <View style={styles.body__service}>
          <Ionicons name="diamond-outline" size={25} color="#007AFF" />
          <Text style={styles.body__service__text}>Dịch vụ cao cấp</Text>
        </View>
      </View>

      {/* Room info */}
      <View style={styles.body__section3}>
        <Text style={styles.body__subtitle3}>PHÒNG CÒN TRỐNG</Text>
        <TouchableOpacity style={styles.body__dropdown}>
          <Ionicons name="calendar-outline" size={25} color="#007AFF" />
          <Text style={styles.body__dropdown__text}>
            Ngày và giờ nhận phòng
          </Text>
          <Ionicons
            name="chevron-down"
            size={20}
            color="black"
            style={styles.icon__chevron_down}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.body__dropdown}>
          <Ionicons name="calendar-outline" size={25} color="#007AFF" />
          <Text style={styles.body__dropdown__text}>Ngày và giờ trả phòng</Text>
          <Ionicons
            name="chevron-down"
            size={20}
            color="black"
            style={styles.icon__chevron_down}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.body__dropdown}>
          <Ionicons name="business-outline" size={25} color="#007AFF" />
          <Text style={styles.body__dropdown__text}>
            0 Người lớn. 0 Trẻ em. 0 Phòng
          </Text>
          <Ionicons
            name="chevron-down"
            size={20}
            color="black"
            style={styles.icon__chevron_down}
          />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.footer}>
        <View style={styles.footer__food}></View>
      </View> */}

      <View style={styles.map}>
        <View style={styles.mapView}>
          <Text style={styles.mapViewTitle}>VỊ TRÍ KHÁCH SẠN</Text>
        </View>
        <MapPriceScreen />
      </View>

      {/* <RateReviews /> */}
      <View style={styles.ratings}>
        <View style={styles.ratingsTitle}>
          <Text style={styles.ratingsTitleText}>XẾP HẠNG ĐÁNH GIÁ</Text>
        </View>
        <View style={styles.ratings__writeButton}>
          <Text style={[styles.ratings__writeButtonText, { color: "black" }]}>
            Tóm tắt đánh giá{" "}
          </Text>
          <Text style={styles.ratings__writeButtonText}> + VIẾT ĐÁNH GIÁ</Text>
        </View>

        <View style={styles.ratings__stats}>
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
        </View>
        <View style={styles.ratings__option}>
          <View style={styles.ratings__optionList}>
            <View style={styles.ratings__optionItem}>
              <Text style={styles.ratings__label}>Phòng </Text>
              <Text style={styles.ratings__text}>4.5</Text>
            </View>
            <View style={styles.ratings__optionItem}>
              <Text style={styles.ratings__label}>Địa điểm </Text>
              <Text style={styles.ratings__text}>4.8</Text>
            </View>
            <View style={styles.ratings__optionItem}>
              <Text style={styles.ratings__label}>Dịch vụ</Text>
              <Text style={styles.ratings__text}>4.4</Text>
            </View>
          </View>
        </View>

        <View style={styles.ratings__statsScore}>
          <Text style={styles.ratings__statsScoreValue}>4.4</Text>
          <View style={styles.ratings__statsScoreLabel}>
            <Text>Rất tốt</Text>
            <View style={styles.start}>
              <Ionicons
                style={styles.iconBed}
                name="star"
                size={15}
                color="orange"
              />
              <Ionicons
                style={styles.iconBed}
                name="star"
                size={15}
                color="orange"
              />
              <Ionicons
                style={styles.iconBed}
                name="star"
                size={15}
                color="orange"
              />
              <Ionicons
                style={styles.iconBed}
                name="star"
                size={15}
                color="orange"
              />
              <Ionicons
                style={styles.iconBed}
                name="star-half"
                size={15}
                color="orange"
              />
            </View>
          </View>
        </View>
        {ratingsData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.ratings__item}
            onPress={() => navigation.navigate("RateDetails")}
          >
            <Image
              source={{
                uri: "https://media.istockphoto.com/id/2148367059/fr/photo/la-ligne-dhorizon-c%C3%B4ti%C3%A8re-de-dakar-s%C3%A9n%C3%A9gal-afrique-de-louest.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAwIfTVBEupXPG_K5DoK1k4kpJ_m7SkDF_UlkLrIcGk=",
              }}
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
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default PriceScreen;

const styles = StyleSheet.create({
  // Block: body
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  body__section1: {
    // backgroundColor: "#EFF3F5",
    backgroundColor: "white",
  },
  body__section: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "white",
  },
  body__title: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 10,
    textAlign: "center",
  },
  body__description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    textAlign: "center",
  },
  body__subtitle: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
    textAlign: "center",
  },
  body__facilities: {
    flexDirection: "row",
  },
  body__facility: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    marginBottom: 10,
  },
  body__facility__text: {
    fontSize: 12,
    marginLeft: 5,
    color: "#555",
    textAlign: "center",
  },
  body__info__view: {
    flexDirection: "row",
  },
  body__info: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginRight: 40,
  },
  body__info__text: {
    fontSize: 14,
    marginLeft: 5,
    color: "#555",
  },
  body__section3: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  body__subtitle3: {
    fontSize: 20,
    fontWeight: 400,
    paddingBottom: 10,
  },
  body__dropdown: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  body__dropdown__text: {
    paddingLeft: 10,
    fontSize: 14,
    color: "black",
  },
  icon__chevron_down: {
    marginLeft: "auto",
  },
  body__section2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#EFF3F5",
    backgroundColor: "white",
  },
  body__service: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
    marginVertical: 10,
  },
  body__service__text: {
    marginLeft: 10, // Khoảng cách giữa icon và text
    fontSize: 14, // Kích thước chữ (tùy chỉnh nếu cần)
    color: "#000", // Màu chữ (tùy chỉnh nếu cần)
  },
  // Block: footer
  footer: {
    padding: 15,
    backgroundColor: "#f8f8f8",
  },
  footer__food: {
    marginBottom: 15,
  },
  footer__food__title: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer__food__text: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  footer__food__items: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer__food__item: {
    width: 120,
    height: 100,
    borderRadius: 15,
    marginRight: 10,
  },
  footer__item__text: {
    textAlign: "center",
    fontWeight: "300",
  },
  footer__food__more: {
    fontSize: 14,
    color: "#007AFF",
  },
  footer__map: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  footer__action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer__price: {
    flexDirection: "column",

    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    width: "50%",
  },
  footer__price__text: {
    fontSize: 16,
    fontWeight: "300",
  },
  footer__button: {
    width: "50%",
    backgroundColor: "#00F598",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  footer__button__text: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  map: {
    backgroundColor: "white",
    marginVertical: 40,
  },
  mapView: {
    marginLeft: 20,
  },
  mapViewTitle: {
    fontSize: 20,
    fontWeight: 400,
    paddingBottom: 10,
  },
  ratings: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  ratingsTitle: {},
  ratingsTitleText: {
    fontSize: 20,
    fontWeight: 400,
    paddingBottom: 10,
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
    marginLeft: 10,
  },
  ratings__search: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 15,
  },
  ratings__search__Input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    color: "#000000",
    //     marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ratings__writeButton: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratings__writeButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0090FF",
  },
  ratings__stats: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  ratings__statsScore: {
    marginRight: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  ratings__statsScoreValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
  },
  ratings__statsScoreLabel: {
    fontSize: 16,
    color: "#000000",
    marginLeft: 20,
  },
  start: {
    flexDirection: "row",
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
  ratings__option: {
    marginBottom: 20,
  },
  ratings__optionList: {
    flexDirection: "row",
    //     justifyContent: "space-around",
    alignItems: "center",
  },
  ratings__optionItem: {
    width: "33%",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "gray",
    borderRightWidth: 1,
  },
  ratings__text: {
    textAlign: "center",
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

//  const foodList = [
//    {
//      id: 1,
//      name: "Hamberger",
//      urL: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
//    },
//    {
//      id: 2,
//      name: "Hamberger",
//      urL: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
//    },
//    {
//      id: 3,
//      name: "Hamberger",
//      urL: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
//    },
//    {
//      id: 4,
//      name: "Hamberger",
//      urL: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
//    },
//    {
//      id: 5,
//      name: "Hamberger",
//      urL: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
//    },
//  ];
