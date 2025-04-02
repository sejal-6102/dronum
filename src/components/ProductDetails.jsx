import React from "react";

const ProductDetails = () => {
  return (
    <>
      <div className="product-outer">
        <h3>Your order</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                DJI Inspire 2<strong>× 1</strong>
              </td>
              <td> £99.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Subtotal</th>
              <td>£99.00</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>£99.00</td>
            </tr>
          </tfoot>
        </table>
        <ul className="checkout-payment">
          <li>
            <div className="cart-msg">
              <span>
                Sorry, it seems that there are no available payment methods.
                Please contact us if you require assistance or wish to make
                alternate arrangements.
              </span>
            </div>
          </li>
          <li>
            <p>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            <button type="button" className="button">Place order</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductDetails;
