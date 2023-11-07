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
      value={{ shoppingCartReducer, dispatchForShoppingCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// useGlobalShoppingCartContext
export const useGlobalShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
