import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const VOUCHERS = {
  unused: [
    {
      id: "1",
      title: "Đơn bất kỳ từ 0Đ Tối đa 15K",
      condition: "",
      expiry: "HSD: 16.01.2025",
      status: "unused",
      iconBackground: "#00A4E8",
    },
    {
      id: "2",
      title: "Hoàn 10% Xu",
      condition: "Đơn tối thiểu ₫300K Hoàn tối đa ₫50K",
      expiry: "Có hiệu lực từ: 17.01.2025",
      status: "unused",
      iconBackground: "#EE4D2D",
    },
    {
      id: "3",
      title: "Hoàn 10% Xu",
      condition: "Đơn tối thiểu ₫1Tr Hoàn tối đa ₫200K",
      expiry: "Có hiệu lực từ: 17.01.2025",
      status: "unused",
      iconBackground: "#EE4D2D",
    },
    {
      id: "4",
      title: "Hoàn 10% Xu",
      condition: "Đơn tối thiểu ₫500K Hoàn tối đa ₫100K",
      expiry: "Có hiệu lực từ: 17.01.2025",
      status: "unused",
      iconBackground: "#EE4D2D",
    },
  ],
  used: [
    {
      id: "5",
      title: "Giảm 20K đơn từ 100K",
      condition: "Đơn tối thiểu ₫100K",
      expiry: "HSD: 10.04.2025",
      status: "used",
      iconBackground: "#EE4D2D",
    },
    {
      id: "6",
      title: "Hoàn 5% Xu",
      condition: "Đơn tối thiểu ₫200K Hoàn tối đa ₫30K",
      expiry: "HSD: 12.04.2025",
      status: "used",
      iconBackground: "#00A4E8",
    },
  ],
  expired: [
    {
      id: "7",
      title: "Giảm 50K đơn từ 300K",
      condition: "Đơn tối thiểu ₫300K",
      expiry: "HSD: 15.03.2025",
      status: "expired",
      iconBackground: "#EE4D2D",
    },
    {
      id: "8",
      title: "Hoàn 15% Xu",
      condition: "Đơn tối thiểu ₫500K Hoàn tối đa ₫80K",
      expiry: "HSD: 10.03.2025",
      status: "expired",
      iconBackground: "#00A4E8",
    },
  ],
};

const PersonalVoucher = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);
  const [activeTab, setActiveTab] = useState("unused");

  const renderVoucher = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleToVoucherDetail()}
      style={[
        styles.voucherItem,
        activeTab === "expired" && styles.expiredVoucher,
      ]}
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

  const handleToVoucherDetail = () => {
    navigation.navigate("VoucherDetail");
  };

  const voucherData =
    activeTab === "unused"
      ? VOUCHERS.unused
      : activeTab === "used"
      ? VOUCHERS.used
      : VOUCHERS.expired;

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {["unused", "used", "expired"].map((tab) => (
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
              {tab === "unused"
                ? "Có thể sử dụng"
                : tab === "used"
                ? "Đã dùng"
                : "Đã hết hạn"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={voucherData}
        renderItem={renderVoucher}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {activeTab === "unused"
                ? "Không có voucher nào có thể sử dụng."
                : activeTab === "used"
                ? "Không có voucher nào đã dùng."
                : "Không có voucher nào đã hết hạn."}
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default PersonalVoucher;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#EE4D2D",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#EE4D2D",
    fontWeight: "bold",
  },
  voucherItem: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: "hidden",
  },
  expiredVoucher: {
    opacity: 0.5,
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
    flexDirection: "row",
  },
  voucherContentLeft: {
    width: "70%",
  },
  voucherContentRight: {
    justifyContent: "center",
    alignItems: "center",
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
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
