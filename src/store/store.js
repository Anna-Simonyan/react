
import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "./Slices/themeSlice";
import cartReducer from "./Slices/productsSlice"


 const store = configureStore({
  reducer: {
    theme: themeSlice,
    cart: cartReducer,
   
  },
});
export default store;