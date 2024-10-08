import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice=createSlice({
    name:"items",
    initialState:[],
    reducers:{
        addInitialItems : (state, action)=>{
            return action.payload;
        }
    }
})
export const itemsAction = itemsSlice.actions