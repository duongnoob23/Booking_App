import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initValue = {
  accessToken: null,
  user: null,
  isLoggedIn: true,
  loading: false,
  error: null,
  userInfor: {
    userId: "0",
    firstName: "Lâm",
    lastName: "Tiến Dưỡng ",
    email: "lamtiendung11082002@gmail.com",
    phoneNumber: "0982474802",
    country: "+84",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initValue,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.loading = false;
      AsyncStorage.setItem("accessToken", action.payload.accessToken); // Lưu token
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.accessToken = null;
      state.user = null;
      state.isLoggedIn = false;
      AsyncStorage.removeItem("accessToken"); // Xóa token
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;
export default authSlice.reducer;
