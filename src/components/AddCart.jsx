import React from "react";
import { Link } from "react-router-dom";
import CartItems from "./Items/CartItems";
import CartTotal from "./CartTotal";

const AddCart = () => {
  return (
    <>
      <div className="cart-outer">
        <div className="container">
          <div className="cart-inner animate__animated animate__zoomIn">
            <div className="cart-msg ">
              <span>Your cart is currently empty.</span>
              <Link to="" className="button">
                Return to shop
              </Link>
            </div>
            <CartItems />
            <CartTotal/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCart;
