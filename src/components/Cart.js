import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Comming from Cart Component", cartItems[0]?.card?.info?.name);

  return (
    <div>
      <h1>Products in your cart</h1>
      <div className="cart-container">
        {cartItems?.map((item) => (
          <div>
            {/* {console.log(cartItems)} */}
            <div className="cart-item-image">
              Title: {cartItems?.card?.info?.name}
            </div>
            <div className="cart-item-text">
              <h3 className="cart-item-title">Food Name</h3>
              <div className="cart-item-detail">
                <h5>Description</h5>
                <h5></h5>
                <h5></h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
