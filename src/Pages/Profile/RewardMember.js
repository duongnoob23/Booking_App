import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Color from "color";

const RANKS = [
  {
    name: "Đồng",
    color: "#d3a652",
    minOrders: 0,
    minSpending: 0,
  },
  {
    name: "Bạc",
    color: "#677486",
    minOrders: 5,
    minSpending: 1000000,
  },
  {
    name: "Vàng",
    color: "#f3b238d6",
    minOrders: 15,
    minSpending: 5000000,
  },
  {
    name: "Bạch Kim",
    color: "#6fd1d6",
    minOrders: 30,
    minSpending: 10000000,
  },
];

const user = {
  name: "John",
  Orders: 15,
  Spend: 5000000,
};

const transactions = [
  { id: "1", type: "earned", points: 500, date: "2025-04-15" },
  { id: "2", type: "converted", points: 1000, cash: 2, date: "2025-04-14" },
  { id: "3", type: "earned", points: 200, date: "2025-04-13" },
];

const VOUCHERS = [
  {
    id: "1",
    title: "Giảm 20% đơn từ 1.5Tr",
    condition: "Đơn tối thiểu ₫1.500K",
    expiry: "HSD: 15.03.2025",
    status: "unused",
    iconBackground: "#00A4E8",
  },
  {
    id: "2",
    title: "Giảm 100K đơn đầu tiên",
    condition: "Không giới hạn giá trị",
    expiry: "HSD: 12.03.2025",
    status: "unused",
    iconBackground: "#EE4D2D",
  },
  {
    id: "3",
    title: "Giảm 50K với Mastercard",
    condition: "Thanh toán qua Mastercard",
    expiry: "HSD: 13.03.2025",
    status: "unused",
    iconBackground: "#EE4D2D",
  },
];

const RewardMember = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);

  const [activeTab, setActiveTab] = useState("Overview");

  const userRank =
    [...RANKS]
      .reverse()
      .find(
        (rank) =>
          user.Orders >= rank.minOrders && user.Spend >= rank.minSpending
      ) || RANKS[0];

  const currentRankIndex = RANKS.findIndex(
    (rank) => rank.name === userRank.name
  );

  const nextRank = RANKS[currentRankIndex + 1];
  let progressOrders = 100;
  let progressSpend = 100;
  if (nextRank) {
    progressOrders = Math.min((user.Orders / nextRank.minOrders) * 100, 100);
    progressSpend = Math.min((user.Spend / nextRank.minSpending) * 100, 100);
  }

  const handleToVoucherDetail = () => {
    navigation.navigate("VoucherDetail");
  };

  const renderRank = ({ item }) => (
    <View
      style={[
        styles.rankItem,
        { borderColor: item.color },
        userRank.name === item.name && styles.currentRank,
      ]}
    >
      <Text style={[styles.rankName, { color: item.color }]}>{item.name}</Text>
      <Text style={styles.rankCondition}>
        {`Đơn hàng ≥ ${
          item.minOrders
        } | Chi tiêu ≥ ${item.minSpending.toLocaleString()} VNĐ`}
      </Text>
    </View>
  );

  const renderVoucher = ({ item }) => (
    <TouchableOpacity
      style={styles.voucherItem}
      onPress={() => handleToVoucherDetail()}
    >
      <View style={styles.iconContainer}>
        <View
          style={[
            styles.voucherIconContainer,
            { backgroundColor: item.iconBackground },
          ]}
        >
          <Text style={styles.voucherIcon}>S</Text>
        </View>
      </View>
      <View style={styles.voucherContent}>
        <View style={styles.voucherContentLeft}>
          <Text style={styles.voucherTitle}>{item.title}</Text>
          {item.condition ? (
            <Text style={styles.voucherCondition}>{item.condition}</Text>
          ) : null}
          <Text style={styles.voucherExpiry}>{item.expiry}</Text>
          <View style={styles.voucherActions}>
            <TouchableOpacity>
              <Text style={styles.conditionText}>Điều kiện</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.voucherContentRight}>
          <TouchableOpacity
            style={[
              styles.actionButton,
              item.status === "unused"
                ? styles.actionButtonUnused
                : styles.actionButtonUsed,
            ]}
            onPress={() =>
              console.log(
                item.status === "unused"
                  ? "Dùng ngay mã: " + item.id
                  : "Voucher đã dùng/đã hết hạn"
              )
            }
          >
            <Text style={styles.actionButtonText}>
              {item.status === "unused"
                ? "Dùng ngay"
                : item.status === "used"
                ? "Đã dùng"
                : "Hết hạn"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderOverview = () => (
    <View style={styles.overviewContainer}>
      <View
        style={[
          styles.pointsCard,
          { backgroundColor: Color(userRank.color).hex() },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.pointsLabel}>Thứ hạng</Text>
          <Text
            style={[
              styles.pointsRank,
              { backgroundColor: Color(userRank.color).lighten(0.1).hex() },
            ]}
          >
            {userRank.name}
          </Text>
        </View>

        <View style={styles.progressRow}>
          <View style={styles.progressBox}>
            <Text style={styles.progressTitle}>Đơn hàng</Text>
            <Text style={styles.progressStatus}>
              {user.Orders}/{nextRank?.minOrders || user.Orders}
            </Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${progressOrders}%`,
                    backgroundColor: Color(userRank.color).lighten(0.3).hex(),
                  },
                ]}
              />
            </View>
          </View>

          <View style={styles.progressBox}>
            <Text style={styles.progressTitle}>Chi tiêu</Text>
            <Text style={styles.progressStatus}>
              {user.Spend.toLocaleString()} VNĐ /
              {nextRank?.minSpending.toLocaleString() ||
                user.Spend.toLocaleString()}{" "}
              VNĐ
            </Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${progressSpend}%`,
                    backgroundColor: Color(userRank.color).lighten(0.3).hex(),
                  },
                ]}
              />
            </View>
          </View>
        </View>

        <Text style={styles.updateNote}>
          Thứ hạng sẽ được cập nhật lại sau 30.06.2025
        </Text>
      </View>

      <View style={styles.voucherSection}>
        <Text style={styles.sectionTitle}>Ưu đãi từ hệ thống</Text>
        <FlatList
          data={VOUCHERS}
          renderItem={renderVoucher}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.voucherList}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {["Overview", "Rating"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab === "Overview" ? "Tổng quan" : "Xếp hạng"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === "Overview" && renderOverview()}

      {activeTab === "Rating" && (
        <View style={styles.ranksContainer}>
          <FlatList
            data={RANKS}
            renderItem={renderRank}
            keyExtractor={(item) => item.name}
          />
        </View>
      )}
    </View>
  );
};

export default RewardMember;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  tabContainer: {
    flexDirection: "row",
    margin: 16,
    marginBottom: 0,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#DDD",
  },
  activeTab: {
    borderBottomColor: "#007AFF",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  overviewContainer: {
    flex: 1,
  },
  pointsCard: {
    padding: 16,
    borderRadius: 12,
    margin: 16,
    marginBottom: 8,
  },
  pointsLabel: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  pointsRank: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    color: "#fff",
    fontWeight: "600",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  progressBox: {
    width: "48%",
  },
  progressTitle: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },
  progressStatus: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 6,
  },
  progressBar: {
    height: 8,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 4,
  },
  updateNote: {
    marginTop: 12,
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  voucherSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  voucherList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  voucherItem: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginVertical: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: "hidden",
  },
  iconContainer: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  voucherIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFF",
    borderStyle: "dashed",
  },
  voucherIcon: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },
  voucherContent: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 12,
  },
  voucherLabelContainer: {
    backgroundColor: "#00A4E8",
    alignSelf: "flex-start",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  voucherLabel: {
    fontSize: 10,
    color: "#FFF",
    fontWeight: "bold",
  },
  voucherTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
  voucherCondition: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  voucherExpiry: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  voucherActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  conditionText: {
    fontSize: 12,
    color: "#00A4E8",
    fontWeight: "500",
  },
  actionButton: {
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  actionButtonUnused: {
    backgroundColor: "#EE4D2D",
  },
  actionButtonUsed: {
    backgroundColor: "#CCCCCC",
  },
  actionButtonText: {
    fontSize: 12,
    color: "#FFF",
    fontWeight: "bold",
  },
  ranksContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  rankItem: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  currentRank: {
    backgroundColor: "#F0F0F0",
  },
  rankName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rankCondition: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  voucherContent: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 12,
    flexDirection: "row",
  },
  voucherContentLeft: {
    width: "70%",
  },
  voucherContentRight: {
    justifyContent: "center",
    alignItems: "center",
  },
});
