import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
  Modal,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAppSelector, useAppDispatch } from "../../Redux/hook";
import { addServiceToRoom } from "../../Redux/Slice/hotelSlice";

const OrderFood = ({ navigation, route }) => {
  // State để quản lý loại đồ ăn được focus
  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    type: "AMENITY",
  });
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null); // là dịch vụ đã ấn thêm

  const [addService, setAddService] = useState([]); // là các dịch vụ ấn thêm mà chưa xác nhận
  // nhưng nó ko phải ở dạng [1,2,3,4,5] như vậy thì ko biết là thêm dịch vụ cho room nào
  // nó sẽ ở dạng
  // const addService = [
  //   { room1_1, serviceIds: [1, 2, 3] },
  //   { room1_1, serviceIds: [4, 5, 2929] },
  // ];
  // console.log(selectedService);
  // console.log(selectedCategory);

  const { serviceList } = useAppSelector((state) => state.service);
  const { bookingPayload } = useAppSelector((state) => state.hotel);

  console.log(
    ">>> 41 bookingPayload >>>"
    // bookingPayload.roomRequestList[0].serviceIdList
  );
  // const listRoom = bookingPayload?.roomBookedList;
  const listRoom = bookingPayload?.roomRequestList;
  console.log(">>> listRoom", listRoom);
  const categories = Object.keys(serviceList).map((key, index) => ({
    id: index + 1,
    name: key,
  }));

  // console.log(categories);
  // const check = bookingPayload?.roomBookedList?.map((item, index) => {
  //    console.log(item.serviceSelect);
  // });
  // console.log(check);
  // sau khi setCategory = lunch thì foodItem sẽ lấy ra những món ăn của lunch thông qua serviceList vì serviceList nó đã tách riêng các dịch vụ ra rồi , chỉ còn đợi gọi tới
  // ví dụ serviceList[lunch]  thôi
  // fooodItem sẽ là mảng lunch[]
  const foodItems = serviceList[`${selectedCategory?.type}`];

  const handleToFoodDetails = () => {
    navigation.navigate("FoodDetails");
  };

  const handleBack = () => {
    console.log(route?.params?.prePage);
    if (route?.params?.prePage === "OrderConfirm") {
      navigation.navigate("OrderConfirm");
    } else {
      // } else if (route?.params.prePage === "HotelRoomList") {
      navigation.goBack();
    }
  };

  const handleOrder = (item) => {
    setSelectedService(item); // đẩy món ăn ,dịch vụ vào trong setSelectService,
    // console.log(">>> item", item);
    setAddService([]); // Reset addService khi mở modal
    setModalVisible(true);
  };

  // console.log(categories[0]);

  const handleUpdateSelectCategory = (item) => {
    const selectedCategory_ = {
      id: item.id,
      type: item.name,
    };
    setSelectedCategory(selectedCategory_);
  };

  // const test = {
  //   adults: 0,
  //   priceRoom: 1080000,
  //   priceService: 0,
  //   roomId: 2,
  //   roomName: "Phòng Deluxe Gia đình VIP",
  //   serviceSelect: [],
  //   uniqueId: "room2_1",
  // };

  const handleAddServiceToRoom = (uniqueId) => {
    setAddService((pre) => {
      // kiểm tra có tồn tại uniqueId đó trong addService hay ko
      // nếu có rồi thì thêm serviceid vào mảng serviceIds của phần tử đó
      const exitRoom = pre.find((item) => item.uniqueId === uniqueId);
      if (exitRoom) {
        return pre.map((item, index) => {
          // { room1_1, serviceIds[1]} => {...item,serviceIds:[...item.serviceIds,selectedService.id]}
          item.uniqueId === uniqueId
            ? { ...item, serviceIds: [...item.serviceIds, selectedService.id] }
            : item;
        });
      }
      // nếu chưa có thì trả về mảng cũ và thêm {roomId, mảng dịch vụ vào}
      return [...pre, { uniqueId, serviceIds: [selectedService.id] }];
    });
  };

  const handleConfirmOrder = () => {
    if (addService.length > 0) {
      console.log("step11111111111111111111111111111111111");
      dispatch(addServiceToRoom(addService));
    }
    setAddService([]);
    setModalVisible(false);
  };

  const imageTest =
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop";
  // Hàm render mỗi món ăn

  // console.log("----------------");
  // bookingPayload?.roomBookedList?.forEach((item) => {
  //   console.log(`item ${item.uniqueId}`, item.serviceSelect);
  // });
  // THÊM DỊCH VỤ CHO PHÒNG------------------------------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // roomRequestList là mảng gửi lên ,roomBookedList là mảng trả về từ Server
  const renderRoomItem = ({ item }) => {
    // item trong này là các phòng đã book

    // console.log(">>> room item >>>", item);
    const roomService2 = addService?.find(
      (room) => room.uniqueId === item.uniqueId
    );

    console.log(item);
    // tìm thằng room1_1 trong addService xem phần serviceIds có thằng id này ko

    const check1 = item?.serviceIdList?.includes(selectedService?.id);

    const check2 = roomService2?.serviceIds?.includes(selectedService?.id);

    const check = check1 || check2;

    return (
      <View style={styles.roomWrapper}>
        <View style={styles.roomInfo}>
          <Text style={styles.roomLabel}>Tên Phòng</Text>
          <Text style={styles.roomValue}>{item.roomName}</Text>
        </View>
        <View style={styles.roomInfo}>
          <Text style={styles.roomLabel}>Loại phòng</Text>
          <Text style={styles.roomValue}>
            {item.roomType || "Không xác định"}
          </Text>
        </View>
        <View style={styles.roomInfo}>
          <Text style={styles.roomLabel}>Số hkách</Text>
          <Text style={styles.roomValue}>{item.adults} người</Text>
        </View>
        <View style={styles.roomInfo}>
          <Text style={styles.roomLabel}>Giá</Text>
          <Text style={styles.roomValue}>{item.priceRoom} VNĐ</Text>
        </View>
        <View style={styles.roomInfo}>
          <Text style={styles.roomLabel}>Dịch vụ</Text>
          {/* <Text style={styles.roomValue}>
            {item.serviceSelect.length > 0
              ? item.serviceSelect.join(", ")
              : "Chưa có"}
          </Text> */}
          <TouchableOpacity
            style={[styles.addServiceButton, check && styles.disabledButton]}
            onPress={() => handleAddServiceToRoom(item.uniqueId)}
            disabled={check}
          >
            <Text style={styles.addServiceButtonText}>
              {check ? "Đã thêm" : "Thêm"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  // CHỌN DỊCH VỤ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const renderFoodItem = ({ item }) => (
    <TouchableOpacity
      style={styles.foodItem}
      onPress={() => handleToFoodDetails()}
    >
      {/* <Image source={{ uri: item.image }} style={styles.foodImage} /> */}
      <Image source={{ uri: imageTest }} style={styles.foodImage} />
      <View style={styles.foodInfo}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.priceContainer}>
          {/* <Text style={styles.discount}>{item.discount}</Text> */}
          <Ionicons name={"cash-outline"} size={20} />
          <Text style={styles.price}>{item.price} </Text>
          <Text>VNĐ</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleOrder(item)}
      >
        <Text style={styles.addButtonText}>Thêm</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleBack()}>
          <Ionicons name="chevron-back-outline" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đồ ăn</Text>
      </View>

      <View style={styles.bodySection1}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.list}>
            {categories?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.item]}
                  onPress={() => handleUpdateSelectCategory(item)}
                >
                  <View
                    style={[
                      styles.itemIcon,
                      selectedCategory.id === item.id ? styles.selectFood : "",
                    ]}
                  >
                    <Ionicons
                      name={"add-outline"}
                      size={28}
                      color={
                        selectedCategory.id === item.id ? "white" : "#B7C9D4"
                      }
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

      {/* Danh sách món ăn (Food List) */}
      <FlatList
        data={foodItems}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
        style={styles.foodList}
        showsVerticalScrollIndicator={false}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerCount}>Tổng số: 2</Text>
          <Text style={styles.footerPrice}>Tổng giá: 50.000Đ</Text>
        </View>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => handleToFoodCart()}
        >
          <Ionicons name="cart-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Chọn phòng để thêm dịch vụ</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close-outline" size={28} color="#000" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={listRoom}
              renderItem={renderRoomItem}
              keyExtractor={(item) => item.uniqueId}
              style={styles.roomList}
            />
            <TouchableOpacity
              style={styles.addButtonConfirm}
              onPress={() => handleConfirmOrder()}
            >
              <Text style={styles.addButtonConfirmText}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default OrderFood;
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
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "500",
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
    color: "#FFD700",
    fontWeight: "bold",
    marginLeft: "5",
  },
  addButton: {
    backgroundColor: "#00F598",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButtonText: {
    fontSize: 15,
    color: "white",
    fontWeight: "400",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  roomList: {
    flexGrow: 0,
  },
  roomWrapper: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    marginBottom: 8,
  },
  roomInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  roomLabel: {
    fontSize: 14,
    color: "#666",
    width: 100,
  },
  roomValue: {
    fontSize: 14,
    color: "#000",
    flex: 1,
    textAlign: "right",
  },
  addServiceButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: "#B7C9D4",
  },
  addServiceButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  addButtonConfirm: {
    backgroundColor: "#00F598",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButtonConfirmText: {
    fontSize: 15,
    color: "white",
    fontWeight: "400",
    textAlign: "center",
  },
});

{
  /* <ScrollView
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
      </ScrollView> */
}

// viêts navigation top bar
// viết danh sách món ăn theo top bar
// css lại phàn giỏ hàng và tổng tiền
// cách sử dụng redux chia sẻ data giữa các component
// ấn nút thêm thì sẽ thêm sản phẩm vào shopcart
// hiêu ứng sản phẩm nhảy vào shop
