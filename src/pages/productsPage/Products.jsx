import React, { useEffect } from "react";
import { useGlobalProductsContext } from "../../context/productsContext";
import Product from "./Product";
import "./products.css";
import Sidebar from "../../components/sidebar/Sidebar";
import CreateProductForm from "../../components/createProductForm/CreateProductForm";

const Products = () => {
  // Provide ProductsContext
  const { productsState, dispatchForProducts } = useGlobalProductsContext();

  // GET all products
  const fetchAllProducts = () => {
    dispatchForProducts({ type: "FETCH_REQUEST" });

    // fetch API - all
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => {
        // convert readableStream to json
        return response.json();
      })
      .then((data) => {
        // console.log(data.products);
        if (data.products) {
          dispatchForProducts({
            type: "FETCH_SUCCESS",
            payload: data.products,
          });
        }
      })
      .catch((err) => {
        // console.log(err.message);
        dispatchForProducts({ type: "FETCH_ERROR", payload: err.message });
      });
  };

  // run side effect once/initial render
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <main className="aside-products">
      <aside className="aside">
        <Sidebar />
        <CreateProductForm />
      </aside>
      <div className="products">
        {/* conditional rendering/short-circuit */}
        {productsState.products &&
          productsState.products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </div>
    </main>
  );
};

export default Products;
