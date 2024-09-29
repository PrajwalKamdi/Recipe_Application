import { createSlice } from "@reduxjs/toolkit";

 const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: {
      fetchStatus: false,
      currentlyFetching: false,
    },
    reducers: {
      fetchStatus:(state) =>{
        console.log("fiest")
        return state.fetchDone=true;
      },
      currentlyFetching:(state)=>{
        console.log("fiest1")
          return state.currentlyFetching=true;
      },
      fetchDone : (state)=>{
        console.log("fiest2")
          return state.currentlyFetching=false;
      }
    },
  });
export const fetchAction = fetchStatusSlice.actions
export default fetchStatusSlice;