import React from "react";
import { useGlobalShoppingCartContext } from "../../context/shoppingCartContext";

// prop drilling product from Products
const Product = ({ product }) => {
  // access value prop from ShoppingCartProvider
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
  } = product;

  return (
    <div className="product">
      <img className="image" src={thumbnail} alt={title} />
      <div className="details">
        <h3 className="title">{title}</h3>
        <div className="price-cart">
          <div className="price">{price}</div>
          <div className="cart">
            <i
              onClick={() => {
                dispatchForShoppingCart({
                  type: "ADD_TO_CART",
                  payload: product,
                });
              }}
              className="fa-solid fa-cart-shopping"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
