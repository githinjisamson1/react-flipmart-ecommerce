import React from "react";

const CartItem = ({ cartItem }) => {
  // destructuring product
  const {
    brand,
    category,
    description,
    discountedPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = cartItem;
  return (
    <div className="cart-item">
      <div className="top">
        <img src={thumbnail} alt={title} className="image" />
        <h3 className="title">{title}</h3>
      </div>
      <div className="bottom">
        <div className="increase-count-decrease">
          <button className="decrease">-</button>
          <h3 className="count"></h3>
          <button className="increase">+</button>
        </div>
        <div className="price-delete">
          <div className="price">{price}</div>
          <div className="delete">
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
