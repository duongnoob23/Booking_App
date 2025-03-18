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
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome"; // Sử dụng FontAwesome cho icons

const HotelDetails = ({ navigation }) => {
  const [css, setCss] = useState(1);

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
  ];
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.header__image}
        >
          {/* Overlay for back and share icons */}
          <View style={styles.header__overlay}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.header__title}>Heden Golf</Text>
            <TouchableOpacity style={styles.header__icon__start}>
              <Ionicons name="share-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          {/* Hotel title */}

          <View style={styles.header__info}>
            <View style={styles.header__rating}>
              <View style={styles.header__rating__group}>
                <View>
                  <Icon
                    style={styles.iconStart}
                    name="star"
                    size={24}
                    color="#EBA731"
                  />
                </View>
                <View>
                  <Text style={styles.header__rating__score}>8.9</Text>
                </View>
              </View>
              <Text style={styles.header__rating__text}>
                85/100 Người đã thích
              </Text>
            </View>
            <View style={styles.header__location}>
              <View>
                <Icon name="map-marker" size={16} color="white" />
              </View>
              <View style={styles.header__location__text}>
                <Text style={{ color: "white" }}>Đà Nẵng</Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Rating and location */}

        {/* Tabs */}
        <View style={styles.header__tabs}>
          <TouchableOpacity
            style={[
              styles.header__tab,
              styles.header__tab__1,
              css === 1 && styles.active,
            ]}
            onPress={() => setCss(1)}
          >
            <Text
              style={(styles.header__tab__text, css === 1 && styles.activeText)}
            >
              Bảng giá (106)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.header__tab, css === 2 && styles.active]}
            onPress={() => setCss(2)}
          >
            <Text
              style={(styles.header__tab__text, css === 2 && styles.activeText)}
            >
              Ảnh (10)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.header__tab,
              styles.header__tab__3,
              css === 3 && styles.active,
            ]}
            onPress={() => setCss(3)}
          >
            <Text
              style={(styles.header__tab__text, css === 3 && styles.activeText)}
            >
              Lần check (24)
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <ScrollView style={styles.body}>
        {/* Title and description */}
        <View style={styles.body__section}>
          <Text style={styles.body__title}>MÔ TẢ KHÁCH SẠN</Text>
          <Text style={styles.body__description}>
            Tọa lạc trong khu vực trung tâm đầy năng động với nhiều khách sạn
            cao cấp, khách sạn Eden Đà Nẵng là điểm đến hoàn hảo cho các kỳ nghỉ
            dài hạn hoặc các chuyến đi công tác ngắn ngày. Khách sạn tọa lạc tại
            trung tâm thành phố Đà Nẵng cách Sân bay Quốc tế Đà Nẵng 17 km.
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
            <Text style={styles.body__dropdown__text}>
              Ngày và giờ trả phòng
            </Text>
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
                        <Text style={styles.footer__item__text}>
                          {item.name}
                        </Text>
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

          <Image
            source={{
              uri: "https://maps.googleapis.com/maps/api/staticmap?center=DaNang,Vietnam&zoom=13&size=400x200&key=YOUR_API_KEY",
            }}
            style={styles.footer__map}
          />

          <View style={styles.footer__action}>
            <Text style={styles.footer__price}>127,000Đ</Text>
            <TouchableOpacity style={styles.footer__button}>
              <Text style={styles.footer__button__text}>ĐẶT NGAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Block: container
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Block: header
  header: {
    backgroundColor: "#fff",
  },
  header__image: {
    width: "100%",
    height: 250,
    justifyContent: "space-between",
  },
  header__overlay: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  header__icon__start: {
    marginLeft: "auto",
  },
  header__title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    padding: 15,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  header__info: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "flex-end",
  },
  header__rating: {
    flexDirection: "column",
    alignItems: "flex-star",
  },
  header__rating__group: {
    flexDirection: "row",
    width: 200,
    alignItems: "center",
    // justifyContent: "space-between",
  },
  header__rating__score: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
    marginLeft: 5,
  },
  iconStart: {
    fontSize: 16,
  },
  header__rating__text: {
    fontSize: 14,
    color: "white",
  },
  header__location: {
    fontSize: 14,
    color: "white",
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  header__location__text: {
    marginLeft: 5,
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
    paddingHorizontal: 15,
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
    width: 100,
    height: 100,
    borderRadius: 10,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
  },
  footer__button: {
    backgroundColor: "#00C4B4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  footer__button__text: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HotelDetails;
