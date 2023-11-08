import React, { useContext, useReducer } from "react";

// ShoppingCartContext
const ShoppingCartContext = React.createContext();

// ShoppingCartProvider
export const ShoppingCartProvider = ({ children }) => {
  // initialShoppingCartState
  const initialShoppingCartState = {
    shoppingCart: [],
  };

  // shoppingCartReducer;
  const shoppingCartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          shoppingCart: [...state.shoppingCart, action.payload],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          shoppingCart: state.shoppingCart.filter((cartItem) => {
            return cartItem.id !== action.payload.id;
          }),
        };
      default:
        return state;
    }
  };

  // useReducer
  const [shoppingCartState, dispatchForShoppingCart] = useReducer(
    shoppingCartReducer,
    initialShoppingCartState
  );

  // context API
  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartState, dispatchForShoppingCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// useGlobalShoppingCartContext
export const useGlobalShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
