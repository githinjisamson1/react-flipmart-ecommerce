import React, { useContext, useReducer } from "react";

// ProductsContext
const ProductsContext = React.createContext();

// Provider
export const ProductsProvider = ({ children }) => {
  // initialProductsState
  const initialProductsState = {
    loading: false,
    products: [],
    error: "",
  };

  // reducer
  const productsReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: "",
        };
      case "FETCH_ERROR":
        return {
          ...state,
          loading: false,
          products: [],
          error: action.payload,
        };

      default:
        return state;
    }
  };

  // useReducer
  const [productsState, dispatchForProducts] = useReducer(
    productsReducer,
    initialProductsState
  );

  return (
    <ProductsContext.Provider value={{ productsState, dispatchForProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

// useGlobalProductsContext
export const useGlobalProductsContext = () => {
  return useContext(ProductsContext);
};
