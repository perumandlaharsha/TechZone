import { configureStore } from "@reduxjs/toolkit";
import cartData from "../cart/CartSlice";

export default configureStore({
  reducer: {
    cart: cartData,
  },
});