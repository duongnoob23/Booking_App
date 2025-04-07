import React from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const rooms = [
  {
    roomId: 2,
    roomName: "Phòng Deluxe Gia đình VIP",
    area: 30,
    bed: "2 giường đôi lớn",
    image:
      "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729241122/Room/nipyn0qgyoyhtgkadlyi.jpg",
    serviceEntityList: [
      {
        id: 2,
        name: "Phòng tắm riêng",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 14,
        name: "Ghế cao dành cho trẻ em",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 18,
        name: "Tủ lạnh",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 9,
        name: "Khăn tắm",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 22,
        name: "Ấm đun nước điện",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
    ],
    selectDay: 1,
    price: 1080000.0,
    promotionPrice: 1200000.0,
    promotion: { id: 1, name: "Ưu đãi đầu năm 2025", discountValue: "10%" },
    roomQuantity: 2,
    policyRoomList: [
      {
        policyId: 4,
        policyName: "Person an room",
        policyDescription: "Miễn phí cho trẻ dưới 6 tuổi",
      },
      {
        policyId: 2,
        policyName: "Check out time",
        policyDescription: "Trả phòng trước 11:30",
      },
      {
        policyId: 1,
        policyName: "Check in time",
        policyDescription: "Nhận phòng từ 15:00",
      },
      {
        policyId: 3,
        policyName: "CANCEL ROOM",
        policyDescription: "Hủy trước 48h được hoàn 50%",
      },
    ],
  },
  {
    roomId: 1,
    roomName: "Phòng tiêu chuẩn",
    area: 20,
    bed: "1 giường đôi",
    image:
      "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729241122/Room/nipyn0qgyoyhtgkadlyi.jpg",
    serviceEntityList: [
      {
        id: 1,
        name: "Nhìn ra thành phố",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 10,
        name: "Ra trải giường",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 21,
        name: "Dịch vụ báo thức",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 15,
        name: "Khu vực tiếp khách",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 27,
        name: "Giấy vệ sinh",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
    ],
    selectDay: 1,
    price: 855000.0,
    promotionPrice: 950000.0,
    promotion: { id: 1, name: "Ưu đãi đầu năm 2025", discountValue: "10%" },
    roomQuantity: 4,
    policyRoomList: [
      {
        policyId: 4,
        policyName: "Person an room",
        policyDescription: "Miễn phí cho trẻ dưới 6 tuổi",
      },
      {
        policyId: 2,
        policyName: "Check out time",
        policyDescription: "Trả phòng trước 11:30",
      },
      {
        policyId: 1,
        policyName: "Check in time",
        policyDescription: "Nhận phòng từ 15:00",
      },
      {
        policyId: 3,
        policyName: "CANCEL ROOM",
        policyDescription: "Hủy trước 48h được hoàn 50%",
      },
    ],
  },
  {
    roomId: 3,
    roomName: "Phòng tiêu chuẩn",
    area: 20,
    bed: "1 giường đôi",
    image:
      "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729241122/Room/nipyn0qgyoyhtgkadlyi.jpg",
    serviceEntityList: [
      {
        id: 1,
        name: "Nhìn ra thành phố",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 10,
        name: "Ra trải giường",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 21,
        name: "Dịch vụ báo thức",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 15,
        name: "Khu vực tiếp khách",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 27,
        name: "Giấy vệ sinh",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
    ],
    selectDay: 1,
    price: 855000.0,
    promotionPrice: 950000.0,
    promotion: { id: 1, name: "Ưu đãi đầu năm 2025", discountValue: "10%" },
    roomQuantity: 4,
    policyRoomList: [
      {
        policyId: 4,
        policyName: "Person an room",
        policyDescription: "Miễn phí cho trẻ dưới 6 tuổi",
      },
      {
        policyId: 2,
        policyName: "Check out time",
        policyDescription: "Trả phòng trước 11:30",
      },
      {
        policyId: 1,
        policyName: "Check in time",
        policyDescription: "Nhận phòng từ 15:00",
      },
      {
        policyId: 3,
        policyName: "CANCEL ROOM",
        policyDescription: "Hủy trước 48h được hoàn 50%",
      },
    ],
  },
  {
    roomId: 4,
    roomName: "Phòng tiêu chuẩn",
    area: 20,
    bed: "1 giường đôi",
    image:
      "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729241122/Room/nipyn0qgyoyhtgkadlyi.jpg",
    serviceEntityList: [
      {
        id: 1,
        name: "Nhìn ra thành phố",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 10,
        name: "Ra trải giường",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 21,
        name: "Dịch vụ báo thức",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 15,
        name: "Khu vực tiếp khách",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
      {
        id: 27,
        name: "Giấy vệ sinh",
        serviceType: "AMENITY",
        image: null,
        description: null,
      },
    ],
    selectDay: 1,
    price: 855000.0,
    promotionPrice: 950000.0,
    promotion: { id: 1, name: "Ưu đãi đầu năm 2025", discountValue: "10%" },
    roomQuantity: 4,
    policyRoomList: [
      {
        policyId: 4,
        policyName: "Person an room",
        policyDescription: "Miễn phí cho trẻ dưới 6 tuổi",
      },
      {
        policyId: 2,
        policyName: "Check out time",
        policyDescription: "Trả phòng trước 11:30",
      },
      {
        policyId: 1,
        policyName: "Check in time",
        policyDescription: "Nhận phòng từ 15:00",
      },
      {
        policyId: 3,
        policyName: "CANCEL ROOM",
        policyDescription: "Hủy trước 48h được hoàn 50%",
      },
    ],
  },
];

const RoomItem = ({ room }) => {
  return (
    <View style={styles.card}>
      {/* Hình ảnh phòng */}
      <Image source={{ uri: room.image }} style={styles.roomImage} />
      {/* Tiêu đề và số lượng phòng */}
      <View style={styles.header}>
        <Text style={styles.roomName}>{room.roomName}</Text>
        <Text style={styles.roomQuantity}>Còn {room.roomQuantity} phòng</Text>
      </View>
      {/* Thông tin cơ bản */}
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Ionicons
            name="expand-outline"
            size={15}
            color="#191D39"
            style={styles.iconItem}
          />
          <Text style={styles.infoText}>Diện tích {room.area} m²</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons
            name="bed-outline"
            size={15}
            color="#191D39"
            style={styles.iconItem}
          />
          <Text style={styles.infoText}>Giường: {room.bed}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons
            name="calendar-number-outline"
            size={15}
            color="#191D39"
            style={styles.iconItem}
          />
          <Text style={styles.infoText}>Số ngày chọn: {room.selectDay}</Text>
        </View>
      </View>
      {/* Dịch vụ */}
      <View style={styles.services}>
        {room.serviceEntityList.map((service) => (
          <View key={service.id} style={styles.serviceItem}>
            <Ionicons name="checkmark-circle" size={15} color="#4DD0E1" />
            <Text style={styles.serviceText}>{service.name}</Text>
          </View>
        ))}
      </View>
      {/* • {policy.policyName}: {policy.policyDescription} */}
      {/* Chính sách */}
      <View style={styles.policies}>
        {room.policyRoomList.map((policy) => (
          <View key={policy.policyId} style={styles.policyItem}>
            <Ionicons
              name="newspaper-outline"
              size={15}
              color="#191D39"
              style={styles.iconPolicy}
            />
            <Text style={styles.policyText}>
              {policy.policyName}: {policy.policyDescription}
            </Text>
          </View>
        ))}
      </View>
      {/* Khuyến mãi */}
      <View style={styles.promotion}>
        <View style={styles.promotionView}>
          <Ionicons
            name="bookmarks-outline"
            size={15}
            color="#191D39"
            style={styles.iconPolicy}
          />
          <Text style={styles.promotionText}>
            {/* {room.promotion.name} - Giảm {room.promotion.discountValue} */}
            {room.promotion.name}
          </Text>
        </View>
      </View>

      <View style={styles.br}></View>
      {/* Giá */}
      <View style={styles.priceContainer}>
        <View style={styles.priceWrapper}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>
              Giảm {room.promotion.discountValue}
            </Text>
          </View>
          <View style={styles.discountedPriceView}>
            <Text style={styles.discountedPrice}>
              {room.price.toLocaleString()}đ
            </Text>
            <Text style={styles.originalPrice}>
              {room.promotionPrice.toLocaleString()}đ
            </Text>
          </View>
        </View>
      </View>
      {/* Nút Chọn và tùy chỉnh */}
      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Chọn </Text>
      </TouchableOpacity>
    </View>
  );
};

const HotelRoomList = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <View style={styles.header}>
        <ImageBackground
          source={{
            // uri: `${item.imageUrl}`,
            uri: `https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
          }}
          style={styles.header__image}
        >
          <View style={styles.header__overlay}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                size={30}
                color="#fff"
                style={styles.iconBack}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.header__title}>name</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.header__icon__start}>
              <Ionicons name="share-outline" size={24} color="#fff" />
            </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </View>
      {rooms.map((room) => (
        <RoomItem key={room.roomId} room={room} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 0,
    backgroundColor: "#E0E0E0", // Nền xanh lam nhạt
  },
  card: {
    backgroundColor: "#FFFFFF", // Thẻ trắng
    borderRadius: 12,
    padding: 8,
    marginBottom: 8,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3, // Shadow cho Android
  },
  roomImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  roomName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  roomQuantity: {
    fontSize: 10,
    color: "#B0BEC5", // Xám nhạt
  },
  info: {
    marginBottom: 8,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconItem: {
    marginRight: 5,
  },
  infoText: {
    fontSize: 12,
    color: "#424242", // Xám đậm
    marginBottom: 2,
  },
  services: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 4,
  },
  serviceText: {
    fontSize: 10,
    color: "#424242", // Xám đậm
    marginLeft: 4,
  },
  policies: {
    marginBottom: 8,
  },
  iconPolicy: {
    marginRight: 5,
  },
  policyItem: {
    flexDirection: "row",
    justifyContent: "flex-star",
    alignItems: "center",
  },
  policyText: {
    fontSize: 10,
    color: "#424242", // Xám đậm
    marginBottom: 2,
  },

  promotion: {
    marginBottom: 8,
    backgroundColor: "#FCDB36",
    alignSelf: "flex-start",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  promotionView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  promotionText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181E3C", // Xanh lam đậm
  },
  br: {
    marginTop: 5,
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  priceContainer: {
    marginBottom: 8,
  },
  priceWrapper: {
    //     alignItems: "flex-end",
  },
  discountedPriceView: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginBottom: 5,
  },
  discountedPrice: {
    fontSize: 26,
    fontWeight: "900",
    color: "#000000", // Màu đen
    textAlign: "center",
  },
  originalPriceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  originalPrice: {
    fontSize: 16,
    color: "black", // Màu đỏ
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  discountBadge: {
    backgroundColor: "#00F598", // Xanh lá
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    alignSelf: "flex-end",
    marginBottom: 5,
  },
  discountText: {
    fontSize: 14,
    color: "#FFFFFF", // Chữ trắng
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 12,
    color: "#000000", // Màu đen
    marginTop: 4,
  },
  roomAvailability: {
    fontSize: 12,
    color: "#D32F2F", // Màu đỏ
    marginTop: 4,
  },
  selectButton: {
    backgroundColor: "#00F598", // Xanh dương
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    width: "80%", // Full width
    alignSelf: "center",
  },
  selectButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#fff",
  },
  header__image: {
    width: "100%",
    height: 250,
    justifyContent: "space-between",
  },
  iconBack: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  header__overlay: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    //     padding: 20,
    paddingHorizontal: 5,
    paddingVertical: 30,
  },
  header__icon__start: {
    marginLeft: "auto",
  },
  header__title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 0,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default HotelRoomList;
