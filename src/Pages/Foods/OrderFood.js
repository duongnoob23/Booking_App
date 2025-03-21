import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const OrderFood = ({ navigation }) => {
  // State để quản lý loại đồ ăn được focus
  const [selectedCategory, setSelectedCategory] = useState(1);
  console.log(selectedCategory);
  // Danh sách loại đồ ăn (giả lập)
  const categories = [
    "Bữa sáng",
    "Burgers",
    "Pizza",
    "Món ăn kèm",
    "Đồ uống",
    "Salads",
  ];

  const categories2 = [
    {
      id: 1,
      name: "Bữa sáng",
      nameIcon: "fast-food-outline",
    },
    {
      id: 2,
      name: "Bữa sáng",
      nameIcon: "pizza-outline",
    },
    {
      id: 3,
      name: "Bữa sáng",
      nameIcon: "beef-outline",
    },
    {
      id: 4,
      name: "Bữa sáng",
      nameIcon: "fast-food-outline",
    },
    {
      id: 5,
      name: "Bữa sáng",
      nameIcon: "fast-food-outline",
    },
    {
      id: 6,
      name: "Bữa sáng",
      nameIcon: "fast-food-outline",
    },
  ];
  // Danh sách món ăn (giả lập)
  const foodItems = [
    {
      id: "1",
      name: "Hamburger",
      rating: 3.9,
      reviews: 200,
      description: "Rất ngon",
      price: "25.000Đ",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop", // Thay bằng URL ảnh thực tế
    },
    {
      id: "2",
      name: "Bánh mì pate",
      rating: 3.9,
      reviews: 200,
      description: "Rất ngon",
      price: "15.000Đ",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "Sandwich",
      rating: 3.9,
      reviews: 200,
      description: "Rất ngon",
      price: "50.000Đ",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "4",
      name: "Burger",
      rating: 3.9,
      reviews: 200,
      description: "Rất ngon",
      price: "8.000Đ",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "5",
      name: "Burger",
      rating: 3.9,
      reviews: 200,
      description: "Rất ngon",
      price: "8.000Đ",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "6",
      name: "Burger",
      rating: 3.9,
      reviews: 200,
      description: "Rất ngon",
      price: "8.000Đ",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  const handleToFoodDetails = () => {
    navigation.navigate("FoodDetails");
  };
  console.log(categories[0]);
  // Hàm render mỗi món ăn
  const renderFoodItem = ({ item }) => (
    <View style={styles.foodItem}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <View style={styles.foodInfo}>
        <Text style={styles.foodName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
          <Text style={styles.reviewsText}>Đánh giá ({item.reviews})</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discount}>{item.discount}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleToFoodDetails()}
      >
        <Text style={styles.addButtonText}>Thêm</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back-outline" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đồ ăn</Text>
      </View>

      <View style={styles.bodySection1}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.list}>
            {categories2.map((item, index) => {
              return (
                <TouchableOpacity key={item.id} style={[styles.item]}>
                  <View
                    style={[
                      styles.itemIcon,
                      selectedCategory === item.id ? styles.selectFood : "",
                    ]}
                  >
                    <Ionicons
                      name={item.nameIcon}
                      size={28}
                      color={selectedCategory === item.id ? "white" : "#B7C9D4"}
                    />
                  </View>
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      {/* Danh sách loại đồ ăn (Category List) */}
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryItem,
              //   selectedCategory === category
              //     ? styles.categoryItemFocused
              //     : styles.categoryItemUnfocused,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={
                selectedCategory === category
                  ? styles.categoryTextFocused
                  : styles.categoryTextUnfocused
              }
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}

      {/* Danh sách món ăn (Food List) */}
      <FlatList
        data={foodItems}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
        style={styles.foodList}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerCount}>Tổng số: 2</Text>
          <Text style={styles.footerPrice}>Tổng giá: 50.000Đ</Text>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // Header
  header: {
    flexDirection: "row",
    padding: 15,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },
  bodySection1: {},
  // Category List
  categoryList: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#E0E8ED",
  },
  categoryItemFocused: {
    backgroundColor: "#00BD6B",
  },
  categoryItemUnfocused: {
    backgroundColor: "#E0E8ED",
  },
  categoryTextFocused: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  categoryTextUnfocused: {
    color: "#B7C9D4",
    fontSize: 14,
  },
  list: {
    flexDirection: "row", // Đặt các item theo hàng ngang
    paddingVertical: 10, // Thêm padding để dễ nhìn
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    paddingHorizontal: 5, // Thêm padding ngang cho item
    paddingVertical: 5, // Thêm padding dọc cho item
    marginHorizontal: 5, // Khoảng cách giữa các item
    borderRadius: 15, // Bo góc cho item
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  itemIcon: {
    width: "50",
    height: "50",
    // padding: 10,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E8ED",
    color: "#B7C9D4",
  },
  itemText: {
    color: "#black", // Màu chữ trắng để dễ nhìn trên nền đỏ
    fontSize: 14,
    fontWeight: "400",
  },
  selectFood: {
    backgroundColor: "#00BD6B",
    color: "#white",
  },
  // Food List
  foodList: {
    flex: 1,
  },
  foodItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    alignItems: "flex-end",
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 5,
  },
  reviewsText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 5,
  },
  description: {
    fontSize: 12,
    color: "#666",
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: 5,
    // justifyContent: "space-around",
  },
  discount: {
    fontSize: 14,
    color: "#FFD700",
    marginRight: 5,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    marginLeft: "20",
  },
  addButton: {
    backgroundColor: "#00F598",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  // Footer
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingLeft: 10,
  },
  footerCount: {
    fontSize: 12,
    color: "#666",
  },
  footerPrice: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },
  cartButton: {
    backgroundColor: "#00F598",
    padding: 20,
    borderRadius: 0,
    width: "auto",
    height: "100%",
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
});

export default OrderFood;
