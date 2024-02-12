import React from "react";
import { useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Comming from Cart Component", cartItems);

  return (
    <div>
      <h1>Products in your cart</h1>
      <div className="cart-container">
        <MenuItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
