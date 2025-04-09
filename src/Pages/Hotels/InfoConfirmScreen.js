import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { cloneDeep } from "lodash";
const InfoConfirmScreen = (props) => {
  const { handleOrderConfirm } = props;
  const [infomation, setInfomation] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phoneNumber: "",
    phoneCountry: "+84",
  });

  const onChangeInfomation = (value, name) => {
    const _infomation = cloneDeep(infomation);
    _infomation[name] = value;
    setInfomation(_infomation);
  };

  const handleInfoConfirm = () => {
    handleOrderConfirm();
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.header__overlay}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.header__title}>THÔNG TIN CÁ NHÂN</Text>
        </TouchableOpacity>
      </View> */}
      <Text style={styles.title}>THÔNG TIN CÁ NHÂN</Text>

      <View style={styles.inputContainer}>
        <View>
          <Ionicons
            name="person-outline"
            size={20}
            color="#007AFF"
            style={styles.icon}
          />
        </View>
        <TextInput
          style={styles.input}
          value={infomation.firstName}
          placeholder="Họ"
          onChangeText={(text) => onChangeInfomation(text, "firstName")}
        />
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Ionicons
            name="person-outline"
            size={20}
            color="#007AFF"
            style={styles.icon}
          />
        </View>
        <TextInput
          style={styles.input}
          value={infomation.secondName}
          placeholder="Tên"
          onChangeText={(text) => onChangeInfomation(text, "secondName")}
        />
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#007AFF"
            style={styles.icon}
          />
        </View>
        <TextInput
          style={styles.input}
          value={infomation.email}
          placeholder="Email"
          onChangeText={(text) => onChangeInfomation(text, "email")}
        />
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Ionicons
            name="call-outline"
            size={20}
            color="#007AFF"
            style={styles.icon}
          />
        </View>
        <View>
          <Text style={styles.phoneCode}>{infomation.phoneCountry}</Text>
        </View>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={infomation.phoneNumber}
          placeholder="Số điện thoại"
          onChangeText={(text) => onChangeInfomation(text, "phoneNumber")}
        />
        <View>
          <Ionicons
            name="checkmark-circle"
            size={20}
            color="#00C853"
            style={styles.checkIcon}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleInfoConfirm()}
      >
        <Text style={styles.buttonText}>Xác nhận thông tin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header__overlay: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    //     padding: 20,
    paddingHorizontal: 5,
    paddingVertical: 30,
  },
  header__icon__start: {
    marginLeft: "auto",
  },
  header__title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 0,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
    // marginVertical: 50,
    marginTop: 30,
    marginBottom: 50,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 30,
    alignItems: "center",
    // justifyContent: "center",
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
  button: {
    backgroundColor: "#00F598", // Màu xanh dương thay vì gradient
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
  },
});

export default InfoConfirmScreen;
