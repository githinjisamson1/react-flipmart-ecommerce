import React, { useEffect } from "react";
import { useGlobalProductsContext } from "../../context/productsContext";
import Product from "./Product";

const Products = () => {
  // access value props from ProductsProvider
  const { productsState, dispatchForProducts } = useGlobalProductsContext();

  // GET all products
  const fetchAllProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatchForProducts({ type: "FETCH_REQUEST" });
        console.log(data.products);
        dispatchForProducts({ type: "FETCH_SUCCESS", payload: data.products });
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
    <>
      {productsState.products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </>
  );
};

export default Products;
