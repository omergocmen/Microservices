import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import privateBaseAxios from "../helpers/privateBaseAxios";

export const getBasket = createAsyncThunk("basket/getbasket", async () => {
  return privateBaseAxios
    .get("basket/getbasket")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      toast.error(err.message);
    });
});

export const saveBasket = createAsyncThunk("basket/saveorupdatebasket", async (data,thunkAPI) => {
    return privateBaseAxios
      .post("basket/saveorupdatebasket",data)
      .then((response) => {
        toast.success("Sepet Başarıyla Güncellendi")
        thunkAPI.dispatch(getBasket())
        return response.data;
      })
      .catch((err) => {
        toast.error(err.message);
      });
  });

  export const deleteBasket = createAsyncThunk("basket/deletebasket", async (thunkAPI) => {
    return privateBaseAxios
      .get("basket/deletebasket")
      .then((response) => {
        toast.success("Sepet Başarıyla Temizlendi")
        thunkAPI.dispatch(getBasket())
        return response.data;
      })
      .catch((err) => {
        toast.error(err.message);
      });
  });
  
  


const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: {},
  },
  extraReducers: {
    [getBasket.fulfilled]: (state, action) => {
      if (action.payload) {
        state.basket = action.payload.data;
      }
    },
  },
});

export default basketSlice.reducer;
