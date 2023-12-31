import React from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import { useGlobalProductsContext } from "../../context/productsContext";
import RatingComponent from "../../components/rating/RatingComponent";
import { useGlobalShoppingCartContext } from "../../context/shoppingCartContext";

const Details = () => {
  // Provide ProductsContext
  const { productsState } = useGlobalProductsContext();

  // Provide ShoppingCartContext
  const { dispatchForShoppingCart } = useGlobalShoppingCartContext();

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
    <div div className="detail-section">
      {/* conditional rendering/short-circuit */}
      {match && (
        <div className="detail-item">
          <img src={thumbnail} alt={title} className="image" />
          <div className="details">
            <div className="rating-price">
              <div className="rating">
                {/* prop drilling rating */}
                <RatingComponent rating={rating} />
              </div>
              <div className="price">{price}</div>
            </div>
            <h5 className="brand">{brand}</h5>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <p className="category">Category: {category}</p>
            <button
              onClick={() => {
                dispatchForShoppingCart({
                  type: "ADD_TO_CART",
                  payload: match,
                });
                alert("Product added to cart");
              }}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
