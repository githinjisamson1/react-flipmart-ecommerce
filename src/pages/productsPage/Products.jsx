import React, { useEffect } from "react";
import { useGlobalProductsContext } from "../../context/productsContext";
import Product from "./Product";
import "./products.css";

const Products = () => {
  // access value props from ProductsProvider
  const { productsState, dispatchForProducts } = useGlobalProductsContext();

  // GET all products
  const fetchAllProducts = () => {
    dispatchForProducts({ type: "FETCH_REQUEST" });

    // fetch API - all
    fetch("https://dummyjson.com/products")
      .then((response) => {
        // convert readableStream to json
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
      })
      .catch((err) => {
        console.log(err.message);
        dispatchForProducts({ type: "FETCH_ERROR", payload: err.message });
      });
  };

  // run side effect once/initial render
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="products">
      {/* conditional rendering/short-circuit */}
      {productsState.products &&
        productsState.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </div>
  );
};

export default Products;
