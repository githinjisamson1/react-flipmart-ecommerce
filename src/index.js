import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/productsContext";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));
// using context API to avoid unnecessary prop drilling
root.render(
  <ProductsProvider>
    <ShoppingCartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShoppingCartProvider>
  </ProductsProvider>
);
