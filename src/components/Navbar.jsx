import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h1>FlipMart</h1>
      </div>
      <div className="navigation-links">
        <NavLink to="products">Products</NavLink>
        <NavLink to="/shoppingCart">
          <i class="fa-solid fa-bag-shopping"></i>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
