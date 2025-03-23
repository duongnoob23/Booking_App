import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  navigation,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  // const navigation = useNavigation();

  // Dữ liệu người dùng
  const [userData, setUserData] = useState({
    name: "John Smith",
    email: "johnsmith@gmail.com",
    phone: "+225 698698966",
    // avatar: require("../../../assets/images/profile.png"),
    avatar:
      "https://media.istockphoto.com/id/1587604256/vi/anh/ch%C3%A2n-dung-lu%E1%BA%ADt-s%C6%B0-v%C3%A0-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-da-%C4%91en-v%E1%BB%9Bi-m%C3%A1y-t%C3%ADnh-b%E1%BA%A3ng-n%E1%BB%A5-c%C6%B0%E1%BB%9Di-v%C3%A0-h%E1%BA%A1nh-ph%C3%BAc-t%E1%BA%A1i-n%C6%A1i-l%C3%A0m.jpg?s=612x612&w=0&k=20&c=0hnV6JuSMy8XAV25oJFzQeHPYysYe8cfHUyhgZlQYQc=",
  });

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        try {
          const storedData = await AsyncStorage.getItem("userProfile");
          if (storedData) {
            setUserData(JSON.parse(storedData));
          }
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        }
      };

      fetchUserData();
    }, [])
  );

  const handleToEditProfile = () => {
    navigation.navigate("EditProfile");
    // navigation.navigate("Chỉnh sửa hồ sơ", { userData });
  };
  const handleToRewardMember = () => {
    navigation.navigate("RewardMember");
  };
  const handleToSettingsScreen = () => {
    navigation.navigate("SettingsScreen");
  };
  // useFocusEffect(() =>{
  //   console.log(">>>> chay roi");
  // },[])
  return (
    <View style={styles.container}>
      {/* Ảnh nền */}
      <View style={styles.topContainer}>
        {/* <Image uri={userData.avatar} style={styles.profileImage} /> */}
        <Image
          source={{
            uri: `${userData.avatar}`,
          }}
          style={styles.profileImage}
        />
      </View>

      {/* Card chứa thông tin cá nhân */}
      <View style={styles.profileCard}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleToEditProfile()}
        >
          <Ionicons name="pencil" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
        <Text style={styles.userPhone}>{userData.phone}</Text>
      </View>

      {/* Các tùy chọn bên dưới */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => handleToSettingsScreen()}
        >
          <Text style={styles.optionText}>Cài đặt</Text>
          <Ionicons name="chevron-forward" size={20} color="#0090FF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => handleToRewardMember()}
        >
          <Text style={styles.optionText}>Phần thưởng và Thành viên</Text>
          <Ionicons name="chevron-forward" size={20} color="#0090FF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
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
    // top: "40%", // Đẩy Card lên trên ảnh nền
    // left: "5%",
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
    // transform: [{ translateX: "45%" }],
    // transform: [{ translateY: "-45%" }],
    // textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  userName: {
    fontSize: 30,
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
    // marginTop: 100 ,
    padding: 20,
  },
  optionItem: {
    // marginTop:
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
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  logoutText: {
    fontSize: 16,
    color: "red",
    fontWeight: "400",
  },
});

export default Profile;
