import { createSlice } from "@reduxjs/toolkit";

const init = [
  {
    count: 0,
  },
];

const countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    increase(state) {
      state.count = state.count + 1;
    },
    decrease(state) {
      state.count = state.count - 1;
    },
  },
});

export const { increase, decrease } = countSlice.actions;
export default countSlice.reducer;
