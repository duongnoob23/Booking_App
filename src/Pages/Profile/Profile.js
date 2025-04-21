import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { setPrePage } from "../../Redux/Slice/authSlice";

const Profile = ({ navigation }) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  // Dữ liệu người dùng mặc định khi đã đăng nhập
  const [userData, setUserData] = useState({
    name: "John Smith",
    email: "johnsmith@gmail.com",
    phone: "+225 698698966",
    avatar:
      "https://media.istockphoto.com/id/1587604256/vi/anh/ch%C3%A2n-dung-lu%E1%BA%ADt-s%C6%B0-v%C3%A0-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-da-%C4%91en-v%E1%BB%9Bi-m%C3%A1y-t%C3%ADnh-b%E1%BA%A3ng-n%E1%BB%A5-c%C6%B0%E1%BB%9Di-v%C3%A0-h%E1%BA%A1nh-ph%C3%BAc-t%E1%BA%A1i-n%C6%A1i-l%C3%A0m.jpg?s=612x612&w=0&k=20&c=0hnV6JuSMy8XAV25oJFzQeHPYysYe8cfHUyhgZlQYQc=",
  });

  // Dữ liệu giả khi chưa đăng nhập
  const anonymousData = {
    name: "Bạn chưa đăng nhập",
    email: "",
    phone: "",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2F8DoZLvVpkbPZs1z1dBzXKLvgRNwgUrstA&s", // Avatar mặc định của Facebook
    // "https://images.unsplash.com/photo-1573547429441-d7ef62e04b63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFub255bW91c3xlbnwwfHwwfHx8MA%3D%3D", // Avatar mặc định của Facebook
  };

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        try {
          const storedData = await AsyncStorage.getItem("userProfile");
          if (storedData) {
            const parsedData = JSON.parse(storedData);
            setUserData((prevData) => ({
              ...prevData,
              ...parsedData,
            }));
          } else {
            await AsyncStorage.setItem("userProfile", JSON.stringify(userData));
          }
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        }
      };

      if (isLoggedIn) {
        fetchUserData();
      }
    }, [isLoggedIn])
  );

  const handleToEditProfile = () => {
    navigation.navigate("EditProfile", { userData });
  };

  const handleToRewardMember = () => {
    navigation.navigate("RewardMember");
  };

  const handleToSettingsScreen = () => {
    navigation.navigate("SettingsScreen");
  };

  const handleToPersonalVoucher = () => {
    navigation.navigate("PersonalVoucher");
  };

  const handleLogin = () => {
    navigation.navigate("LoginScreen", { prePage: "Profile" });
  };

  const handleLogout = () => {
    dispatch(setPrePage("Profile"));
    navigation.navigate("LoginScreen");
  };
  // Dữ liệu hiển thị dựa trên trạng thái đăng nhập
  const displayData = isLoggedIn ? userData : anonymousData;

  return (
    <View style={styles.container}>
      {/* Ảnh nền */}
      <View style={styles.topContainer}>
        <Image
          source={{
            uri: displayData.avatar,
          }}
          style={styles.profileImage}
        />
      </View>

      {/* Card chứa thông tin cá nhân */}
      <View style={styles.profileCard}>
        {/* Chỉ hiển thị nút chỉnh sửa nếu đã đăng nhập */}
        {isLoggedIn && (
          <TouchableOpacity
            style={styles.editButton}
            onPress={handleToEditProfile}
          >
            <Ionicons name="pencil" size={26} color="white" />
          </TouchableOpacity>
        )}
        <Text style={styles.userName}>{displayData.name}</Text>
        <Text style={styles.userEmail}>{displayData.email}</Text>
        <Text style={styles.userPhone}>{displayData.phone}</Text>
      </View>

      {/* Các tùy chọn bên dưới */}
      <View style={styles.optionsContainer}>
        {isLoggedIn ? (
          <>
            <TouchableOpacity
              style={styles.optionItem}
              onPress={handleToSettingsScreen}
            >
              <Text style={styles.optionText}>Cài đặt</Text>
              <Ionicons name="chevron-forward" size={20} color="#0090FF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={handleToRewardMember}
            >
              <Text style={styles.optionText}>Phần thưởng và Thành viên</Text>
              <Ionicons name="chevron-forward" size={20} color="#0090FF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={handleToPersonalVoucher}
            >
              <Text style={styles.optionText}>Voucher của bạn</Text>
              <Ionicons name="chevron-forward" size={20} color="#0090FF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => handleLogout()}
            >
              <Text style={styles.logoutText}>Đăng xuất</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>Đăng nhập</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    height: "50%",
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profileCard: {
    position: "relative",
    width: "85%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: -50,
  },
  editButton: {
    width: 50,
    height: 50,
    position: "absolute",
    top: -20,
    right: -20,
    backgroundColor: "#00C853",
    padding: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  userName: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  userEmail: {
    fontSize: 16,
    color: "#555",
  },
  userPhone: {
    fontSize: 16,
    color: "#555",
  },
  optionsContainer: {
    padding: 20,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    width: "95%",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#00F598",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  logoutText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
  },
  loginButton: {
    marginTop: "80",
    backgroundColor: "#00F598",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
    paddingHorizontal: 120,
  },
  loginText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default Profile;
