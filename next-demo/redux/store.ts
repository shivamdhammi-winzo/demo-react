import { createStore } from "redux";
import {  configureStore } from "@reduxjs/toolkit"
import Data from "../network/models/dataModels"
import dataSlice from "./slices/dataSlice";

export const store = configureStore({
    reducer: {
        dataReducer: dataSlice.reducer  
    }
})