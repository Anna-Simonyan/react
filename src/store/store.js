
import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "./Slices.js/themeSlice";
import cartReducer from "./Slices.js/productsSlice"


 const store = configureStore({
  reducer: {
    theme: themeSlice,
    cart: cartReducer,
   
  },
});
export default store;