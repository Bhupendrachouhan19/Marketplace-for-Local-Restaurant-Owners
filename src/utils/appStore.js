import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

// Initialising a Redux Store:
const appStore = configureStore({
  // Below adding 'Different Reducers of Slices' to 'Reducer of the Store'
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
