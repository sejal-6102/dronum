import React from "react";
import { Link } from "react-router-dom";

const AddCoupon = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div className="cart-msg">
        <span>
          Have a coupon?{" "}
          <Link to="" onClick={() => setShow(!show)}>
            Click here to enter your code
          </Link>
        </span>
        {show && (
          <div>
            <form class="coupon" method="POST">
              <p>If you have a coupon code, please apply it below.</p>

              <div class="input-group">
                
                <input
                  type="text"
                  name="coupon_code"
                  class="input-text"
                  placeholder="Coupon code"
                  id="coupon_code"
                  
                />
              </div>

              <button
                type="submit"
                class="button"
                name="apply_coupon"
                value="Apply coupon"
              >
                Apply coupon
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default AddCoupon;
