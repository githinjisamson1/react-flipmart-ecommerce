import React from "react";
import { useGlobalShoppingCartContext } from "../../context/shoppingCartContext";
import { useNavigate } from "react-router-dom";

// prop drilling product from Products
const Product = ({ product }) => {
  // to change location
  const navigate = useNavigate();

  // Provide ShoppingCartContext
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
  //

  return (
    <div className="product">
      <img
        onClick={() => {
          navigate(`${id}`);
        }}
        className="image"
        src={thumbnail}
        alt={title}
      />
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
                alert("Product added to cart");
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
