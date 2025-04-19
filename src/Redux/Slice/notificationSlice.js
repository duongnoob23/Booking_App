// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchNotificationList = createAsyncThunk(
//   "notification/fetchNotificationList",
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const state = getState();
//       const accessToken = state?.auth?.accessToken;

//       // Log để debug
//       console.log("AccessToken:", accessToken);
//       if (!accessToken) {
//         throw new Error("Access token is missing");
//       }

//       const response = await fetch(
//         "http://192.168.50.61:9090/api/notifications/user",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       // Kiểm tra response
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.log("Error response:", errorData);
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("fetchNotificationList response:", data.data);

//       return data.data; // Trả về dữ liệu từ API
//     } catch (error) {
//       console.error("Error in fetchNotificationList:", error.message);
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const notificationSlice = createSlice({
//   name: "notification", // Sửa tên slice từ "promotion" thành "notification"
//   initialState: {
//     loadingNotification: false,
//     notificationList: [],
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchNotificationList.pending, (state) => {
//         state.loadingNotification = true;
//         state.error = null;
//       })
//       .addCase(fetchNotificationList.fulfilled, (state, action) => {
//         state.loadingNotification = false;
//         state.notificationList = action.payload;
//       })
//       .addCase(fetchNotificationList.rejected, (state, action) => {
//         state.loadingNotification = false;
//         state.error = action.payload; // Sử dụng action.payload để lấy lỗi
//       });
//   },
// });

// export default notificationSlice.reducer;
