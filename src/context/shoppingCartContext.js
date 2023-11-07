import React, { useContext } from "react";

// ShoppingCartContext
const ShoppingCartContext = React.createContext();

// ShoppingCartProvider
export const ShoppingCartProvider = ({ children }) => {
  return (
    <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
  );
};

// useGlobalShoppingCartContext
export const useGlobalShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
