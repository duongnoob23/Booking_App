import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabsLayout() {

  return (
    <Tabs screenOptions={
      {
        tabBarBackground:
          () => (<LinearGradient colors={["#0090FF", "#00FF94"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={styles.gradient} />)
      }}
    >
      <Tabs.Screen name="room" options={{ title: "Phong", tabBarIcon: () => <></>, headerShown: false }} />
      <Tabs.Screen name="incentive" options={{ title: "Ưu đãi", tabBarIcon: () => <></>, headerShown: false }} />
      <Tabs.Screen name="booker" options={{ title: "Đã đặt ", tabBarIcon: () => <></>, headerShown: false }} />
      <Tabs.Screen name="notify" options={{ title: "Thông báo ", tabBarIcon: () => <></>, headerShown: false }} />
      <Tabs.Screen name="profile" options={{ title: "Tài khoản", tabBarIcon: () => <></>, headerShown: false }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  }
});
