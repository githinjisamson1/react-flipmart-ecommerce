import React from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import { useGlobalProductsContext } from "../../context/productsContext";

const Details = () => {
  // access value prop using ProductsProvider
  const { productsState } = useGlobalProductsContext();

  //   grab/access productId from URL
  const { productId } = useParams();

  let match;

  //   only find when products array is not empty/SECURITY/ERROR HANDLING
  if (productsState.products) {
    match = productsState.products.find((product) => {
      // true for SAME TYPE
      return product.id === Number(productId);
    });
  }

  //   destructure match
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
  } = match;

  return (
    <>
      {/* conditional rendering/short-circuit */}
      {match && (
        <div>
          <img src={thumbnail} alt={title} className="image" />
          <div className="details">
            <h3 className="title">{title}</h3>
            <h5 className="brand">{brand}</h5>
            <p className="description">{description}</p>
            <p className="category">{category}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
