import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice =createSlice({
    name:"search",
    initialState:{
        query:""
    },
    reducers:{
        setSearch : (state, action)=>{
            return action.payload
        }
    }
})
export const searchAction = SearchSlice.actions