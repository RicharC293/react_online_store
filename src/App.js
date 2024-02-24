import "./App.css";
import { CartProductsContext } from "./context/CartProductsContext";
import { ProductsContext } from "./context/ProductsContext";
import GlobalRouter from "./router/GlobalRouter";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
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
        <ProductsContext.Provider value={productsValue}>
          <GlobalRouter />
        </ProductsContext.Provider>
    </CartProductsContext.Provider>
  );
}

export default App;
