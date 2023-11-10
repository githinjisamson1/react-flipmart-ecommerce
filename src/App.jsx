import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/productsPage/Products";
import ShoppingCart from "./pages/shoppingCartPage/ShoppingCart";
import Navbar from "./components/navbar/Navbar";
import Details from "./pages/detailsPage/Details";
import About from "./pages/aboutPage/About";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      {/* Navbar appears on all pages */}
      <Navbar />
      {/* configure routes */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route index path="/products" element={<Products />} />
        <Route path="products/:productId" element={<Details />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
      <Footer/>

    </div>
  );
};

export default App;
