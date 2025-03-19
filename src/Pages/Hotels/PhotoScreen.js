import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Lấy chiều rộng màn hình để tính toán kích thước ảnh
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
// Tính toán kích thước và khoảng cách
const NUM_COLUMNS = 3; // Số cột
const SPACING = SCREEN_WIDTH * 0.05; // Khoảng cách giữa các ảnh (5% chiều rộng màn hình)
const TOTAL_SPACING = (NUM_COLUMNS + 1) * SPACING; // Tổng khoảng cách (giữa các ảnh và hai bên lề)
const IMAGE_SIZE = (SCREEN_WIDTH - TOTAL_SPACING) / NUM_COLUMNS; // Chiều rộng mỗi ảnh

const PhotoScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Chỉ số ảnh hiện tại

  // Danh sách ảnh từ Unsplash (ảnh khách sạn, phong cảnh, nội thất)
  const photoList = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop",
    },

    {
      id: "10",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "11",
      url: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "12",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop",
    },

    {
      id: "10",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "11",
      url: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "12",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop",
    },

    {
      id: "10",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "11",
      url: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2940&auto=format&fit=crop",
    },
    {
      id: "12",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940&auto=format&fit=crop",
    },
  ];

  // Hàm render từng ảnh
  const renderPhotoItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedPhoto(item.url);
        setCurrentIndex(index); // Lưu chỉ số của ảnh được chọn
        setModalVisible(true);
      }}
      style={styles.photoItem}
    >
      <Image
        source={{ uri: item.url }}
        style={styles.photoImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  // Xử lý chuyển sang ảnh trước
  const handlePrePhoto = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedPhoto(photoList[newIndex].url);
    }
  };

  // Xử lý chuyển sang ảnh tiếp theo
  const handleNextPhoto = () => {
    if (currentIndex < photoList.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedPhoto(photoList[newIndex].url);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={photoList}
        renderItem={renderPhotoItem}
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS} // 3 cột mỗi hàng
        contentContainerStyle={styles.photoList}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Đóng modal khi nhấn nút back trên Android
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)} // Đóng modal khi nhấn vào phần mờ
        >
          {/* Ngăn sự kiện nhấn trên ảnh lan truyền */}
          <TouchableOpacity
            style={styles.modalContent}
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            <Image
              source={{ uri: selectedPhoto }}
              style={styles.modalImage}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={30} color="#fff" />
            </TouchableOpacity>

            {/* Nút Previous */}
            {currentIndex > 0 && (
              <TouchableOpacity
                style={styles.preButton}
                onPress={handlePrePhoto}
              >
                <Ionicons name="chevron-back-outline" size={30} color="#fff" />
              </TouchableOpacity>
            )}

            {/* Nút Next */}
            {currentIndex < photoList.length - 1 && (
              <TouchableOpacity
                style={styles.nextButton}
                onPress={handleNextPhoto}
              >
                <Ionicons
                  name="chevron-forward-outline"
                  size={30}
                  color="#fff"
                />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: -10,
  },
  photoList: {
    paddingHorizontal: SPACING, // Padding ngang để margin bên ngoài đều với khoảng cách giữa các ảnh
    paddingVertical: SPACING, // Padding dọc để có khoảng cách trên/dưới
  },
  photoItem: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE, // Hình vuông
    marginHorizontal: SPACING / 2, // Khoảng cách ngang giữa các ảnh
    marginVertical: SPACING / 2, // Khoảng cách dọc giữa các ảnh
  },
  photoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8, // Bo góc nhẹ cho ảnh
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Phần mờ bên ngoài
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: SCREEN_WIDTH, // Ảnh phóng to chiếm toàn chiều rộng màn hình
    height: SCREEN_HEIGHT * 0.8, // Chiều cao ảnh phóng to
    position: "relative",
  },
  modalImage: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
    padding: 5,
  },
  preButton: {
    position: "absolute",
    top: "50%",
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
    padding: 5,
  },
  nextButton: {
    position: "absolute",
    top: "50%",
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
    padding: 5,
  },
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
    paddingVertical: 15,
    paddingHorizontal: 15,
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

export default PhotoScreen;
