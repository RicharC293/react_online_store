import { Drawer } from "@mui/material";
import CartProduct from "./CartProduct";
import { useContext } from "react";
import { CartProductsContext } from "../../context/CartProductsContext";
import { createOrder } from "../../services/createOrder";
import { useState } from "react";
import { LinearProgress } from "@mui/material";

function Cart({ state, toggleDrawer }) {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  //create loading state
  const [loading, setLoading] = useState(false);

  return (
    <Drawer anchor={"right"} open={state} onClose={toggleDrawer}>
      <div className="flex flex-col h-screen justify-between p-4">
        <div>
          {loading && <LinearProgress />}

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
            onClick={async () => {
              try {
                console.log("comprar");
                setLoading(true);
                await createOrder(cartProducts);
                setCartProducts([]);
                toggleDrawer();
              } catch (error) {
                console.log(error);
              } finally {
                setLoading(false);
              }
            }}
          >
            <p className="text-lg font-semibold text-white p-2">
              {loading ? "Comprando..." : "Comprar"}
            </p>
          </button>
        </div>
      </div>
    </Drawer>
  );
}

export default Cart;
