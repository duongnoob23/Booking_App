import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NotificationsScreen = () => {
  const notifications = [
    {
      id: "1",
      type: "booking",
      title: "Đặt phòng",
      content: "Bạn có lịch check-in tại Khách sạn ABC",
      time: "10 tháng 3 năm 2019",
      note: "Hủy chương trình khuyến mãi tuyệt vời ...",
      icon: "checkmark-circle-outline",
      iconColor: "#007BFF",
    },
    {
      id: "2",
      type: "discount",
      title: "Giảm giá",
      content: "Giảm giá 10%. Tất cả các thanh toán",
      time: "Từ 18 tháng 3 năm 2019 ... đến 18 tháng 4",
      note: "",
      icon: "pricetag-outline",
      iconColor: "#FF9800",
    },
    {
      id: "3",
      type: "checkout",
      title: "Trả phòng",
      content: "Bạn sẽ check-out khỏi Khách sạn ABC",
      time: "10 tháng 3 năm 2019 - 20:30",
      note: "Hãy đảm bảo bạn đã thu dọn đồ đặc đi ...",
      icon: "arrow-redo-outline",
      iconColor: "#E91E63",
    },
    {
      id: "4",
      type: "suggestion",
      title: "Gợi ý",
      content: "Bạn cần thay thế não về kỳ nghỉ...",
      time: "",
      note: "",
      icon: "star-outline",
      iconColor: "#FFC107",
    },
  ];

  return (
    <View style={styles.notifications}>
      {/* Header */}
      {/* <View style={styles.notifications__header}>
        <TouchableOpacity>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="black"
            style={styles.notifications__headerBack}
          />
        </TouchableOpacity>
        <Text style={styles.notifications__headerTitle}>Thông báo</Text>
        <TouchableOpacity>
          <Text style={styles.notifications__headerDelete}>XÓA</Text>
        </TouchableOpacity>
      </View> */}

      {/* Danh sách thông báo */}
      {notifications.map((item) => (
        <View key={item.id} style={styles.notifications__item}>
          <Ionicons
            name={item.icon}
            size={40}
            color={item.iconColor}
            style={styles.notifications__itemIcon}
          />
          <View style={styles.notifications__itemContent}>
            <Text style={styles.notifications__itemTitle}>{item.title}</Text>
            <Text style={styles.notifications__itemText}>{item.content}</Text>
            {item.time ? (
              <Text style={[styles.notifications__itemTime]}>{item.time}</Text>
            ) : null}
            <Text style={styles.notifications__itemNote}>{item.note}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  notifications: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  notifications__header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  notifications__headerBack: {},
  notifications__headerTitle: {
    marginLeft: 30,
    fontSize: 24,
    fontWeight: "450",
    color: "#000000",
  },
  notifications__headerDelete: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007BFF",
  },
  notifications__item: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingVertical: 10,
  },
  notifications__itemIcon: {
    marginRight: 10,
  },
  notifications__itemContent: {
    flex: 1,
  },
  notifications__itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 5,
  },
  notifications__itemText: {
    fontSize: 14,
    color: "black",
    marginBottom: 5,
  },
  notifications__itemTime: {
    fontSize: 12,
    color: "orange",
  },
  notifications__itemNote: {
    fontSize: 14,
    color: "black",
    marginBottom: 5,
  },
});

export default NotificationsScreen;
