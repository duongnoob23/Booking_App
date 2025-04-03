// src/Slice/hotelSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../Constant/Constant";
export const fetchHotelList = createAsyncThunk(
  "hotel/fetchHotelList",
  async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/hotel/home`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      // console.log("Data:", data);
      // console.log("Data[0]:", data.data[0]);
      // console.log("HotelRequestList:", data.data[0].hotelRequestList);
      return data.data[0].hotelRequestList;
    } catch (error) {
      console.error("Error in fetchHotelList:", error);
      throw error; // Thông báo lỗi cho Redux
    }
  }
);

export const fetchHotelById = createAsyncThunk(
  "hotel/fetchHotelById",
  async (hotelId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/hotel/hotel_detail/${hotelId}?checkInDate=2025-04-02&checkOutDate=2025-04-05`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error in fetchHoteById:", error);
      throw error;
    }
  }
);

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    hotelList: [], // Danh sách khách sạn (Ưu đãi cuối tuần)
    hotelDetail: null, // Chi tiết khách sạn
    loading: false, // Đang tải hay không
    error: null, // Lỗi nếu có
  },
  reducers: {
    clearHotelDetail(state) {
      state.hotelDetail = null; // Xóa chi tiết khi cần
    },
  },
  extraReducers: (builder) => {
    // Xử lý fetchHotelList
    builder
      .addCase(fetchHotelList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelList.fulfilled, (state, action) => {
        state.loading = false;
        state.hotelList = action.payload;
      })
      .addCase(fetchHotelList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Xử lý fetchHotelById
      .addCase(fetchHotelById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelById.fulfilled, (state, action) => {
        state.loading = false;
        state.hotelDetail = action.payload;
      })
      .addCase(fetchHotelById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearHotelDetail } = hotelSlice.actions;
export default hotelSlice.reducer;
