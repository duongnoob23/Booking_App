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
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome"; // Sử dụng FontAwesome cho icons
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const PriceScreen = () => {
  const foodList = [
    {
      id: 1,
      name: "Hamberger",
      urL: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Hamberger",
      urL: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Hamberger",
      urL: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Hamberger",
      urL: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Hamberger",
      urL: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
  ];
  return (
    <ScrollView style={styles.body}>
      {/* Title and description */}
      <View style={styles.body__section}>
        <Text style={styles.body__title}>MÔ TẢ KHÁCH SẠN</Text>
        <Text style={styles.body__description}>
          Tọa lạc trong khu vực trung tâm đầy năng động với nhiều khách sạn cao
          cấp, khách sạn Eden Đà Nẵng là điểm đến hoàn hảo cho các kỳ nghỉ dài
          hạn hoặc các chuyến đi công tác ngắn ngày. Khách sạn tọa lạc tại trung
          tâm thành phố Đà Nẵng cách Sân bay Quốc tế Đà Nẵng 17 km.
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
          <Text style={styles.body__info__text}>Đà Nẵng</Text>
        </View>
        <View style={styles.body__info}>
          <Ionicons name="call-outline" size={25} color="#007AFF" />
          <Text style={styles.body__info__text}>+84986156736</Text>
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

      <View style={styles.footer}>
        <View style={styles.footer__food}>
          <View style={styles.footer__food__title}>
            <Text style={styles.footer__food__text}>ĐỒ ĂN</Text>
            <TouchableOpacity>
              <Text style={[styles.footer__food__text, { color: "blue" }]}>
                XEM THÊM
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.footer__food__items}>
              {foodList &&
                foodList?.map((item, index) => {
                  return (
                    <TouchableOpacity key={index}>
                      <Image
                        source={{
                          uri: `${item.urL}`,
                        }}
                        style={styles.footer__food__item}
                      />
                      <Text style={styles.footer__item__text}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
          {/* <View style={styles.footer__food__items}>
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
                    }}
                    style={styles.footer__food__item}
                  />
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
                    }}
                    style={styles.footer__food__item}
                  />
                </View> */}
        </View>

        {/* <Image
          source={{
            uri: "https://maps.googleapis.com/maps/api/staticmap?center=DaNang,Vietnam&zoom=13&size=400x200&key=YOUR_API_KEY",
          }}
          style={styles.footer__map}
        /> */}
      </View>
    </ScrollView>
  );
};

export default PriceScreen;

const styles = StyleSheet.create({
  // Block: body
  body: {
    flex: 1,
  },
  body__section1: {
    backgroundColor: "#EFF3F5",
  },
  body__section: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
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
});
