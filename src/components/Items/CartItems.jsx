import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartItems = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <form method="POST">
        <table className="shop-table" cellSpacing={0}>
          <thead>
            <tr>
              <th className="product-remove">
                <span className="screen-reader-text">Remove item</span>
              </th>
              <th className="product-thumbnail">
                <span className="screen-reader-text">Thumbnail image</span>
              </th>
              <th className="product-name">Product</th>
              <th className="product-price">Price</th>
              <th className="product-quantity">Quantity</th>
              <th className="product-subtotal">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-remove">
                <Link to="" className="remove">
                  ×
                </Link>
              </td>
              <td className="product-thumbnail">
                <img src="assets/img/pic-1-300x300.jpg" alt="" />
              </td>
              <td className="product-name" data-title="Product :">DJI Inspire 2</td>
              <td className="product-price" data-title="Price :"> £99.00 </td>
              <td className="product-quantity" data-title="Quantity :">
                <div className="input-group" >
                  <input type="number" value={count} />
                  <span>
                    <button type="button" onClick={increment}>
                      <FaPlus />
                    </button>
                    <button type="button" onClick={decrement}>
                      <FaMinus />
                    </button>
                  </span>
                </div>
              </td>
              <td className="product-subtotal" data-title="Subtotal :"> £99.00 </td>
            </tr>
            <tr>
              <td className="action" colSpan={6}>
                <div className="coupon">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value=""
                    name="coupon"
                  />
                  <button
                    type="button"
                    className="button"
                    value={"Apply coupon"}
                  >
                    Apply coupon
                  </button>
                </div>
                <button
                  type="button"
                  className="button"
                  value="Update cart"
                  disabled
                >
                  Update cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default CartItems;
