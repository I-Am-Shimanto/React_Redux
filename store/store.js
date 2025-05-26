import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/CounterSlices";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
