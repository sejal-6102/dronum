import React from "react";
import { Link } from "react-router-dom";

const CartTotal = () =>{
    return(
        <div className="cart-total">
              <div className="total">
                <h2>Cart Totals</h2>
                <table cellspacing="0">
                  <tr>
                    <th>Subtotal</th>
                    <td>
                      <span>£99.00</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>
                      <span>£99.00</span>
                    </td>
                  </tr>
                </table>

                <Link to="/checkout" className="button">
                  Proceed to checkout
                </Link>
              </div>
            </div>
    )
}

export default CartTotal