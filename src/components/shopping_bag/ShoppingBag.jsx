import { CartProductsContext } from "../../context/CartProductsContext";
import Cart from "../cart/Cart";
import { useContext, useState } from "react";

function ShoppingBag() {
  const [showCart, setShowCart] = useState(false);
  const { cartProducts } = useContext(CartProductsContext);

  const toggleDrawer = () => {
    console.log("toggleDrawer");
    setShowCart(!showCart);
  };

  return (
    <>
      <div className="relative">
        <img
          className="h-6 hover:text-gray-700 cursor-pointer"
          src="../assets/ic_bag.png"
          alt="carrito"
          onClick={toggleDrawer}
        />
        {cartProducts.length > 0 && (
          <div className="absolute -top-2 -right-2 rounded-full bg-black text-white w-5 h-5 flex items-center justify-center text-xs font-semibold">
            {cartProducts.reduce((acc, product) => acc + product.quantity, 0)}
          </div>
        )}
      </div>
      <Cart state={showCart} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default ShoppingBag;
