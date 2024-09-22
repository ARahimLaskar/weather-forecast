import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: localStorage.getItem("themeMode") || "light",
  tempUnit: localStorage.getItem("tempUnit") || "C",
};

const reduxSlice = createSlice({
  name: "reduxSlice",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", state.themeMode);
    },
    toggleTempUnit: (state) => {
      state.tempUnit = state.tempUnit === "C" ? "F" : "C";
      localStorage.setItem("tempUnit", state.tempUnit);
    },
  },
});

export const { toggleMode, toggleTempUnit } = reduxSlice.actions;
export default reduxSlice.reducer;
