import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import SkeletonContent from "react-native-skeleton-content"; // Import thư viện

const UserListScreen = () => {
  const [isSkeleton, setIsSkeleton] = useState(true); // Biến điều khiển skeleton
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ]);

  // Giả lập loading trong 3 giây
  useEffect(() => {
    setTimeout(() => {
      setIsSkeleton(false); // Tắt skeleton sau 3 giây
    }, 3000);
  }, []);

  // Component render từng item người dùng
  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    //     <SkeletonContent
    //       containerStyle={styles.container}
    //       isLoading={isSkeleton} // Dựa trên biến isSkeleton
    //       boneColor="#E5E7EB" // Màu xám nhạt
    //       highlightColor="#D1D5DB" // Màu xám đậm hơn cho hiệu ứng nhấp nháy
    //       animationType="shimmer" // Hiệu ứng nhấp nháy
    //       layout={[
    //         // Skeleton cho từng item trong danh sách
    //         ...Array(3)
    //           .fill()
    //           .map((_, index) => ({
    //             key: `skeleton-${index}`,
    //             flexDirection: "row",
    //             alignItems: "center",
    //             marginVertical: 10,
    //             marginHorizontal: 15,
    //             children: [
    //               {
    //                 key: `avatar-${index}`,
    //                 width: 50,
    //                 height: 50,
    //                 borderRadius: 25,
    //                 marginRight: 10,
    //               },
    //               {
    //                 key: `info-${index}`,
    //                 flexDirection: "column",
    //                 children: [
    //                   {
    //                     key: `name-${index}`,
    //                     width: 150,
    //                     height: 16,
    //                     marginBottom: 5,
    //                   },
    //                   { key: `email-${index}`, width: 200, height: 14 },
    //                 ],
    //               },
    //             ],
    //           })),
    //       ]}
    //     >
    //       {/* Giao diện thực tế khi isSkeleton === false */}
    //       <FlatList
    //         data={users}
    //         renderItem={renderUserItem}
    //         keyExtractor={(item) => item.id}
    //         contentContainerStyle={styles.listContainer}
    //       />
    //     </SkeletonContent>
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    paddingVertical: 10,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
});

export default UserListScreen;
