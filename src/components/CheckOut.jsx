import React from "react";
import CheckoutForm from "./CheckoutForm";
import AddCoupon from "./AddCoupon";
import ProductDetails from "./ProductDetails";

const CheckOut = () => {
  return (
    <>
      <div className="check-outer animate__animated animate__zoomIn">
        <div className="container">
          <div className="check-inner">
            <AddCoupon />
            <CheckoutForm/>
            <ProductDetails/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
