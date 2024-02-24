import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ShoppingBag from "../shopping_bag/ShoppingBag";
import { search } from "../../services/search";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const { setProducts } = useContext(ProductsContext);

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
        <button
          className="text-xl font-semibold hover:text-gray-700 cursor-pointer"
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=593983736422&text=Hola%20necesito%20devolver%20unos%20zapatos",
              "_blank"
            );
          }}
        >
          Contactar
        </button>
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
            onChange={async (e) => {
              const value = e.target.value;
              const location = window.location.pathname;
              const fetchedProducts = await search(value, location);
              setProducts(fetchedProducts);
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
