import { configureStore, createSlice } from "@reduxjs/toolkit";
import { itemsSlice } from "./ItemsSlice";
import { SearchSlice } from "./SearchSlice";
import SingleItemSlice from "./SingleItem";
import fetchStatusSlice from "./fetchStatusSlice";



const recipeStore = configureStore({ reducer: {
   fetchStatus : fetchStatusSlice.reducer,
   items : itemsSlice.reducer,
   search: SearchSlice.reducer,
   SingleItemSlice:SingleItemSlice.reducer
} });



export default recipeStore
