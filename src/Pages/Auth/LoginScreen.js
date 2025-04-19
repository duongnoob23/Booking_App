import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { auth } from "../../../config/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from "../../Redux/Slice/authSlice";
import { API_BASE_URL } from "../../Constant/Constant";
import {
  fetchBookingStatus,
  fetchHotelList,
  fetchNotificationList,
} from "../../Redux/Slice/hotelSlice";
/* 
{"data": 
{"accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzVG9rZW4iLCJyb2xlIjpbIlJPTEVfVVNFUiJdLCJpZCI6MSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNzQzMTgyOTA3LCJleHAiOjE3NDMyNjkzMDd9.QPIwLj0wTe5y1n98COb4H8SeWYk11w3FQpe31BunkqA", 
"roles": ["ROLE_USER"]}, 
"message": "Authenticated successfully", 
"statusCode": 200} 
 */

// "https://api-booking-app-gbfsg5f0e4hwfzh0.japaneast-01.azurewebsites.net/api/auth/firebase",
// "https://localhost:9090/api/auth/firebase",
const LoginScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);
  console.log(">>> 34 LS >>> ", route?.params);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const auth = getAuth();
  const dispatch = useAppDispatch();
  const { accessToken, isLoggedIn } = useAppSelector((state) => state.auth);
  const sendTokenToBackend = async (idToken) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/firebase`, {
        // const response = await fetch("https://api-booking-app-gbfsg5f0e4hwfzh0.japaneast-01.azurewebsites.net/api/auth/firebase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tokenId: idToken }),
      });

      const data = await response.json();
      console.log(">>> data", data);
      if (data?.data?.accessToken) {
        dispatch(loginSuccess(data?.data?.accessToken));
        dispatch(fetchHotelList());
        dispatch(fetchBookingStatus());
        dispatch(fetchNotificationList());
        // dispatch(loginSuccess(data.data)); isLoggedIn = true auto
        console.log("Đăng nhập thành công!");
        // Alert.alert("Đăng nhập thành công!", `JWT: ${data.data.accessToken}`);
        Alert.alert("Đăng nhập thành công!");

        // navigation.navigate("Login");
        if (route?.params?.preScreen === "InfoConfirm") {
          navigation.navigate("InfoConfirm");
        } else if (route?.params?.preScreen === "profile") {
          navigation.navigate("profile");
        } else {
          navigation.navigate("Home");
        }
      } else {
        Alert.alert("Lỗi xác thực với backend!");
      }
    } catch (error) {
      Alert.alert("Lỗi gửi token!", error.message);
      console.log(error);
    }
  };

  console.log(">>> 65 LS >>>", accessToken, isLoggedIn);
  const handleEmailLogin = async () => {
    console.log(">>>> run");

    try {
      // dispatch(loginStart());
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(userCredential);
      const idToken = await userCredential.user.getIdToken(); // Lấy ID Token từ Firebase
      console.log("idToken->", idToken);
      sendTokenToBackend(idToken);
    } catch (error) {
      Alert.alert("Lỗi đăng nhập", error.message);
    }
  };
  const handleToPhoneLogin = () => {
    // navigation.navigate("PhoneLogin");
    navigation.navigate("Count");
    setEmail("");
    setPassword("");
  };

  const handleToGoogleLogin = () => {
    navigation.navigate("GoogleLogin");
    setEmail("");
    setPassword("");
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <View style={styles.container}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>Đăng nhập với Email </Text>
        </View>
        <View style={styles.whiteFrame}>
          <View style={[styles.inputContainer, styles.inputContainerFirst]}>
            <Ionicons name="mail-outline" size={20} color="#0090FF" />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          {/* Ô input Mật khẩu */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#0090FF" />
            <TextInput
              placeholder="Mật khẩu"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          {/* ForgotPassword */}
          {/* Quên mật khẩu */}
          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Quên mật khẩu?
          </Text>
          {/* Nút Đăng nhập */}
          <TouchableOpacity style={styles.button} onPress={handleEmailLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
          {/* Nút đăng nhập bằng Google và Facebook */}
          <View>
            <Text style={styles.textOr}>Hoặc đăng nhập bằng</Text>
          </View>
          <View style={styles.socialButtons}>
            <TouchableOpacity
              onPress={() => handleToPhoneLogin()}
              style={[styles.socialButton, { backgroundColor: "#3b5998" }]}
            >
              <Text style={styles.socialButtonText}>Số Điện Thoại </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleToGoogleLogin()}
              style={[styles.socialButton, { backgroundColor: "#db4437" }]}
            >
              <Text style={styles.socialButtonText}>GOOGLE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Chưa có tài khoản? </Text>
            <Text
              style={styles.footerLink}
              onPress={() => navigation.navigate("Register")}
            >
              Đăng ký
            </Text>
          </View>
        </View>

        {/* Text chuyển sang Đăng ký */}
      </View>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#00F598", // Màu nền xanh lá cây
  },
  whiteFrame: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    width: 340,
    height: 646,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  wrapTitle: {
    width: "80%",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  inputContainerFirst: {
    marginTop: 60,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  forgotPassword: {
    color: "#FF8C00",
    textAlign: "center",
    marginBottom: 40,
    marginTop: 40,
    fontSize: 13,
  },
  button: {
    backgroundColor: "#00F598", // Màu nút giống màu nền
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
  },
  textOr: {
    textAlign: "center",
    color: "gray",
    fontSize: 14,
    marginTop: 90,
    marginBottom: 0,
    fontSize: 13,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  socialButton: {
    width: "48%",
    //     flex: 1,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  socialButtonText: { color: "#fff" },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 80 },
  footerText: { color: "gray", fontSize: 13 },
  footerLink: { color: "#00FF94", textDecorationLine: "underline" },
});

// khi nhập input thì bị đẩy lênn , fix cứng
// Thêm import KeyboardAvoidingView từ react-native.

// Bao bọc toàn bộ giao diện trong <KeyboardAvoidingView> với behavior và keyboardVerticalOffset để điều chỉnh khi bàn phím xuất hiện.
