import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from './authSlice'
import course from './courseSlice'
import category from './categorySlice'
import photo from './photoSlice'
import basket from './basketSlice'


const combinedReducers = combineReducers({
    auth,
    course,
    photo,
    category,
    basket
});

const store = configureStore({
    reducer: combinedReducers
});

export default store;
