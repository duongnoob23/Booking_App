import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList, Modal, TextInput } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";



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

export default function PayScene() {
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
                <Pay />
            </ScrollView>
        </View>
    );
}


const Pay = () => {

    return (
        <View style={styles.container}>
            {/* <Modal transparent animationType="slide"> */}
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.sectionTitle}>INFORMATION</Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>First name</Text>
                        <TextInput style={styles.input} value="John Smith" />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Last name</Text>
                        <TextInput style={styles.input} value="John Smith" />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} value="johnsmith@gmail.com" />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Mobile number</Text>
                        <TextInput style={styles.input} value="+225 698698966" />
                    </View>

                    {/* Nút Confirm */}
                    <TouchableOpacity style={styles.confirmButton}>
                        <Text style={styles.confirmButtonText}>Confirm information</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


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


    bookNowButton: { backgroundColor: "blue", padding: 15, borderRadius: 5 },
    bookNowText: { color: "white", fontSize: 16 },
    modalContent: { width: "100%", backgroundColor: "white", padding: 20 },
    inputGroup: { marginVertical: 5 },
    label: { fontSize: 14, color: "gray" },
    input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 5, padding: 10, marginTop: 5 },
    confirmButton: { backgroundColor: "blue", padding: 15, marginTop: 20, borderRadius: 5 },
    confirmButtonText: { color: "white", textAlign: "center", fontSize: 16 }
});