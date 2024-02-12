import { COMPANY_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

import { createDispatchHook, useSelector } from "react-redux";

const Header = () => {
  const [logIn, setlogIn] = useState(false);

  console.log("Header Rendered");

  // Subscribing to the store:
  const cartItems = useSelector((store1) => store1.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <div>
        <img className="logo" src={COMPANY_LOGO} alt="company logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li key={0}>
            <Link to="/">Home</Link>
          </li>
          <li key={1}>
            <Link to="/about">About Us</Link>
          </li>
          <li key={2}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li key={3}>
            <Link to="/my-cart">Cart ({cartItems.length})</Link>
          </li>
          <li key={4}>
            <button
              className="log-button"
              onClick={() => {
                setlogIn(!logIn);
              }}
            >
              {logIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
