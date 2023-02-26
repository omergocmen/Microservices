import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import baseAxios from "../helpers/baseAxios";

export const getAllCourses = createAsyncThunk("courses/getall", async () => {
  return baseAxios
    .get("courses/getall")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      toast.error(err.message);
    });
});

export const addCourse = createAsyncThunk("courses/save", async (data) => {
  return baseAxios
    .post("courses/save",data)
    .then((response) => {
      toast.success("Başarıyla Eklendi");
      return response.data;
    })
    .catch((err) => {
      toast.error(err.message);
    });
});


const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
  },
  extraReducers: {
    [getAllCourses.fulfilled]: (state, action) => {
      if (action.payload) {
        state.courses = action.payload.data;
      }
    },
  },
});

export default courseSlice.reducer;
