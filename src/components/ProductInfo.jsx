import { Modal } from "antd";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductInfo = () => {
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

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="productInfo">
        <div className="item">
          <div className="item-inner">
            <div className="img-content">
              <img src="assets/img/pic-1.jpg" alt="" />

              <button type="button" onClick={showModal}>
                <FaMagnifyingGlass />
              </button>
              <Modal open={open} onCancel={hideModal}>
                <img src="assets/img/pic-1.jpg" alt="" />
              </Modal>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-inner">
            <h2>DJI Inspire 2</h2>
            <span className="price">£99.00</span>
            <div className="Availability">
              Availability: <span>In Stock</span>
            </div>
            <p>
              There are many variations of passages of lorem Ipsum available,
              but the majority have suffered alteration in some form, by mour,
              or randomised words which don’t look even slightly believable. If
              you are going to use a passage of lorem Ipsum, you need to be sure
              there isn’t anything embarrassing hidden in the middle of text.
              All the lorem
            </p>

            <form action="POST">
              <div className="input-group">
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
              <button type="button" className="button">
                Add To Cart
              </button>
            </form>
            <div className="category">
              <span>Category:</span>
              {/* <span className="shop"> Shop Tags: </span> */}
              <div className="tags">
                <Link to="">Drone</Link>,<Link to=""> Long Life</Link>,
                <Link to=""> Videography</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
