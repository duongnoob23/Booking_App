import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
const RewardMember = () => {
  const navigation = useNavigation();
  const barBlurWidth = 0;
  return (
    <View style={styles.container}>
      <View style={styles.tierContainer}>
        <Text style={styles.tierText}>Bạc</Text>
        <Icon name="star" size={80} color="#D3D3D3" />
      </View>

      {/* Thanh tiến trình */}
      <View
        style={{ height: 20, justifyContent: "center", alignItems: "center" }}
      >
        {/* <ProgressBar
          progress={180 / 300}
          color="#007BFF"
          style={styles.progressBar}
        /> */}
        <View style={styles.progressBarGray}>
          <View style={styles.progressBarBlue}></View>
        </View>
      </View>
      <Text style={styles.progressText}>180/300$</Text>

      {/* Quyền lợi thành viên */}
      <View style={styles.benefitsContainer}>
        <View style={styles.benefitItem}>
          <Icon name="water-percent" size={50} color="#007BFF" />
          <Text style={styles.benefitText}>Giảm 10%</Text>
        </View>
        <View style={styles.benefitItem}>
          <Icon name="food" size={40} color="#007BFF" />
          <Text style={styles.benefitText}>Miễn phí bữa sáng</Text>
        </View>
      </View>

      {/* Điểm thưởng */}
      <TouchableOpacity
        style={styles.pointsContainer}
        onPress={() => navigation.navigate("Points")}
      >
        <View>
          <Text style={styles.pointsTitle}>Điểm: 2300</Text>
          <Text style={styles.pointsSubtitle}>
            432 points sẽ hết hạn vào 14/3/2025
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={30} color="#007BFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tierContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  tierText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D3D3D3",
    marginTop: 5,
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
    marginVertical: 10,
  },
  progressBarGray: {
    width: "80%",
    height: 8,
    borderRadius: 15,
    backgroundColor: "#D3D3D3",
    position: "relative",
  },
  progressBarBlue: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "blue",
    width: "50%",
    height: "100%",
    borderRadius: 15,
  },
  //   progressBarCustom
  progressText: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
  },
  benefitsContainer: {
    //     borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    marginVertical: 15,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderTopColor: "#D3D3D3",
    borderTopWidth: 1,
  },
  benefitText: {
    fontSize: 20,
    marginLeft: 10,
  },
  pointsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    marginTop: "auto",
    marginBottom: 20,
  },
  pointsTitle: {
    fontSize: 35,
    fontWeight: "bold",
  },
  pointsSubtitle: {
    fontSize: 14,
    color: "#D3D3D3",
  },
});

export default RewardMember;
