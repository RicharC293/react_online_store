import React from "react";

//Contexto de productos actuales
export const CurrentProductsContext = React.createContext({
  currentProducts: [],
  setCurrentProducts: () => {
    console.log("setAllCurrentProducts");
  },
});
