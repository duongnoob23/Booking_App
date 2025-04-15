import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../Constant/Constant";

export const fetchListService = createAsyncThunk(
  "service/fetchListService",
  async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/service/get_list`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (data.statusCode !== 200) {
        throw new Error(data.message || "Failed to fetch service list");
      }
      return data.data;
    } catch (error) {
      console.log("error in fetchListService:", error);
      throw error;
    }
  }
);

export const fetchServicesByCategory = createAsyncThunk(
  "service/fetchServicesByCategory",
  async (roomQuantities, { getState }) => {
    try {
      // Lấy access token từ authSlice
      const response = await fetch(
        `${API_BASE_URL}/api/service/get_by_category`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(roomQuantities),
        }
      );

      const data = await response.json();
      if (data.statusCode !== 200) {
        throw new Error(data.message || "Failed to fetch services by category");
      }
      return data.data;
    } catch (error) {
      console.log("error in fetchServicesByCategory:", error);
      throw error;
    }
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    loadingService: false,
    error: null,
    serviceList: {},
    categories: [], // Thêm trường categories để lưu danh sách serviceType
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Xử lý fetchListService
      .addCase(fetchListService.pending, (state) => {
        state.loadingService = true;
        state.error = null;
      })
      .addCase(fetchListService.fulfilled, (state, action) => {
        state.loadingService = false;

        const groupedServices = action.payload.reduce((acc, service) => {
          const { serviceType } = service;
          if (!acc[serviceType]) {
            acc[serviceType] = [];
          }
          acc[serviceType].push(service);
          return acc;
        }, {});
        state.serviceList = groupedServices;

        // Cập nhật categories từ serviceList
        state.categories = Object.keys(groupedServices).map((key, index) => ({
          id: index + 1,
          name: key,
        }));
      })
      .addCase(fetchListService.rejected, (state, action) => {
        state.loadingService = false;
        state.error = action.error.message;
      })
      // Xử lý fetchServicesByCategory
      .addCase(fetchServicesByCategory.pending, (state) => {
        state.loadingService = true;
        state.error = null;
      })
      .addCase(fetchServicesByCategory.fulfilled, (state, action) => {
        state.loadingService = false;

        // Cập nhật serviceList từ serviceRoomList
        const groupedServices = action.payload.reduce((acc, item) => {
          acc[item.serviceType] = item.serviceRoomList.map((service) => ({
            id: service.id,
            name: service.name,
            description: service.description,
            image: service.image,
            price: parseFloat(service.price.replace(/,/g, "")), // Chuyển price sang số
            serviceType: item.serviceType,
            roomChoseServiceList: service.roomChoseServiceList,
          }));
          return acc;
        }, {});
        state.serviceList = groupedServices;

        // Cập nhật categories từ serviceType
        state.categories = action.payload
          .filter((item) => item.serviceRoomList.length > 0) // Chỉ lấy serviceType có dịch vụ
          .map((item, index) => ({
            id: index + 1,
            name: item.serviceType,
          }));
      })
      .addCase(fetchServicesByCategory.rejected, (state, action) => {
        state.loadingService = false;
        state.error = action.error.message;
      });
  },
});

export default serviceSlice.reducer;
