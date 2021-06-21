import { createSlice, configureStore } from "@reduxjs/toolkit"
import Data from "../../network/models/dataModels";


const initialState = {
    data: {}
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addData(state, action) {
            // console.log("store me data aa gya, yayyyy!!!")
            // console.log(action.payload)
            const stateData = action.payload

            let AllData: { [key: string]: Data } = {};
            for (let key in stateData) { 
                let value = stateData[key];
                AllData[key] = value;
            }
            state.data = AllData;
            // console.log(state.data)
        }
    }
})

export default dataSlice

