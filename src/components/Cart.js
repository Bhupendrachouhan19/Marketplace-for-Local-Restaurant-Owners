import React from "react";
import { useDispatch, useSelector } from "react-redux";

import MenuItemList from "./MenuItemList";
import {clearCart} from "../utils/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("Comming from Cart Component", cartItems);


  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? <div className="empty-cart-text">Your Cart is as Empty as your Stomach : (</div>
      : 
      <div>
      <button onClick={()=>handleClearCart()} className="cart-clear-btn">Clear Cart</button>
        <MenuItemList items={cartItems} />
      <button onClick={handleClearCart} className="cart-clear-btn">Clear Cart</button>
      </div>
      }
    </div>
  );
};
export default Cart;