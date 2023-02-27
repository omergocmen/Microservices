import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import baseAxios from "../helpers/baseAxios";

export const getAllCategories = createAsyncThunk("catalog/categories/getall", async () => {
  return baseAxios
    .get("catalog/categories/getall")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      toast.error(err.message);
    });
});

export const addCategory = createAsyncThunk("catalog/categories/save", async (data) => {
  return baseAxios
    .post("catalog/categories/save",data)
    .then((response) => {
      toast.success("Başarıyla Eklendi");
      return response.data;
    })
    .catch((err) => {
      toast.error(err.message);
    });
});


const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  extraReducers: {
    [getAllCategories.fulfilled]: (state, action) => {
      if (action.payload) {
        state.categories = action.payload.data;
      }
    },
  },
});

export default categorySlice.reducer;
