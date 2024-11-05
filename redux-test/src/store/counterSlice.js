import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counterValue",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    multiplier: (state) => {
      state.count *= 2;
    },
    division: (state) => {
      if (state.count !== 0) {
        state.count /= 2;
      }
    },
    plusHundred: (state) => {
      state.count += 100;
    },
  },
});

export const { increment, decrement, multiplier, division, plusHundred } =
  counterSlice.actions;

export const selectCount = (state) => state.counterValue.count;

export default counterSlice.reducer;
