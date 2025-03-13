import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
      <View style={styles.whiteFrame}>
        {/* Tiêu đề */}

        {/* Ô input Email */}
        <View style={[styles.inputContainer, styles.inputContainerFirst]}>
          <Ionicons name="mail-outline" size={20} color="#0090FF" />
          <TextInput placeholder="Email" style={styles.input} />
        </View>

        {/* Ô input Mật khẩu */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#0090FF" />
          <TextInput
            placeholder="Mật khẩu"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Quên mật khẩu */}
        <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>

        {/* Nút Đăng nhập */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>

        {/* Nút đăng nhập bằng Google và Facebook */}
        <View>
          <Text style={styles.textOr}>Hoặc đăng nhập bằng</Text>
        </View>
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
  );
};

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
    marginTop: 110,
    marginBottom: 0,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  socialButton: {
    width: "48%",
    //     flex: 1,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  socialButtonText: { color: "#fff" },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 60 },
  footerText: { color: "gray" },
  footerLink: { color: "#00FF94", textDecorationLine: "underline" },
});

export default LoginScreen;
