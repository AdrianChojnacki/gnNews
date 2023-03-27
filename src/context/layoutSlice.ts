import { createSlice } from "@reduxjs/toolkit";

const initialState = { layout: "list" };

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleLayout: (state) => {
      if (state.layout === "list") {
        state.layout = "tiles";
      } else {
        state.layout = "list";
      }
    },
  },
});

export const getLayoutState = (state: any) => state.layout.layout;
export const { toggleLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
