import React from "react";

// prop drilling product from Products
const Product = ({ product }) => {
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
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
