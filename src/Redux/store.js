import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice";
import countReducer from "./Slice/countSlice";
import textReducer from "./Slice/text";
export const store = configureStore({
  reducer: {
    count: countReducer,
    auth: authReducer,
    text: textReducer,
  },
});
