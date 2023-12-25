import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentProductsContext } from "../../context/CurrentProductsContext";
import { ProductsContext } from "../../context/ProductsContext";
import ShoppingBag from "../shopping_bag/ShoppingBag";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const { products, setProducts } = useContext(ProductsContext);
  const { currentProducts } = useContext(CurrentProductsContext);

  return (
    <header className="m-4 flex items-center place-content-between">
      <div className="items-center flex gap-6">
        <Link to={"/"}>
          <img className="h-10" src="../assets/logo.png" alt="logo" />
        </Link>
        <Link
          className="text-xl font-semibold hover:text-gray-700 cursor-pointer"
          to={"/men"}
        >
          Hombre
        </Link>
        <Link
          className="text-xl font-semibold hover:text-gray-700 cursor-pointer"
          to={"/woman"}
        >
          Mujer
        </Link>
        <Link
          className="text-xl font-semibold hover:text-gray-700 cursor-pointer"
          to={"/child"}
        >
          Niños
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        {showSearch && (
          <input
            className="border-2 border-gray-300 rounded-md p-2 h-8 w-48 focus:outline-none focus:border-gray-700"
            type="text"
            placeholder="Buscar"
            autoFocus
            onBlur={(e) => {
              if (e.target.value === "") {
                setShowSearch(false);
              }
            }}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") return setProducts(currentProducts);
              const newProducts = products.filter((product) => {
                return product.name.toLowerCase().includes(value.toLowerCase());
              });
              setProducts(newProducts);
            }}
          />
        )}

        {!showSearch && (
          <img
            className="h-5 hover:text-gray-700 cursor-pointer"
            src="../assets/ic_search.png"
            alt="buscar"
            onClick={() => setShowSearch(true)}
          />
        )}

        <ShoppingBag></ShoppingBag>
      </div>
    </header>
  );
}

export default Header;
