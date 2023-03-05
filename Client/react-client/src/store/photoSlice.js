import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import baseAxios from "../helpers/baseAxios";

export const savePhoto = createAsyncThunk("photos/photosave", async (data) => {

  let formData = new FormData();
  formData.append("photo", data);

  return baseAxios
    .post("photos/photosave",formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      }})
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      toast.error(err.message);
    });
});

const photoSlice = createSlice({
  name: "photo",
  initialState: {
   
  },
  extraReducers: {
  },
});

export default photoSlice.reducer;
