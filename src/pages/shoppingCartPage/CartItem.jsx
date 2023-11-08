import React from "react";
import { useGlobalShoppingCartContext } from "../../context/shoppingCartContext";

const CartItem = ({ cartItem }) => {
  const { dispatchForShoppingCart } = useGlobalShoppingCartContext();
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
          <button className="decrease">Decrease</button>
          <h3 className="count">0</h3>
          <button className="increase">Increase</button>
        </div>
        <div className="price-delete">
          <div className="price">{price}</div>
          <div className="delete">
            <i
              onClick={() => {
                dispatchForShoppingCart({
                  type: "REMOVE_FROM_CART",
                  payload: cartItem,
                });
              }}
              className="fa-solid fa-trash-can"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
