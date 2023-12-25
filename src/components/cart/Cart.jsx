import { Drawer } from "@mui/material";
import CartProduct from "./CartProduct";
import { useContext } from "react";
import { CartProductsContext } from "../../context/CartProductsContext";

function Cart({ state, toggleDrawer }) {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  return (
    <Drawer anchor={"right"} open={state} onClose={toggleDrawer}>
      <div className="flex flex-col h-screen justify-between p-4">
        <div>
          <h1 className="text-4xl font-semibold">Carrito</h1>

          <div className="my-4">
            {cartProducts.map((product) => {
              return (
                <CartProduct
                  key={product.id}
                  product={product}
                  quantity={product.quantity}
                />
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-2xl">
            <span className="font-semibold">Total a pagar:</span>{" "}
            {cartProducts.reduce(
              (acc, product) =>
                acc + parseFloat(product.price) * product.quantity,
              0
            )}{" "}
            €
          </p>

          <button
            className="rounded-md border-2 bg-black mt-5 w-full"
            onClick={() => {
              console.log("comprar");
              setCartProducts([]);
              toggleDrawer();
            }}
          >
            <p className="text-lg font-semibold text-white p-2">COMPRAR</p>
          </button>
        </div>
      </div>
    </Drawer>
  );
}

export default Cart;
