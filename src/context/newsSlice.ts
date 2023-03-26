import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
const API_KEY: any = process.env.NEXT_PUBLIC_API_KEY;

export interface NewsState {
  news: any;
  status: string;
  error: any;
}

const initialState: NewsState = {
  news: [],
  status: "idle",
  error: null,
};

export const fetchNews: any = createAsyncThunk(
  "news/fetchNews",
  async (country) => {
    try {
      const response = await fetch(`${API_URL}?country=${country}&${API_KEY}`);
      const data = await response.json();
      const news = data.articles;
      return news;
    } catch (err: any) {
      return err.message;
    }
  }
);

const newsSLice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllNews = (state: any) => state.news.news;
export const getNewsStatus = (state: any) => state.news.status;
export const getNewsError = (state: any) => state.news.error;

export default newsSLice.reducer;
