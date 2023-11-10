import React from "react";
import "./sidebar.css";
import { useGlobalProductsContext } from "../../context/productsContext";

const Sidebar = () => {
  // Provide ProductsContext
  const { productsState, dispatchForProducts } = useGlobalProductsContext();

  // define static categories array
  const categories = [
    "all",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  const fetchProductsByCategory = (category) => {
    // fetch based on category
    const URL =
      category.toLowerCase() === "all"
        ? "https://dummyjson.com/products?limit=100"
        : `https://dummyjson.com/products/category/${category.toLowerCase()}`;

    // dispatchForProducts({ type: "FETCH_REQUEST" });

    // fetch API
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.products);
        if (data.products) {
          dispatchForProducts({
            type: "FETCH_SUCCESS",
            payload: data.products,
          });
        }
        console.log("New", productsState.products);
      })
      .catch((err) => {
        console.log(err.message);
        dispatchForProducts({ type: "FETCH_ERROR", payload: err.message });
      });
  };
  return (
    <div className="sidebar">
      {/* returned transformed categories array/lists and keys */}
      {categories.map((category, index) => {
        return (
          <div
            onClick={() => {
              fetchProductsByCategory(category);
            }}
            className="category-item"
            key={index}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
