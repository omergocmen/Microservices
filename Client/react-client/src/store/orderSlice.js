import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import privateBaseAxios from "../helpers/privateBaseAxios";
import { paymentBasket } from "./basketSlice";

export const getOrders = createAsyncThunk("orders/getorders", async () => {
  return privateBaseAxios
    .get("orders/getorders")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      toast.error(err.message);
    });
});


export const createOrder = createAsyncThunk("fakepayments/receivepayment", async (data,thunkAPI) => {
  return privateBaseAxios
    .post("fakepayments/receivepayment",data)
    .then((response) => {
      thunkAPI.dispatch(getOrders())
      return response.data;
    })
    .catch((err) => {
      toast.error(err.message);
    });
});
  


const orderSlice = createSlice({
  name: "basket",
  initialState: {
    orders: [],
  },
  extraReducers: {
    [getOrders.fulfilled]: (state, action) => {
      if (action.payload) {
        state.orders = action.payload.data;
      }
    },
  },
});

export default orderSlice.reducer;
