import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth, app } from "../../../config/firebaseConfig";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

// const auth = getAuth(app);
//  +84986156736
// +8498247480284982474802
const PhoneLogin = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [confirm, setConfirm] = useState("PhoneLogin"); // PhoneOTP
  const [confirm, setConfirm] = useState(null); // PhoneOTP
  const [code, setCode] = useState("");
  const recaptchaVerifier = useRef(null);

  // Gửi OTP
  const sendOTP = async () => {
    try {
      console.log(">>> check phone ", phoneNumber);
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier.current
      );
      console.log(">>> ", confirmation);
      setConfirm(confirmation);
      Alert.alert("OTP đã được gửi!");
    } catch (error) {
      Alert.alert("Lỗi gửi OTP: " + error.message);
    }
  };

  // Xác thực OTP và gửi ID Token đến backend
  const verifyOTP = async () => {
    try {
      const userCredential = await confirm.confirm(code);
      const idToken = await userCredential.user.getIdToken(); // Lấy ID Token từ Firebase

      // Gửi ID Token đến backend để xác thực
      // const response = await fetch("http://localhost/api/auth/firebase", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ idToken }),
      // });

      // const data = await response.json();
      // if (data.jwtToken) {
      //   Alert.alert("Đăng nhập thành công!", `JWT: ${data.jwtToken}`);
      // } else {
      //   Alert.alert("Lỗi xác thực với backend!");
      // }

      const response = await fetch(
        "https://api-booking-app-gbfsg5f0e4hwfzh0.japaneast-01.azurewebsites.net/api/auth/firebase",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tokenId: idToken }),
        }
      );

      const data = await response.json();
      console.log(">>> data", data);
      if (data.data.accessToken) {
        // Alert.alert("Đăng nhập thành công!", `JWT: ${data.data.accessToken}`);
        Alert.alert("Đăng nhập thành công!");
      } else {
        Alert.alert("Lỗi xác thực với backend!");
      }
    } catch (error) {
      Alert.alert("OTP không đúng, thử lại!");
    }
  };

  const handleToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
      />

      <View style={styles.wrapTitle}>
        <Text style={styles.title}>Đăng nhập với số điện thoại</Text>
      </View>
      <View style={styles.whiteFrame}>
        {/* Tiêu đề */}
        {/* Ô input Phone */}
        {!confirm ? (
          <>
            <View style={[styles.inputContainer, styles.inputContainerFirst]}>
              <Ionicons name="call-outline" size={20} color="#0090FF" />
              <TextInput
                placeholder="Phone"
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={sendOTP}>
              <Text style={styles.buttonText}>Gửi OTP </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={[styles.inputContainer, styles.inputContainerFirst]}>
              <Ionicons name="call-outline" size={20} color="#0090FF" />
              <TextInput
                placeholder="OTP"
                style={styles.input}
                value={code}
                onChangeText={setCode}
                keyboardType="phone-pad"
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={verifyOTP}>
              <Text style={styles.buttonText}>Xác Thực OTP</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Nút Đăng nhập */}

        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Quên mật khẩu?
        </Text>
        {/* Nút đăng nhập bằng Google và Facebook */}
        <View>
          <Text style={styles.textOr}>Hoặc đăng nhập bằng</Text>
        </View>
        <View style={styles.socialButtons}>
          <TouchableOpacity
            onPress={() => handleToLogin()}
            style={[styles.socialButton, { backgroundColor: "#3b5998" }]}
          >
            <Text style={styles.socialButtonText}>EMAIL</Text>
          </TouchableOpacity>
          <TouchableOpacity
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
    </View>
  );
};
export default PhoneLogin;

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
    marginBottom: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  inputContainerFirst: {
    marginTop: 60,
    marginBottom: 50,
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
    marginBottom: 60,
    marginTop: 20,
    fontSize: 13,
  },
  button: {
    backgroundColor: "#00F598", // Màu nút giống màu nền
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginTop: 0,
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
