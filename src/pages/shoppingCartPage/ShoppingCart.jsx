import React from "react";
import { useGlobalShoppingCartContext } from "../../context/shoppingCartContext";
import CartItem from "./CartItem";
import "./shoppingCart.css";

const ShoppingCart = () => {
  // access value prop from ShoppingCartProvider
  const { shoppingCartState } = useGlobalShoppingCartContext();

  return (
    <div className="shopping-cart">
      {/* conditional rendering/short-circuit */}
      {shoppingCartState.shoppingCart &&
        shoppingCartState.shoppingCart.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}

      {/* totalPrice section */}
      <div className="total-price">
        Total Price: $ {shoppingCartState.totalPrice}
      </div>
    </div>
  );
};

export default ShoppingCart;
