import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList, Modal, TextInput } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const tabs = [
    { key: "reviews", label: "Đánh giá (200)" },
    { key: "photos", label: "Ảnh (10)" },
    { key: "nearby", label: "Gần đây (24)" },
];


const amenitiesData = [
    { icon: "wifi", text: "WiFi miễn phí" },
    { icon: "fitness-center", text: "Gym" },
    { icon: "pool", text: "Hồ bơi" },
    { icon: "restaurant", text: "Ăn sáng miễn phí" },
];

const photoUrls = [
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
    require("@/assets/images/react-logo.png"),
];

export default function DetailScreen() {
    const [selectedTab, setSelectedTab] = useState("reviews");
    const [isModalVisible, setModalVisible] = useState(true);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={require("@/assets/images/icon.png")} style={styles.hotelImage} />
                <View style={styles.header}>
                    <Text style={styles.hotelName}>Heden Golf</Text>
                    <Text style={styles.location}>
                        <Ionicons name="location-outline" size={16} color="#007AFF" /> Ba Đình, Hà Nội
                    </Text>
                </View>

                <View style={styles.tabContainer}>
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab.key}
                            onPress={() => setSelectedTab(tab.key)}
                            style={[styles.tab, selectedTab === tab.key && styles.activeTab]}
                        >
                            <Text style={[styles.tabText, selectedTab === tab.key && styles.activeTabText]}>
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {/* Nội dung của tab */}
                {selectedTab === "reviews" && <ReviewsScreen />}
                {selectedTab === "photos" && <PhotosScreen />}
                {selectedTab === "nearby" && <NearbyScreen />}
            </ScrollView>


            {/* Nút đặt ngay */}
            <View style={styles.footer}>
                <Text style={styles.price}>$127 TRUNG BÌNH/ĐÊM</Text>
                <TouchableOpacity style={styles.bookButton} onPress={() => router.navigate("/screens/hotel/pay")}>
                    <Text style={styles.bookText}>ĐẶT NGAY</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const ReviewsScreen = () => (
    <View style={styles.content}>
        <Text style={styles.sectionTitle}>GIỚI THIỆU</Text>
        <Text style={styles.description}>
            Nằm trong những khu vườn cảnh nhìn ra đầm phá Biển, khách sạn này có hồ bơi, nhà hàng, và khu vực giải trí.
        </Text>
        <Text style={styles.sectionTitle}>TIỆN ÍCH</Text>
        <FlatList
            data={amenitiesData}
            horizontal
            renderItem={({ item }) => <Feature icon={item.icon} text={item.text} />}
            keyExtractor={(item, index) => `${item.text}-${index}`}
        />

    </View>
);

const PhotosScreen = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <View style={styles.content}>
            <Text style={styles.sectionTitle}>Hình ảnh khách sạn</Text>
            <View style={styles.imageContainer}>
                {photoUrls.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => setSelectedImage(item)} style={styles.foodImage}  >
                        <Image source={item} />
                    </TouchableOpacity>
                ))}
            </View>

            {/* Modal hiển thị ảnh lớn */}
            <Modal visible={!!selectedImage} transparent={true} animationType="fade">
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedImage(null)}>
                        <Text style={styles.closeText}>✕</Text>
                    </TouchableOpacity>
                    {selectedImage && <Image source={selectedImage} style={styles.fullImage} />}
                </View>
            </Modal>
        </View>
    )
};

const NearbyScreen = () => (
    <View style={styles.content}>
        <Text style={styles.sectionTitle}>Vị trí</Text>
        <Text style={styles.description}>Khách sạn cách trung tâm Hà Nội 5 km, gần Công viên Thủ Lệ.</Text>
    </View>
);

const Feature = ({ icon, text }: { icon: any; text: string }) => (
    <View style={styles.feature}>
        <MaterialIcons name={icon} size={24} color="#007AFF" />
        <Text style={styles.featureText}>{text}</Text>
    </View>
);


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    hotelImage: { width: "100%", height: 200 },
    header: { padding: 15 },
    hotelName: { fontSize: 22, fontWeight: "bold" },
    location: { fontSize: 14, color: "#007AFF" },
    tabContainer: { flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 1, borderBottomColor: "#ddd" },
    tab: { paddingVertical: 10 },
    tabText: { fontSize: 16, color: "#888" },
    activeTab: { borderBottomWidth: 2, borderBottomColor: "#007AFF" },
    activeTabText: { color: "#007AFF" },
    content: { padding: 15 },
    sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
    description: { fontSize: 14, color: "#666" },
    feature: { flexDirection: "row", alignItems: "center", marginRight: 20 },
    featureText: { marginLeft: 5 },
    foodImage: { width: "30%", marginRight: 10, borderRadius: 5 },
    footer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 15, borderTopWidth: 1, borderTopColor: "#ddd" },
    price: { fontSize: 18, fontWeight: "bold" },
    bookButton: { backgroundColor: "#007AFF", padding: 10, borderRadius: 5 },
    bookText: { color: "#fff", fontWeight: "bold" },
    imageContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
        justifyContent: "center",
        alignItems: "center",
    },
    fullImage: { width: "90%", height: "70%", resizeMode: "contain" },
    closeButton: { position: "absolute", top: 40, right: 20 },
    closeText: { fontSize: 30, color: "#fff" },

});