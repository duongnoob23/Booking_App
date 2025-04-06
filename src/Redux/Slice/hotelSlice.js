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

export const fetchLocationList = createAsyncThunk(
  "hotel/fetchLocationList",
  async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/location/get_list`, {
        method: "GET",
        headers: { "content-Type": "application/json" },
      });
      const data = await response.json();
      // console.log(">>> 53 hotelSlice data", data.data);
      return data.data;
    } catch (error) {
      console.error("error in fetch location list:", error);
      throw error;
    }
  }
);

export const fetchHotelByLocation = createAsyncThunk(
  "hotel/fetchHotelByLocation",
  async (value) => {
    try {
      console.log(">>> 66 hotelSlice value", { value });
      const response = await fetch(`${API_BASE_URL}/api/hotel/filter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      // console.log(">>> 73 hotelSlice data", data?.data?.content);
      // console.log(">>> 73 hotelSlice data", data);
      return data?.data?.content;
    } catch (error) {
      console.log("error in fetch hotel location:", error);
      throw error;
    }
  }
);
// ?locationId=&checkin=2025-04-04&checkout=2025-04-04&adults=0&children=0&roomNumber=0&amenityIds=[]&serviceIds=[]

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    hotelList: [], // Danh sách khách sạn (Ưu đãi cuối tuần)
    locationList: [], // Danh sach Dia Diem
    hotelDetail: null, // Chi tiết khách
    hotelByLocation: [], // Danh sach Khach san theo dia diem
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
      })
      // Xử lý fetchLocationList
      .addCase(fetchLocationList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLocationList.fulfilled, (state, action) => {
        state.loading = false;
        state.locationList = action.payload;
      })
      .addCase(fetchLocationList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchHotelByLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelByLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.hotelByLocation = action.payload;
      })
      .addCase(fetchHotelByLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearHotelDetail } = hotelSlice.actions;
export default hotelSlice.reducer;
