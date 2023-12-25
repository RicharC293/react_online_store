import React from "react";

//Contexto de productos en el carrito
export const CartProductsContext = React.createContext({
  cartProducts: [],
  setCartProducts: () => {
    console.log("setCartProducts");
  },
});
