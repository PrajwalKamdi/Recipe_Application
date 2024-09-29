import { createSlice } from "@reduxjs/toolkit";

 const SingleItemSlice = createSlice({
    name:"SingleItemSlice",
    initialState:"",
    reducers:{
        setSingleItem:(state, action)=>{
            console.log(action.payload)
            return action.payload;
        }
    }
})
export const singleItemAction = SingleItemSlice.actions
export default SingleItemSlice
