import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from './authSlice'


const combinedReducers = combineReducers({
    auth
});

const store = configureStore({
    reducer: combinedReducers
});

export default store;
