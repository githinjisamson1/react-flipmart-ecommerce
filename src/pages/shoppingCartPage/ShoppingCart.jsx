import React from "react";
import { useGlobalShoppingCartContext } from "../../context/shoppingCartContext";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const { shoppingCartState } = useGlobalShoppingCartContext();
  return (
    <div>
      {shoppingCartState.shoppingCart.map((cartItem) => {
        return <CartItem key={cartItem.id} cartItem={cartItem} />;
      })}
    </div>
  );
};

export default ShoppingCart;
