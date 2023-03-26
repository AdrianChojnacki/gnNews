import { createSlice } from "@reduxjs/toolkit";
import plFlag from "public/countries/pl.svg";
import usFlag from "public/countries/us.svg";
import gbFlag from "public/countries/gb.svg";

const initialState = [
  { name: "Poland", id: "pl", flag: plFlag },
  { name: "United States", id: "us", flag: usFlag },
  { name: "United Kingdom", id: "gb", flag: gbFlag },
];

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
});

export const selectAllCountries = (state: any) => state.countries;

export default countriesSlice.reducer;
