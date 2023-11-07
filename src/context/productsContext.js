import React, { useContext } from "react";

const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  return <ProductsContext.Provider>{children}</ProductsContext.Provider>;
};

export const useGlobalProductsContext = () => {
  return useContext(ProductsContext);
};
