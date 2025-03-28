import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  navigation,
  ImageBackground,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
// import { Ionicons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
// import PhoneInput from "react-native-phone-number-input";
// import { parsePhoneNumberFromString } from "libphonenumber-js"; // Import thư viện để phân tích số điện thoại
import AsyncStorage from "@react-native-async-storage/async-storage";
// import PhoneInput from "react-native-phone-input";

const EditProfile = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);
  // const navigation = useNavigation();
  const route = useRoute();
  const {} = route.params;
  const { userData, onSave } = route.params;
  console.log(">>> check userData", userData);
  // const userData = [{}];
  // State để lưu dữ liệu chỉnh sửa
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);
  const [avatar, setAvatar] = useState(userData.avatar);

  const tmp = phone;
  const Sphone = parsePhoneNumberFromString(tmp);
  // Xử lý chọn ảnh
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log("Image URI:", result.assets[0].uri);
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      const newAvatar = result.assets[0].uri;
      await handleSaveAvatar(newAvatar);
    }
  };

  const handleSaveAvatar = async (newAvatar) => {
    const updatedData = { name, email, phone, avatar: newAvatar };
    await AsyncStorage.setItem("userProfile", JSON.stringify(updatedData));
  };

  const handleSave = async () => {
    const updatedData = { name, email, phone, avatar };
    await AsyncStorage.setItem("userProfile", JSON.stringify(updatedData));
    navigation.navigate("Profile", { updated: true }); // Truyền tham số để báo màn hình trước cập nhật
  };

  const handleToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}

      <TouchableOpacity style={styles.header} onPress={() => handleToProfile()}>
        <View style={styles.headerItem}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.headerText}>Chỉnh sửa hồ sơ </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.avatarContainer} onPress={pickImage}>
        <View style={styles.avatarWapper}>
          <Image
            source={{
              uri: `${avatar}`,
            }}
            style={styles.avatar}
          />
          <View style={styles.avatarOverlay}>{/* <Text>hello</Text> */}</View>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={24}
            color="white"
            style={styles.cameraIcon}
            onPress={pickImage}
          />
        </TouchableOpacity>
      </View>

      {/* Form nhập thông tin */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Tên đầy đủ</Text>
        <View style={styles.inputText}>
          <Ionicons name="person-outline" size={20} color="#0090FF" />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Tên"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email </Text>
        <View style={styles.inputText}>
          <Ionicons name="mail-outline" size={20} color="#0090FF" />
          <TextInput
            style={styles.input}
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="Email"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Số điện thoại </Text>
        <View style={styles.inputText}>
          <Ionicons name="phone-portrait-outline" size={20} color="#0090FF" />
          <View style={styles.inputGroup}>
            <Text>+225</Text>
            <Ionicons
              name="chevron-down-outline"
              size={20}
              color="#00F598"
              marginLeft="5"
              marginRight="5"
            />
            <TextInput
              style={[
                styles.input,
                { borderLeftColor: "gray" },
                { borderLeftWidth: 1 },
              ]}
              value={phone}
              onChangeText={setPhone}
              placeholder="số điện thoại"
            />
          </View>
        </View>
      </View>
      {/* <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Số điện thoại</Text>
        <View style={styles.inputText}>
          <Ionicons
            name="phone-portrait-outline"
            size={20}
            color="#0090FF"
            style={styles.icon}
          />
          <PhoneInput
            defaultValue={
              Sphone && Sphone.nationalNumber ? Sphone.nationalNumber : ""
            }
            defaultCode={Sphone && Sphone.country ? Sphone.country : ""}
            onChangeFormattedText={(text) => setPhone(text)}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textContainer}
          />
        </View>
      </View> */}
      {/* <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      /> */}
      {/* <PhoneInput
        initialCountry="vn"
        value={phone}
        onChangePhoneNumber={setPhone}
      /> */}

      {/* Nút cập nhật */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerItem: {
    marginTop: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  avatarContainer: {
    alignSelf: "center",
    position: "relative",
    marginBottom: 20,
  },
  avatarWrapper: {
    position: "relative", // Đặt wrapper để chứa ảnh và overlay
    width: 120,
    height: 120,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 0.6,
    borderRadius: 60, // Đảm bảo overlay cũng bo tròn như ảnh
  },
  cameraIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#00C853",
    padding: 5,
    borderRadius: 20,
  },
  inputContainer: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 20,
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 12,
  },
  input: {
    // backgroundColor: "#F1F1F1",
    // padding: 12,
    // borderRadius: 8,
    // marginBottom: 10,
  },
  inputText: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "#F1F1F1",
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#00F598",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  saveText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default EditProfile;
