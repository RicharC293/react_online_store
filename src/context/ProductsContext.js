import React from "react";

//Contexto de productos actuales
export const ProductsContext = React.createContext({
  products: [],
  setProducts: () => {
    console.log("setProducts");
  },
});
