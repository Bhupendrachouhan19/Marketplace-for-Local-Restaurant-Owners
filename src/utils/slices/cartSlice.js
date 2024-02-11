import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // giving name to the slice
  initialState: {
    // setting inital state for items going to be stored in the slice
    items: [],
  },
  reducers: {
    // adding the type of actions/functions we want in our cart, like: 'add an item', 'remove an item', 'clear cart', etc. Actions are kind of small API use to communicate with the redux store. So if we want to 'Add an item' we will dispatch the 'addItem'.
    addItem: (initialState, action) => {
      initialState.items.push(action.payload);
    },
    removeItem: (initialState) => {
      initialState.items.pop();
    },
    clearCart: (initialState) => {
      initialState.items.length = 0; // setting length to 0 of a javascript Array makes it Empty: []
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
