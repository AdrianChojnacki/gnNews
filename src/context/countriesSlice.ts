import { createSlice } from "@reduxjs/toolkit";
import arFlag from "public/countries/ar.svg";
import cnFlag from "public/countries/cn.svg";
import deFlag from "public/countries/de.svg";
import frFlag from "public/countries/fr.svg";
import gbFlag from "public/countries/gb.svg";
import ilFlag from "public/countries/il.svg";
import inFlag from "public/countries/in.svg";
import plFlag from "public/countries/pl.svg";
import saFlag from "public/countries/sa.svg";
import usFlag from "public/countries/us.svg";

const initialState = [
  { name: "Argentina", id: "ar", flag: arFlag },
  { name: "China", id: "cn", flag: cnFlag },
  { name: "Germany", id: "de", flag: deFlag },
  { name: "France", id: "fr", flag: frFlag },
  { name: "United Kingdom", id: "gb", flag: gbFlag },
  { name: "Israel", id: "il", flag: ilFlag },
  { name: "India", id: "in", flag: inFlag },
  { name: "Poland", id: "pl", flag: plFlag },
  { name: "Saudi Arabia", id: "sa", flag: saFlag },
  { name: "United States", id: "us", flag: usFlag },
];

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
});

export const selectAllCountries = (state: any) => state.countries;

export default countriesSlice.reducer;
