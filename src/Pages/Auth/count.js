import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
// import { useAppSelector, useAppDispatch } from "../redux/hooks";
// import { increase, decrease } from "../redux/slices/countSlice";
import { useAppSelector, useAppDispatch } from "../../Redux/hook";
import { increase, decrease } from "../../Redux/Slice/countSlice";

const CounterComponent = () => {
  // Lấy giá trị count từ store
  const count = useAppSelector((state) => state.count.count);
  console.log(count);
  const obj1 = useAppSelector((state) => state.text);
  console.log(obj1);
  const obj2 = useAppSelector((state) => state.auth);
  console.log(obj2);
  // Lấy dispatch để gửi action
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View>
        <Text>Count: {count}</Text>
        <Button title="Increase" onPress={() => dispatch(increase())} />
        <Button title="Decrease" onPress={() => dispatch(decrease())} />
      </View>
    </View>
  );
};

export default CounterComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00F598", // Màu nền xanh lá cây
  },
});
