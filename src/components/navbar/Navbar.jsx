import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useGlobalShoppingCartContext } from "../../context/shoppingCartContext";

const Navbar = () => {
  const { shoppingCartState } = useGlobalShoppingCartContext();
  // applying styles based on isActive boolean flag
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      fontWeight: isActive ? "700" : "normal",
      color: isActive ? "goldenrod" : "#eee",
    };
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <NavLink to="products">FlipMart</NavLink>
        </h1>
      </div>

      <div className="navigation-links">
        <NavLink style={navLinkStyles} to="about">
          About
        </NavLink>
        <NavLink style={navLinkStyles} to="products">
          Products
        </NavLink>
        <NavLink style={navLinkStyles} to="login">
          Login
        </NavLink>
        <NavLink style={navLinkStyles} to="shoppingCart">
          <i className="fa-solid fa-bag-shopping"></i>
          <span className="cart-items-count">
            {shoppingCartState.shoppingCartCount}
          </span>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
