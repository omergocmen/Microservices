import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import baseAxios from "../helpers/baseAxios";


export const login = (data) => {
    return axios.post("http://localhost:5001/connect/token",data)
};


export const registerUser = createAsyncThunk("account/register", async (data) => {
    return baseAxios.post("account/register", data).then((response) => {
        toast.success("Kayıt Başarılı")
        return response.data.data;
    }).catch(err=>{
        toast.error(err.message)
    });
});



const authSlice = createSlice({
    name: "auth",
    initialState: {
    },
    extraReducers: {
        // [login.fulfilled]: (state, action) => {
        //     if(action.payload){state.userIn = action.payload.tokenUser;}
        // }
    },
});

export default authSlice.reducer;
