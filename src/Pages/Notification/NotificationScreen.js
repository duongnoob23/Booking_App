import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppSelector } from "../../Redux/hook";

const NotificationsScreen = () => {
  const { accessToken, isLoggedIn } = useAppSelector((state) => state.auth);
  const { listNotification } = useAppSelector((state) => state.notification);
  const { loadingHotelRoomList } = useAppSelector((state) => state.hotel);
  // const notifications = [
  //   {
  //     createdAt: null,
  //     id: 2,
  //     message: "Chúc mừng bạn đã đặt phòng thành công.",
  //     title: "Đặt phòng thành công!!",
  //     type: "BOOKING",
  //   },
  //   {
  //     createdAt: null,
  //     id: 3,
  //     message:
  //       "Bạn có voucher SUMMER25 sẽ hết hạn vào ngày mai hãy sử dụng trước lúc hết hạn.",
  //     title: "Mã khuyến mãi sắp hết hạn.",
  //     type: "BOOKING",
  //   },
  //   {
  //     createdAt: null,
  //     id: 4,
  //     message: "Vui lòng check in sau 14:00 trước 23:00",
  //     title: "Ngày mai bạn có lịch checkin lúc 14:00",
  //     type: "BOOKING",
  //   },
  //   {
  //     createdAt: null,
  //     id: 5,
  //     message: "Vui lòng check in sau 14:00 trước 23:00",
  //     title: "Ngày mai bạn có lịch checkout lúc 12:00",
  //     type: "BOOKING",
  //   },
  // ];
  const notifications = listNotification;
  // Map loại thông báo với icon và màu sắc
  const getNotificationIcon = (type) => {
    switch (type?.toUpperCase()) {
      case "BOOKING":
        return { icon: "checkmark-circle", color: "#2563EB" };
      default:
        return { icon: "notifications", color: "#6B7280" };
    }
  };

  // Render từng thông báo
  const renderNotification = ({ item }) => {
    const { icon, color } = getNotificationIcon(item?.type);
    return (
      <TouchableOpacity style={styles.notificationCard} activeOpacity={0.7}>
        <View style={styles.notificationIconContainer}>
          <Ionicons name={icon} size={36} color={color} />
        </View>
        <View style={styles.notificationContent}>
          {item?.title && (
            <Text style={styles.notificationTitle}>{item.title}</Text>
          )}
          {item?.message && (
            <Text style={styles.notificationMessage}>{item.message}</Text>
          )}
          {item?.createdAt && (
            <Text style={styles.notificationTime}>
              {new Date(item.createdAt).toLocaleString("vi-VN", {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  // Giao diện khi chưa đăng nhập
  if (!accessToken || !isLoggedIn) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="log-in-outline" size={48} color="#6B7280" />
        <Text style={styles.emptyText}>
          Vui lòng đăng nhập để xem thông báo
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Thông báo</Text>
      {notifications?.length > 0 ? (
        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item) => item?.id?.toString()}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="notifications-off-outline"
            size={48}
            color="#6B7280"
          />
          <Text style={styles.emptyText}>Bạn chưa có thông báo nào</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 16,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#2563EB",
  },
  notificationIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    transform: [{ scale: 1 }],
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },
  notificationTime: {
    fontSize: 12,
    color: "#F59E0B",
    marginTop: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 12,
  },
});

export default NotificationsScreen;
