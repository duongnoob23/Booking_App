import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../Constant/Constant";

export const fetchListNotification = createAsyncThunk(
  "notification/fetchListNotification",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const accessToken = state.auth.accessToken;
      console.log("accessToken in notification", accessToken);
      // Kiểm tra accessToken

      const response = await fetch(`${API_BASE_URL}/api/notifications/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      console.log("fetchListNotification response:", data);

      return data;
    } catch (error) {
      console.error("error in fetchListNotification:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const notificationSlice = createSlice({
  name: "promotion",
  initialState: {
    loadingNotification: false,
    error: null,
    listNotification: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListNotification.pending, (state) => {
        state.loadingNotification = true;
        state.error = null;
      })
      .addCase(fetchListNotification.fulfilled, (state, action) => {
        state.loadingNotification = false;
        state.listNotification = action.payload;
      })
      .addCase(fetchListNotification.rejected, (state, action) => {
        state.loadingNotification = false;
        state.error = action.error.message;
      });
  },
});

export default notificationSlice.reducer;
