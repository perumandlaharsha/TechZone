import { createSlice } from "@reduxjs/toolkit";

let cartData;

try {
  cartData = JSON.parse(localStorage.getItem("userData"));
  if (!Array.isArray(cartData)) {
    cartData = [];
  }
} catch (error) {
  cartData = [];
}

const CartSlice = createSlice({
  name: "cart",
  initialState: cartData,

  reducers: {
    ADDTOCART: (state, action) => {
      const product = action.payload;
      const existing = state.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("userData", JSON.stringify(state));
    },

    REMOVE: (state, action) => {
      const updated = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("userData", JSON.stringify(updated));
      return updated;
    },

    INC: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product) product.quantity += 1;
      localStorage.setItem("userData", JSON.stringify(state));
    },

    DEC: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          state.splice(index, 1);
        }
      }

      localStorage.setItem("userData", JSON.stringify(state));
    },
  },
});

export const { ADDTOCART, REMOVE, INC, DEC } = CartSlice.actions;
export default CartSlice.reducer;