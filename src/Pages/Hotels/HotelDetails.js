import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  BackHandler,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PriceScreen from "./PriceScreen";
import PhotoScreen from "./PhotoScreen";
import CheckScreen from "./CheckScreen";
import InfoConfirmScreen from "./InfoConfirmScreen";
import OrderConfirmScreen from "./OrderConfirmScreen";

const HotelDetails = ({ navigation }) => {
  const [css, setCss] = useState(1);
  const Tab = createMaterialTopTabNavigator();
  const [showInfoConfirm, setShowInfoConfirm] = useState(false);
  const [showOrderConfirm, setShowOrderConfirm] = useState(true);

  useEffect(() => {
    const backAction = () => {
      if (showInfoConfirm) {
        setShowInfoConfirm(false); // Quay lại trạng thái ban đầu của HotelDetails
        return true; // Ngăn hành vi mặc định (thoát màn hình)
      }

      return false; // Để hành vi mặc định hoạt động (quay về HomeScreen)
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Dọn dẹp listener khi component unmount
  }, [showInfoConfirm]);

  useLayoutEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);

  useEffect(() => {
    const routeName = navigation.getState()?.routes[0]?.state?.routes[0]?.name;
    if (routeName === "Price") setCss(1);
    else if (routeName === "Photo") setCss(2);
    else if (routeName === "Check") setCss(3);
  }, [navigation]);

  useEffect(() => {}, [showInfoConfirm, showOrderConfirm]);

  // Khi navigation thay đổi, cập nhật css
  const handleInfoConfirm = () => {
    setShowInfoConfirm(true);
  };

  const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
      <View style={styles.header__tabs}>
        <TouchableOpacity
          style={[
            styles.header__tab,
            styles.header__tab__1,
            css === 1 && styles.active,
          ]}
          onPress={() => {
            setCss(1);
            navigation.navigate("Price");
          }}
        >
          <Text
            style={[styles.header__tab__text, css === 1 && styles.activeText]}
          >
            Bảng giá (106)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.header__tab, css === 2 && styles.active]}
          onPress={() => {
            setCss(2);
            navigation.navigate("Photo");
          }}
        >
          <Text
            style={[styles.header__tab__text, css === 2 && styles.activeText]}
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
          onPress={() => {
            setCss(3);
            navigation.navigate("Check");
          }}
        >
          <Text
            style={[styles.header__tab__text, css === 3 && styles.activeText]}
          >
            Lần check (24)
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

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
      </View>

      {/* Tab Navigator với tabBar tùy chỉnh */}
      {!showInfoConfirm && !showOrderConfirm && (
        <>
          <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            initialRouteName="Price"
          >
            <Tab.Screen
              name="Price"
              component={PriceScreen}
              options={{ tabBarLabel: "Bảng giá (106)" }}
            />
            <Tab.Screen
              name="Photo"
              component={PhotoScreen}
              options={{ tabBarLabel: "Ảnh (10)" }}
            />
            <Tab.Screen
              name="Check"
              component={CheckScreen}
              options={{ tabBarLabel: "Lần check (24)" }}
            />
          </Tab.Navigator>

          <View style={styles.footer__action}>
            <Text style={styles.footer__price}>
              <Text>127,000Đ</Text>
              <Text style={styles.footer__price__text}>TB/ĐÊM</Text>
            </Text>
            <TouchableOpacity
              style={styles.footer__button}
              onPress={() => handleInfoConfirm()}
            >
              <Text style={styles.footer__button__text}>ĐẶT NGAY</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {showInfoConfirm && <InfoConfirmScreen />}
      {showOrderConfirm && <OrderConfirmScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
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
  // footerfooter: body
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
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    // justifyContent: "space-between",
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

export default HotelDetails;
