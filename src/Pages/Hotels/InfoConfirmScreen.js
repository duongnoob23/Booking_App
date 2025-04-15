import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import {
  fetchUserInfo,
  updateUserInfo,
  updateInforUserChange,
} from "../../Redux/Slice/authSlice";
import { fetchBookingRoom } from "../../Redux/Slice/hotelSlice";
import SkeletonInfoConfirm from "../../Components/Skeleton/Auth/SkeletonInfoConfirm";

const InfoConfirmScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);

  const dispatch = useAppDispatch();

  const { isLoggedIn, infoUser, loadingInfoUser, error, inforUserChange } =
    useAppSelector((state) => state.auth);

  const { bookingPayload, listUniqueIdBookingRoom } = useAppSelector(
    (state) => state.hotel
  );
  // console.log(">>> 135 >>> bookingPayload", bookingPayload);
  console.log("--------------------------------------------------------");

  const printServiceLists = (data) => {
    data.roomRequestList.forEach((room, index) => {
      console.log(`Phòng ${index + 1} (uniqueId: ${room.uniqueId}):`);
      if (room.serviceList && room.serviceList.length > 0) {
        room.serviceList.forEach((service, serviceIndex) => {
          console.log(
            `  Dịch vụ ${serviceIndex + 1}: ID = ${service.id}, Số lượng = ${
              service.quantity
            }, Thời gian = "${service.time || ""}", Ghi chú = "${
              service.note || ""
            }"`
          );
        });
      } else {
        console.log("  Không có dịch vụ nào.");
      }
    });
  };
  const printRoomRequestList = (bookingPayload) => {
    if (
      !bookingPayload ||
      !bookingPayload.roomRequestList ||
      bookingPayload.roomRequestList.length === 0
    ) {
      console.log("roomRequestList is empty or undefined");
      return;
    }

    console.log("=== roomRequestList ===");
    bookingPayload.roomRequestList.forEach((room, index) => {
      const roomProps = Object.keys(room)
        .filter((key) => key !== "serviceList")
        .map((key) => `${key}=${JSON.stringify(room[key])}`)
        .join(", ");
      console.log(`Room ${index + 1}: ${roomProps || "No properties"}`);
    });
  };

  // printRoomRequestList(bookingPayload);
  printServiceLists(bookingPayload);
  console.log("--------------------------------------------------------");

  // Gọi hàm với biến test

  const [infomation, setInfomation] = useState({
    firstName: " ",
    lastName: "",
    email: "",
    phoneNumber: "",
    phoneCountry: "+84",
  });

  // State để lưu lỗi validate
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    if (isLoggedIn && infoUser) {
      const newInfomation = {
        firstName: infoUser.firstName || "",
        lastName: infoUser.lastName || "",
        email: infoUser.email || "",
        phoneNumber: infoUser.phone || "",
        phoneCountry: "+84",
      };
      setInfomation(newInfomation);
    }
  }, [infoUser]);

  // Hàm validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    };

    if (!infomation.firstName.trim()) {
      newErrors.firstName = "Họ là bắt buộc *";
      valid = false;
    }
    if (!infomation.lastName.trim()) {
      newErrors.lastName = "Tên là bắt buộc *";
      valid = false;
    }
    if (!infomation.email.trim()) {
      newErrors.email = "Email là bắt buộc *";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(infomation.email)) {
      newErrors.email = "Email không hợp lệ *";
      valid = false;
    }
    if (!infomation.phoneNumber.trim()) {
      newErrors.phoneNumber = "Số điện thoại là bắt buộc *";
      valid = false;
    } else if (!/^\d{10}$/.test(infomation.phoneNumber)) {
      newErrors.phoneNumber = "Số điện thoại phải có 10 chữ số *";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const onChangeInfomation = (value, name) => {
    setInfomation((prev) => ({ ...prev, [name]: value }));
    // Xóa lỗi của trường khi người dùng bắt đầu nhập
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleLogin = () => {
    navigation.navigate("LoginScreen", { preScreen: "InfoConfirm" });
  };

  const handleInfoConfirm = () => {
    if (isLoggedIn) {
      // Nếu đã đăng nhập, validate form
      if (!validateForm()) {
        return; // Dừng lại nếu validate thất bại
      }
    }

    dispatch(fetchBookingRoom());
    navigation.navigate("OrderConfirm");
  };

  if (loadingInfoUser) {
    return <SkeletonInfoConfirm />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THÔNG TIN CÁ NHÂN</Text>

      <View
        style={[styles.inputContainer, errors.firstName && styles.inputError]}
      >
        <Ionicons
          name="person-outline"
          size={20}
          color="#007AFF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={infomation.firstName}
          // value={"TIEN DUONG"}
          onChangeText={(value) => onChangeInfomation(value, "firstName")}
          placeholder="Họ *"
          placeholderTextColor="#999"
          editable={isLoggedIn} // Chỉ cho phép chỉnh sửa nếu đã đăng nhập
        />
        {errors.firstName ? (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        ) : null}
      </View>

      <View
        style={[styles.inputContainer, errors.lastName && styles.inputError]}
      >
        <Ionicons
          name="person-outline"
          size={20}
          color="#007AFF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={infomation.lastName}
          // value={"LAM"}
          onChangeText={(value) => onChangeInfomation(value, "lastName")}
          placeholder="Tên *"
          placeholderTextColor="#999"
          editable={isLoggedIn} // Chỉ cho phép chỉnh sửa nếu đã đăng nhập
        />
        {errors.lastName ? (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        ) : null}
      </View>

      <View style={[styles.inputContainer, errors.email && styles.inputError]}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="#007AFF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={infomation.email}
          // value={"admin@gmail.com"}
          onChangeText={(value) => onChangeInfomation(value, "email")}
          placeholder="Email *"
          placeholderTextColor="#999"
          keyboardType="email-address"
          editable={isLoggedIn} // Chỉ cho phép chỉnh sửa nếu đã đăng nhập
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}
      </View>

      <View
        style={[styles.inputContainer, errors.phoneNumber && styles.inputError]}
      >
        <Ionicons
          name="call-outline"
          size={20}
          color="#007AFF"
          style={styles.icon}
        />
        <Text style={styles.phoneCode}>{infomation.phoneCountry}</Text>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={infomation.phoneNumber}
          // value={"0982474802"}
          onChangeText={(value) => onChangeInfomation(value, "phoneNumber")}
          placeholder="Số điện thoại *"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          editable={isLoggedIn} // Chỉ cho phép chỉnh sửa nếu đã đăng nhập
        />
        <Ionicons
          name="checkmark-circle"
          size={20}
          color={
            infomation.phoneNumber && !errors.phoneNumber ? "#00C853" : "#999"
          }
          style={styles.checkIcon}
        />
        {errors.phoneNumber ? (
          <Text style={styles.errorText}>{errors.phoneNumber}</Text>
        ) : null}
      </View>

      {isLoggedIn && (
        <TouchableOpacity style={[styles.button]} onPress={handleInfoConfirm}>
          <Text style={styles.buttonText}>Xác nhận thông tin</Text>
        </TouchableOpacity>
      )}
      {!isLoggedIn && (
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Đăng nhập tài khoản</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InfoConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
    marginTop: 30,
    marginBottom: 50,
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#00F598",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 20,
  },
  inputError: {
    borderBottomColor: "#FF0000",
  },
  icon: {
    marginRight: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingVertical: 10,
    marginBottom: 10,
  },
  phoneCode: {
    fontSize: 16,
    color: "#000",
    marginRight: 10,
  },
  checkIcon: {
    marginLeft: 10,
  },
  errorText: {
    color: "#FF0000",
    fontSize: 12,
    marginTop: 5,
    position: "absolute",
    bottom: -20,
    left: 30,
  },
  button: {
    backgroundColor: "#00F598",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
  },
});
