import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "../../Constant/Constant";
// isLoggedIn: false,
const initValue = {
  accessToken: null,

  // accessToken:
  //   "eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzVG9rZW4iLCJyb2xlIjpbIlJPTEVfVVNFUiJdLCJpZCI6MSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNzQ1MTIxNjA3LCJleHAiOjE3NDUyMDgwMDd9.WbYHyawu0WwbS_huY64mNCYovqnnGaVn2r9PB3yeong",
  isLoggedIn: false,
  // isLoggedIn: true,
  loading: false,
  error: null,
  loadingInfoUser: false,
  userInfor: {
    userId: "0",
    firstName: "Lâm",
    lastName: "Tiến Dưỡng ",
    email: "lamtiendung11082002@gmail.com",
    phone: "0982474802",
    country: "+84",
  },
  infoUser: null,
  inforUserChange: null,

  registerLoading: false, // Thêm trạng thái loading cho đăng ký
  registerError: null, // Thêm trạng thái lỗi cho đăng ký
  registerSuccess: false, // Thêm trạng thái thành công cho đăng ký
};

export const fetchUserInfo = createAsyncThunk(
  "auth/fetchUserInfo",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const accessToken = state.auth.accessToken;

      const response = await fetch(`${API_BASE_URL}/api/user/info`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (userInfo, { getState, rejectWithValue }) => {
    try {
      const { accessToken } = getState().auth;
      if (!accessToken) {
        throw new Error("Không có token để gọi API");
      }

      const formData = new FormData();
      formData.append("firstName", userInfo.firstName);
      formData.append("lastName", userInfo.lastName);
      formData.append("email", userInfo.email);
      formData.append("phone", userInfo.phone);

      // Nếu bạn muốn upload hình ảnh từ bộ nhớ (image là URI hoặc file object)
      // if (userInfo.image) {
      //   formData.append("image", {
      //     uri: userInfo.image.uri,       // ví dụ: "file:///data/user/0/..."
      //     name: userInfo.image.name || "avatar.jpg",
      //     type: userInfo.image.type || "image/jpeg",
      //   });
      // }

      const response = await fetch(`${API_BASE_URL}/api/user/update`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // Không cần "Content-Type": multipart/form-data
          // Fetch sẽ tự thêm boundary khi dùng FormData
        },
        body: formData,
      });

      const data = await response.json();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.message || "Đăng ký thất bại");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Có lỗi xảy ra khi đăng ký");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initValue,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.accessToken = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
      AsyncStorage.setItem("accessToken", action.payload); // Lưu token
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
    updateInforUserChange(state, action) {
      state.inforUserChange = action.payload;
    },
    clearInforUserChange(state) {
      state.inforUserChange = null;
    },
    resetRegisterState(state) {
      state.registerLoading = false;
      state.registerError = null;
      state.registerSuccess = false;
    },
  },
  extraReducers: (builder) => {
    // Xử lý fetchUserInfo
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loadingInfoUser = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        console.log(">>> 78 AS >>>", action.payload);
        state.loadingInfoUser = false;
        state.infoUser = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loadingInfoUser = false;
        state.error = action.error.message;
      })
      // Xử lý registerUser
      .addCase(registerUser.pending, (state) => {
        state.registerLoading = true;
        state.registerError = null;
        state.registerSuccess = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.registerLoading = false;
        state.registerSuccess = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.infoUser = action.payload 
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.error = action.payload || "Cập nhật thông tin thất bại"})
      .addCase(registerUser.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerError = action.payload;
        state.registerSuccess = false;
      });
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateInforUserChange,
  clearInforUserChange,
  resetRegisterState,
} = authSlice.actions;
export default authSlice.reducer;
