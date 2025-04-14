// src/Slice/hotelSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../Constant/Constant";
import { useAppSelector } from "../hook";

const formatToYYYYMMDD = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const checkinDate = formatToYYYYMMDD(today);
const checkoutDate = formatToYYYYMMDD(tomorrow);

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
      // console.log(data.data);
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

export const fetchAmenityList = createAsyncThunk(
  "hotel/fetchAmenityList",
  async () => {
    const response = await fetch(`${API_BASE_URL}/api/amenity/get_list`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    return data?.data;
  }
);
// ?locationId=&checkin=2025-04-04&checkout=2025-04-04&adults=0&children=0&roomNumber=0&amenityIds=[]&serviceIds=[]

export const fetchHotelByLocation = createAsyncThunk(
  "hotel/fetchHotelByLocation",
  async (value) => {
    try {
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

export const fetchHotelRoomList = createAsyncThunk(
  "hotel/fetchHotelRoomList",
  async (value) => {
    try {
      // console.log("---------------", value);
      const response = await fetch(`${API_BASE_URL}/api/room/select_room`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      // console.log("-------------- 125 hotelSlice data:", data.data);
      return data.data;
    } catch (error) {
      console.log("error in fetchHotelRoomList:", error);
      throw error;
    }
  }
);

export const fetchBookingRoom = createAsyncThunk(
  "hotel/fetchBookingRoom",
  async ({ bookingPayload }, { getState, rejectWithValue }) => {
    try {
      const roomRequestListForApi = bookingPayload.roomRequestList.map(
        ({ uniqueId, ...rest }) => rest
      );
      console.log(">>> 142 >>> ", bookingPayload);
      bookingPayload = {
        ...bookingPayload,
        roomRequestList: roomRequestListForApi,
      };
      console.log(">>> 147 >>> ", bookingPayload);

      const { accessToken } = getState().auth;
      console.log(accessToken);
      const response = await fetch(`${API_BASE_URL}/api/booking/get_booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(bookingPayload),
      });

      const data = await response.json();
      // console.log("-------- 144 hotelSL", data?.data);

      const { listUniqueIdBookingRoom } = getState().hotel;
      console.log(listUniqueIdBookingRoom);
      const updatedRoomBookedList = data?.data?.roomBookedList?.map(
        (room, index) => {
          const originalRoom = listUniqueIdBookingRoom[index];
          return {
            ...room,
            uniqueId: originalRoom?.uniqueId,
          };
        }
      );

      // console.log(">>> 163 HS", updatedRoomBookedList);
      // console.log(">>> 164 HS", data.data);

      // data?.data?.roomBookedList = updatedRoomBookedList;
      return {
        ...data.data,
        roomBookedList: updatedRoomBookedList,
      };
    } catch (error) {
      console.log("error in fetchBookingRoom:", error);
      throw error;
    }
  }
);

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    sortList: [
      { id: 1, name: "Giá tăng dần" },
      { id: 2, name: "Giá giảm dần" },
      { id: 3, name: "Đánh giá tăng dần" },
      { id: 4, name: "Đánh giá giảm dần" },
    ],
    amenityList: [],
    filterList: [],
    hotelList: [], // Danh sách khách sạn (Ưu đãi cuối tuần)
    locationList: [], // Danh sach Dia Diem
    hotelDetail: null, // Chi tiết khách
    hotelDetailId: "",
    hotelByLocation: [], // Danh sach Khach san theo dia diem
    hotelRoomList: [],

    bookingData: [], // lưu data danh sách các phòng trả về sau khi gọi api booking/get_booking
    bookingPayload: null, // lưu data ngày sau khi ấn đặt ngay ở hotelRoomList, đợi xác nhận thông tin, có accessToken sẽ gửi lênlên
    listUniqueIdBookingRoom: [], // lưu uniqueId key

    listBookingRoom: [],
    loading: false, // Đang tải hay không
    loadingListHotel: false,
    loadingHotelRoomList: false,
    loadingBookingRoom: false,
    map: false,

    error: null, // Lỗi nếu có
    inforFilter: {
      locationId: "0",
      checkin: checkinDate,
      checkout: checkoutDate,
      adults: 0,
      children: 0,
      roomNumber: 1,
      amenityIds: [],
      serviceIds: [],
      sortById: 1,
    },
  },
  reducers: {
    clearHotelDetail(state) {
      state.hotelDetail = null; // Xóa chi tiết khi cần
    },
    skeletonLoading(state) {
      state.loading = true;
    },
    updateFilter(state, action) {
      // console.log(">>> 224 HS run");
      state.inforFilter = { ...state.inforFilter, ...action.payload };
    },
    mapOpenClose(state, action) {
      state.map = action.payload;
    },
    updateHotelDetailId(state, action) {
      state.hotelDetailId = action.payload;
    },
    uppdateListUniqueIdBookingRoom(state, action) {
      // console.log("233 HS check", action.payload);
      state.listUniqueIdBookingRoom = [...action.payload];
    },
    updateBookingPayload(state, action) {
      console.log(action.payload);
      state.bookingPayload = action.payload;
    },
    // phải add service vào trong bookingPayload vì đây là dữ liệu gửi lên service
    // Cập nhật listUniqueIdBookingRoom
    // console.log(serviceData);

    // Cập nhật bookingData.roomBookedList
    // roomBoookedList, serviceSelect => boookingData
    // rooomRequestList,serviceList => bookingPayload
    addServiceToRoom(state, action) {
      try {
        const serviceData = action.payload; // Mảng [ { uniqueId, serviceIds }, ... ]
        console.log(">>> 267 SR >>>", serviceData);
        console.log(
          ">>> 268 HS>>> bookingPayload",
          state.bookingPayload.roomRequestList[0].serviceIdList
        );
        if (state.bookingPayload && state.bookingPayload.roomRequestList) {
          state.bookingPayload.roomRequestList =
            state.bookingPayload.roomRequestList.map((item) => {
              const matchingRoom = serviceData.find(
                (data) => data.uniqueId === item.uniqueId
              );
              if (matchingRoom) {
                return {
                  ...item,
                  serviceIdList: [
                    ...new Set([
                      ...item.serviceIdList,
                      ...matchingRoom.serviceIds,
                    ]), // Loại bỏ trùng lặp
                  ],
                };
              }
              return item;
            });
        }
      } catch (error) {
        console.log("error in addServiceToRoom", error);
      }
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
      // Xử lý fetchHotelByLocation
      .addCase(fetchHotelByLocation.pending, (state) => {
        state.loadingListHotel = true;
        state.error = null;
      })
      .addCase(fetchHotelByLocation.fulfilled, (state, action) => {
        state.loadingListHotel = false;
        state.hotelByLocation = action.payload;
      })
      .addCase(fetchHotelByLocation.rejected, (state, action) => {
        state.loadingListHotel = false;
        state.error = action.error.message;
      })
      // Xử lý fetchAmenityList
      .addCase(fetchAmenityList.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchAmenityList.fulfilled, (state, action) => {
        state.amenityList = action.payload;
      })
      .addCase(fetchAmenityList.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // Xử lý fetchHotelRoomList
      .addCase(fetchHotelRoomList.pending, (state) => {
        state.loadingHotelRoomList = true;
        state.error = null;
      })
      .addCase(fetchHotelRoomList.fulfilled, (state, action) => {
        state.loadingHotelRoomList = false;
        state.hotelRoomList = action.payload;
      })
      .addCase(fetchHotelRoomList.rejected, (state, action) => {
        state.loadingHotelRoomList = false;
        state.error = action.error.message;
      })
      // Xu ly fetchBookingRoom
      .addCase(fetchBookingRoom.pending, (state) => {
        state.loadingBookingRoom = true;
        state.error = null;
      })
      .addCase(fetchBookingRoom.fulfilled, (state, action) => {
        console.log(" >>> 326 HS", action.payload);
        state.loadingBookingRoom = false;
        state.bookingData = action.payload;
      })
      .addCase(fetchBookingRoom.rejected, (state, action) => {
        state.loadingBookingRoom = false;
        state.error = action.error.message;
      });
  },
});

export const {
  clearHotelDetail,
  skeletonLoading,
  updateFilter,
  mapOpenClose,
  updateHotelDetailId,
  uppdateListUniqueIdBookingRoom,
  addServiceToRoom,
  updateBookingPayload,
} = hotelSlice.actions;
export default hotelSlice.reducer;

// state.listUniqueIdBookingRoom = state.listUniqueIdBookingRoom.map(
//   (item) => {
//     const matchingRoom = serviceData.find(
//       (data) => data.uniqueId === item.uniqueId
//     );
//     if (matchingRoom) {
//       return {
//         ...item,
//         serviceIdList: [
//           ...new Set([...item.serviceIdList, ...matchingRoom.serviceIds]), // Loại bỏ trùng lặp
//         ],
//       };
//     }
//     return item;
//   }
// );
