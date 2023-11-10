import React, { useContext, useReducer } from "react";

// ProductsContext => returns {Provider, Consumer}
const ProductsContext = React.createContext();

// Provider
export const ProductsProvider = ({ children }) => {
  // initialProductsState
  const initialProductsState = {
    loading: false,
    products: [],
    error: "",
  };

  // reducer to switch through action types
  const productsReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return {
          ...state,
          loading: true,
          products: [],
          error: "",
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
      case "ADD_TO_PRODUCT_LIST":
        return {
          ...state,
          loading: false,
          products: [...state.products, action.payload],
          error: "",
        };

      default:
        return state;
    }
  };

  // useReducer => returns [state, dispatch]
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

// useGlobalProductsContext will be accessed globally
export const useGlobalProductsContext = () => {
  return useContext(ProductsContext);
};
