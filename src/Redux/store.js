import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice";
import countReducer from "./Slice/countSlice";
import textReducer from "./Slice/text";
import hotelReducer from "./Slice/hotelSlice";
import serviceReducer from "./Slice/serviceSlice";
export const store = configureStore({
  reducer: {
    count: countReducer,
    auth: authReducer,
    text: textReducer,
    hotel: hotelReducer,
    service: serviceReducer,
  },
});
