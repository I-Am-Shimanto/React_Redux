import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      if (state.value > 1) state.value -= 1;
    },
  },
});

export const { increment, decreament } = counterSlice.actions;

export default counterSlice.reducer;
