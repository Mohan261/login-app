import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slicer/AppSlicer";
const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
