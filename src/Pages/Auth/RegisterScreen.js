import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteFrame}>
        {/* Tiêu đề */}
        <Text style={styles.title}>Đăng ký</Text>

        {/* Ô input Họ tên đầy đủ */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#888" />
          <TextInput placeholder="Họ tên đầy đủ" style={styles.input} />
        </View>

        {/* Ô input Email */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#888" />
          <TextInput placeholder="Email" style={styles.input} />
        </View>

        {/* Ô input Số điện thoại */}
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="#888" />
          <TextInput
            placeholder="Số điện thoại"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        {/* Ô input Mật khẩu */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" />
          <TextInput
            placeholder="Mật khẩu"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Nút Tạo tài khoản */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tạo tài khoản</Text>
        </TouchableOpacity>

        {/* Nút đăng nhập bằng Google và Facebook */}
        <View style={styles.socialButtons}>
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#3b5998" }]}
          >
            <Text style={styles.socialButtonText}>FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialButton, { backgroundColor: "#db4437" }]}
          >
            <Text style={styles.socialButtonText}>GOOGLE</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Text chuyển sang Đăng nhập */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Đã có tài khoản? </Text>
        <Text
          style={styles.footerLink}
          onPress={() => navigation.navigate("Login")}
        >
          Đăng nhập
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00F598", // Màu nền xanh lá cây
  },
  whiteFrame: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 20 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#00F598", // Màu nút giống màu nền
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  socialButton: { flex: 1, padding: 10, borderRadius: 5, alignItems: "center" },
  socialButtonText: { color: "#fff" },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  footerText: { color: "#fff" },
  footerLink: { color: "#fff", textDecorationLine: "underline" },
});

export default RegisterScreen;
