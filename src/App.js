import "./App.css";
import { CartProductsContext } from "./context/CartProductsContext";
import { CurrentProductsContext } from "./context/CurrentProductsContext";
import { ProductsContext } from "./context/ProductsContext";
import GlobalRouter from "./router/GlobalRouter";
import { useState } from "react";

function App() {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const currentProductsValue = {
    currentProducts,
    setCurrentProducts,
  };
  const productsValue = {
    products,
    setProducts,
  };
  const cartProductsValue = {
    cartProducts,
    setCartProducts,
  };
  return (
    <CartProductsContext.Provider value={cartProductsValue}>
      <CurrentProductsContext.Provider value={currentProductsValue}>
        <ProductsContext.Provider value={productsValue}>
          <GlobalRouter />
        </ProductsContext.Provider>
      </CurrentProductsContext.Provider>
    </CartProductsContext.Provider>
  );
}

export default App;
