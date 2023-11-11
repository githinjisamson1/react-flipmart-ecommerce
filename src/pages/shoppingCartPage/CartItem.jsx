import React from "react";
import { useGlobalShoppingCartContext } from "../../context/shoppingCartContext";

const CartItem = ({ cartItem }) => {
  // Provide ShoppingCartContext
  const { dispatchForShoppingCart } = useGlobalShoppingCartContext();

  // destructuring cartItem
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
          <button
            onClick={() => {
              dispatchForShoppingCart({
                type: "REMOVE_FROM_CART",
                payload: cartItem,
              });
            }}
            className="decrease"
          >
            Decrease
          </button>
          <h3 className="count">
            {cartItem.quantity ? cartItem.quantity : null}
          </h3>
          <button
            onClick={() => {
              dispatchForShoppingCart({
                type: "ADD_TO_CART",
                payload: cartItem,
              });
            }}
            className="increase"
          >
            Increase
          </button>
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
                alert("Product removed from cart");
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
