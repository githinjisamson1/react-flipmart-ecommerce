import React, { useContext, useReducer } from "react";

// ShoppingCartContext => returns {Provider, Consumer}
const ShoppingCartContext = React.createContext();

// ShoppingCartProvider
export const ShoppingCartProvider = ({ children }) => {
  // initialShoppingCartState
  const initialShoppingCartState = {
    shoppingCart: [],
    shoppingCartCount: 0,
    totalPrice: 0,
  };

  // shoppingCartReducer;
  const shoppingCartReducer = (state, action) => {
    // !handleAddToCart
    const handleAddToCart = (state) => {
      return [...state.shoppingCart, action.payload];

      // TODO: look into when cartItem appears more than once
      // // !!!return index of item if in cart
      // const existingItemIndex = state.shoppingCart.findIndex(
      //   (cartItem) => cartItem.id === action.payload.id
      // );

      // if (existingItemIndex !== -1) {
      //   // !!!if in cart increase quantity property
      //   return [
      //     ...state.shoppingCart,
      //     (state.shoppingCart[existingItemIndex].quantity += 1),
      //   ];
      // } else {
      //   // !!!if not in cart/add quantity property/set to 1
      //   return [...state.shoppingCart, { ...action.payload, quantity: 1 }];
      // }
    };

    // !handleDeleteFromCart
    const handleDeleteFromCart = (state) => {
      return state.shoppingCart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      });
    };

    // !updating shoppingCartCount based on previousState/INCREASE
    const handleIncreasingCartCount = (prevState) => {
      return prevState.shoppingCartCount + 1;
    };

    // !updating shoppingCartCount based on previousState/DECREASE
    const handleDecreasingCartCount = (prevState) => {
      return prevState.shoppingCartCount - 1;
    };

    // !OR use immmediately invoked function
    // (function (prevState) {
    //   return prevState.shoppingCartCount + 1;
    // })(state);

    // TODO: spread oldState return newState
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          shoppingCart: handleAddToCart(state),
          shoppingCartCount: handleIncreasingCartCount(state),

          // totalPrice of already updatedState
          totalPrice: handleAddToCart(state).reduce((accumulator, cartItem) => {
            return (accumulator += cartItem.price);
          }, initialShoppingCartState.totalPrice),
        };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          shoppingCart: handleDeleteFromCart(state),
          shoppingCartCount: handleDecreasingCartCount(state),

          // totalPrice of already updatedState
          totalPrice: handleDeleteFromCart(state).reduce(
            (accumulator, cartItem) => {
              return (accumulator += cartItem.price);
            },
            initialShoppingCartState.totalPrice
          ),
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

// useGlobalShoppingCartContext can be accessed globally
export const useGlobalShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
