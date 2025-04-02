import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initText = [
  {
    accessToken: null,
    user: null,
    isLogged: false,
    loading: false,
    error: null,
  },
];

const textSlice = createSlice({
  name: "text",
  initialState: {
    accessToken: null,
    user: null,
    isLogged: false,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isLogged = true;
      state.loading = false;
      AsyncStorage.setItem("accessToken", action.payload.accessToken);
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.accessToken = null;
      state.user = null;
      state.isLogged = false;
      AsyncStorage.removeItem("accessToken");
    },
  },
});

export const { loginStart, loginFailure, loginSuccess, logout } =
  textSlice.actions;

export default textSlice.reducer;
