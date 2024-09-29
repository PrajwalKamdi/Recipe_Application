import { createSlice } from "@reduxjs/toolkit";

 const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: {
      fetchStatus: false,
      currentlyFetching: false,
    },
    reducers: {
      fetchStatus:(state) =>{
        return state.fetchDone=true;
      },
      currentlyFetching:(state)=>{
          return state.currentlyFetching=true;
      },
      fetchDone : (state)=>{
          return state.currentlyFetching=false;
      }
    },
  });
export const fetchAction = fetchStatusSlice.actions
export default fetchStatusSlice;