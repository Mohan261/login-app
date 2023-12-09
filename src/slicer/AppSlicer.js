import { createSlice } from "@reduxjs/toolkit";
import Data from "../data.json";
const initialState = {
  home: true,
  searchData: {},
};
const appSlicer = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeHome(state, action) {
      state.home = !state.home;
    },
    searchUser(state, action) {
      state.searchData = [];
      const { data } = Data;
      state.searchData = data.find((list) => list.name === action.payload);
    },
  },
});

export const { changeHome, searchUser } = appSlicer.actions;
export default appSlicer.reducer;
