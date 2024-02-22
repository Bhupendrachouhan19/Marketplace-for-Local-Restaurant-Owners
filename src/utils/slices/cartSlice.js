import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // giving name to the slice
  initialState: {
    // setting inital state for items going to be stored in the slice
    items: [],
  },
  reducers: {
    // adding the type of actions/functions we want in our cart, like: 'add an item', 'remove an item', 'clear cart', etc. Actions are kind of small API use to communicate with the redux store. So if we want to 'Add an item' we will dispatch the 'addItem'.
    addItem: (initialState, action) => {
      // Updating the state of store here.
      initialState.items.push(action.payload);
    },
    removeItem: (initialState) => {
      initialState.items.pop();
    },
    clearCart: (initialState) => {
      console.log(current(initialState)); // checking the Current State

      // In RTK we can either (MUTATE State):
      // initialState.items.length = 0; // (MUTATING)setting length to 0 of a javascript Array makes it Empty: []
      
      // OR (CREATE NEW State):
      return { items: [] }; // this new object will replace the previously declared 'items' state/property inside the initialState object.
      
      console.log(current(initialState)); // checking the Current State
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
// console.log(cartSlice.actions);
// console.log(cartSlice);

export default cartSlice.reducer;
