import { Drawer } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
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
  const [open, setOpen] = useState(false);

  const successPurchase = () => {
    setOpen(true);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="primary" size="small" onClick={closeSnackbar}>
        Entendido
      </Button>
    </>
  );

  return (
    <>
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
                  successPurchase();
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
      <Snackbar
        open={open}
        onClose={closeSnackbar}
        message="Compra realizada con éxito"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        action={action}
      />
    </>
  );
}

export default Cart;
