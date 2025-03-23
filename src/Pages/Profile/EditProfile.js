import React, { useState, useLayoutEffect } from "react";
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
// import * as ImagePicker from "expo-image-picker";
// import { Ionicons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

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
  //   const {} = route.params;
  //   const { userData, onSave } = route.params;

  const userData = [{}];
  // State để lưu dữ liệu chỉnh sửa
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);
  const [avatar, setAvatar] = useState(userData.avatar);

  // Xử lý chọn ảnh
  const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.All,
    //       allowsEditing: true,
    //       aspect: [1, 1],
    //       quality: 1,
    //     });
    //     console.log("Image URI:", result.assets[0].uri);
    //     if (!result.canceled) {
    //       setAvatar(result.assets[0].uri);
    //     }
  };

  // Xử lý lưu thông tin
  // const handleSave = async () => {
  //   const updatedData = { name, email, phone, avatar };
  //   await AsyncStorage.setItem("userProfile", JSON.stringify(updatedData));
  //   navigation.goBack();
  // };

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
              uri: "https://media.istockphoto.com/id/1587604256/vi/anh/ch%C3%A2n-dung-lu%E1%BA%ADt-s%C6%B0-v%C3%A0-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-da-%C4%91en-v%E1%BB%9Bi-m%C3%A1y-t%C3%ADnh-b%E1%BA%A3ng-n%E1%BB%A5-c%C6%B0%E1%BB%9Di-v%C3%A0-h%E1%BA%A1nh-ph%C3%BAc-t%E1%BA%A1i-n%C6%A1i-l%C3%A0m.jpg?s=612x612&w=0&k=20&c=0hnV6JuSMy8XAV25oJFzQeHPYysYe8cfHUyhgZlQYQc=",
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
// import React from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons"; // Dùng icon từ Expo (cần cài đặt @expo/vector-icons)

// const EditProfile = () => {
//   return (
//     <View style={styles.profileScreen}>
//       {/* Thanh tiêu đề */}
//       <View style={styles.profileScreen__header}>
//         <TouchableOpacity>
//           <Ionicons name="chevron-back" size={24} color="#007AFF" />
//         </TouchableOpacity>
//         <Text style={styles.profileScreen__title}>Chỉnh sửa hồ sơ</Text>
//       </View>

//       {/* Avatar */}
//       <View style={styles.profileScreen__avatarContainer}>
//         <Image
//           source={{ uri: "https://via.placeholder.com/100" }} // Placeholder cho avatar
//           style={styles.profileScreen__avatar}
//         />
//         <View style={styles.profileScreen__avatarOverlay}>
//           <Ionicons name="camera" size={24} color="#007AFF" />
//         </View>
//       </View>

//       {/* Trường thông tin */}
//       <View style={styles.profileScreen__form}>
//         {/* Tên đầy đủ */}
//         <View style={styles.profileScreen__inputField}>
//           <Ionicons
//             name="person"
//             size={20}
//             color="#007AFF"
//             style={styles.profileScreen__inputIcon}
//           />
//           <View style={styles.profileScreen__inputWrapper}>
//             <Text style={styles.profileScreen__inputLabel}>Tên đầy đủ</Text>
//             <TextInput
//               style={styles.profileScreen__input}
//               value="John Smith"
//               editable={false}
//             />
//           </View>
//         </View>

//         {/* Email */}
//         <View style={styles.profileScreen__inputField}>
//           <Ionicons
//             name="mail"
//             size={20}
//             color="#007AFF"
//             style={styles.profileScreen__inputIcon}
//           />
//           <View style={styles.profileScreen__inputWrapper}>
//             <Text style={styles.profileScreen__inputLabel}>Email</Text>
//             <TextInput
//               style={styles.profileScreen__input}
//               value="johnsmith@gmail.com"
//               editable={false}
//             />
//           </View>
//         </View>

//         {/* Số điện thoại */}
//         <View style={styles.profileScreen__inputField}>
//           <Ionicons
//             name="phone-portrait"
//             size={20}
//             color="#007AFF"
//             style={styles.profileScreen__inputIcon}
//           />
//           <View style={styles.profileScreen__inputWrapper}>
//             <Text style={styles.profileScreen__inputLabel}>Số điện thoại</Text>
//             <View style={styles.profileScreen__phoneWrapper}>
//               <Text style={styles.profileScreen__phoneCode}>+225</Text>
//               <Ionicons
//                 name="checkmark-circle"
//                 size={20}
//                 color="#00FF00"
//                 style={styles.profileScreen__phoneIcon}
//               />
//               <TextInput
//                 style={styles.profileScreen__phoneInput}
//                 value="6968698966"
//                 editable={false}
//               />
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Nút Cập nhật */}
//       <TouchableOpacity style={styles.profileScreen__submitButton}>
//         <Text style={styles.profileScreen__submitButtonText}>Cập nhật</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   profileScreen: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     paddingTop: 50, // Khoảng cách từ thanh trạng thái
//   },
//   profileScreen__header: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 15,
//     marginBottom: 20,
//   },
//   profileScreen__title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     marginLeft: 10,
//   },
//   profileScreen__avatarContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   profileScreen__avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   profileScreen__avatarOverlay: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: "#FFFFFF",
//     borderWidth: 2,
//     borderColor: "#007AFF",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   profileScreen__form: {
//     paddingHorizontal: 15,
//   },
//   profileScreen__inputField: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   profileScreen__inputIcon: {
//     marginRight: 10,
//   },
//   profileScreen__inputWrapper: {
//     flex: 1,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E0E0E0",
//     paddingBottom: 5,
//   },
//   profileScreen__inputLabel: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   profileScreen__input: {
//     fontSize: 16,
//     color: "#000",
//     padding: 0, // Đảm bảo không có padding mặc định làm lệch
//   },
//   profileScreen__phoneWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   profileScreen__phoneCode: {
//     fontSize: 16,
//     color: "#00FF00",
//     marginRight: 5,
//   },
//   profileScreen__phoneIcon: {
//     marginRight: 5,
//   },
//   profileScreen__phoneInput: {
//     fontSize: 16,
//     color: "#000",
//     flex: 1,
//     padding: 0,
//   },
//   profileScreen__submitButton: {
//     backgroundColor: "#00A1D6", // Màu trung bình giữa #007AFF và #00C4B4
//     marginHorizontal: 15,
//     marginTop: 40,
//     paddingVertical: 15,
//     borderRadius: 25,
//     alignItems: "center",
//   },
//   profileScreen__submitButtonText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
// });

// export default EditProfile;
