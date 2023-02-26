import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from './authSlice'
import course from './courseSlice'


const combinedReducers = combineReducers({
    auth,
    course
});

const store = configureStore({
    reducer: combinedReducers
});

export default store;
