import { createSlice } from "@reduxjs/toolkit";

const initialState = { layout: "tiles" };

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleLayout: (state) => {
      if (state.layout === "tiles") {
        state.layout = "list";
      } else {
        state.layout = "tiles";
      }
    },
  },
});

export const getLayoutState = (state: any) => state.layout.layout;
export const { toggleLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
