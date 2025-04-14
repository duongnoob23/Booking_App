import React, { useEffect, useState, useMemo, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import {
  fetchUserInfo,
  updateUserInfo,
  updateInforUserChange,
} from "../../Redux/Slice/authSlice";
import { fetchBookingRoom } from "../../Redux/Slice/hotelSlice";

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
  // console.log(">>> 30 ICS >>> ", bookingPayload);
  // console.log(">>> 31 ICS >>> ", listUniqueIdBookingRoom);
  const [infomation, setInfomation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    phoneCountry: "+84",
  });

  // Chỉ gọi fetchUserInfo khi cần thiết
  useEffect(() => {
    // console.log(">> run");
    dispatch(fetchUserInfo());
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    // console.log(">> run2");

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
  // Điền thông tin từ infoUser hoặc inforUserChange
  // useEffect(() => {
  //   if (isLoggedIn && infoUser) {
  //     const newInfomation = {
  //       firstName: infoUser.firstName || "",
  //       lastName: infoUser.lastName || "",
  //       email: infoUser.email || "",
  //       phoneNumber: infoUser.phone || "",
  //       phoneCountry: "+84",
  //     };
  //     // Chỉ cập nhật nếu dữ liệu khác
  //     if (JSON.stringify(newInfomation) !== JSON.stringify(infomation)) {
  //       setInfomation(newInfomation);
  //     }
  //   } else if (inforUserChange) {
  //     if (JSON.stringify(inforUserChange) !== JSON.stringify(infomation)) {
  //       setInfomation(inforUserChange);
  //     }
  //   }
  // }, [infoUser, inforUserChange, isLoggedIn]);

  // const validateForm = () => {
  //   let valid = true;
  //   const newErrors = {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phoneNumber: "",
  //   };

  //   if (!infomation.firstName.trim()) {
  //     newErrors.firstName = "Họ là bắt buộc";
  //     valid = false;
  //   }
  //   if (!infomation.lastName.trim()) {
  //     newErrors.lastName = "Tên là bắt buộc";
  //     valid = false;
  //   }
  //   if (!infomation.email.trim()) {
  //     newErrors.email = "Email là bắt buộc";
  //     valid = false;
  //   } else if (!/\S+@\S+\.\S+/.test(infomation.email)) {
  //     newErrors.email = "Email không hợp lệ";
  //     valid = false;
  //   }
  //   if (!infomation.phoneNumber.trim()) {
  //     newErrors.phoneNumber = "Số điện thoại là bắt buộc";
  //     valid = false;
  //   } else if (!/^\d{10}$/.test(infomation.phoneNumber)) {
  //     newErrors.phoneNumber = "Số điện thoại phải có 10 chữ số";
  //     valid = false;
  //   }

  //   setErrors(newErrors);
  //   return valid;
  // };

  const onChangeInfomation = (value, name) => {
    setInfomation((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    navigation.navigate("LoginScreen", { preScreen: "InfoConfirm" });
  };

  const handleInfoConfirm = () => {
    // if (!validateForm()) {
    //   return;
    // }

    // const userInfo = {
    //   firstName: infomation.firstName,
    //   lastName: infomation.lastName,
    //   email: infomation.email,
    //   phone: infomation.phoneNumber,
    // };

    // console.log(userInfo);
    // Lưu thông tin tạm vào inforUserChange
    // dispatch(updateInforUserChange({ ...infomation }));

    // Nếu đã đăng nhập, cập nhật thông tin lên server
    // if (isLoggedIn) {
    //   dispatch(updateUserInfo(userInfo));
    // }

    dispatch(fetchBookingRoom({ bookingPayload }));
    navigation.navigate("OrderConfirm");
  };

  if (loadingInfoUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Đang tải thông tin...</Text>
      </View>
    );
  }

  // if (error) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>Lỗi: {error}</Text>
  //       <TouchableOpacity
  //         style={styles.button}
  //         onPress={() => dispatch(fetchUserInfo())}
  //       >
  //         <Text style={styles.buttonText}>Thử lại</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THÔNG TIN CÁ NHÂN</Text>

      <View
        // style={[styles.inputContainer, errors.firstName && styles.inputError]}
        style={[styles.inputContainer]}
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
          onChangeText={(value) => onChangeInfomation(value, "firstName")}
          placeholder="Họ *"
          placeholderTextColor="#999"
        />
        {/* {errors.firstName ? (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        ) : null} */}
      </View>

      <View
        // style={[styles.inputContainer, errors.lastName && styles.inputError]}
        style={[styles.inputContainer]}
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
          onChangeText={(value) => onChangeInfomation(value, "lastName")}
          placeholder="Tên *"
          placeholderTextColor="#999"
        />
        {/* {errors.lastName ? (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        ) : null} */}
      </View>

      {/* <View style={[styles.inputContainer, errors.email && styles.inputError]}> */}
      <View style={[styles.inputContainer]}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="#007AFF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={infomation.email}
          onChangeText={(value) => onChangeInfomation(value, "email")}
          placeholder="Email *"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
        {/* {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null} */}
      </View>

      <View
        // style={[styles.inputContainer, errors.phoneNumber && styles.inputError]}
        style={[styles.inputContainer]}
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
          onChangeText={(value) => onChangeInfomation(value, "phoneNumber")}
          placeholder="Số điện thoại *"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
        <Ionicons
          name="checkmark-circle"
          size={20}
          color={
            // infomation.phoneNumber && !errors.phoneNumber ? "#00C853" : "#999"
            "#00C853"
          }
          style={styles.checkIcon}
        />
        {/* {errors.phoneNumber ? (
          <Text style={styles.errorText}>{errors.phoneNumber}</Text>
        ) : null} */}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          // !isLoggedIn && !validateForm() && styles.buttonDisabled,
        ]}
        // style={[
        //   styles.button,
        //   !isLoggedIn && !validateForm() && styles.buttonDisabled,
        // ]}
        onPress={handleInfoConfirm}
        // disabled={!isLoggedIn && !validateForm()}
      >
        <Text style={styles.buttonText}>Xác nhận thông tin</Text>
      </TouchableOpacity>
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
  buttonDisabled: {
    backgroundColor: "#CCCCCC",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
  },
});
