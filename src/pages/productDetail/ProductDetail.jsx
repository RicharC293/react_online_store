import { useParams } from "react-router-dom";
import { useAllShoes } from "../../hooks/useAllShoes";
import "./product-detail.css";
import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { CartProductsContext } from "../../context/CartProductsContext";
import Snackbar from "@mui/material/Snackbar";

function ProductDetail() {
  const { productId } = useParams();
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const [open, setOpen] = useState(false);

  const successAddedToCart = () => {
    setOpen(true);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const allShoes = useAllShoes();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (allShoes.length === 0) {
    return <LinearProgress />;
  }

  const product = allShoes?.find((product) => product.id === productId);
  return (
    <div>
      <div className="flex gap-5 items-center m-4">
        <div className="w-1/3 text-right">
          <p className="text-3xl font-semibold mb-4">{product.price} €</p>
          <p className="text-2xl font-semibold mb-2">EXPLORAR</p>
          <p className="text-lg font-bold"> REVIEWS</p>
        </div>
        <div className="w-full self-center center-image">
          <img src={product.image} alt={product.name} height="100%" />
        </div>
        <div className="w-1/3">
          <p className="text-2xl mb-2">NIKE</p>
          <p className="text-3xl font-bold mb-1">{product.name}</p>
          <p className="text-lg mb-4">{product.description}</p>
          <button
            className="rounded-md border-2 bg-black"
            onClick={() => {
              console.log("añadir al carrito");
              // check if any product with ID is already in the cart and add 1 to quantity
              const productInCart = cartProducts.find(
                (productInCart) => productInCart.id === product.id
              );
              successAddedToCart();
              if (productInCart) {
                const newCartProducts = cartProducts.map((productInCart) => {
                  if (productInCart.id === product.id) {
                    return {
                      ...productInCart,
                      quantity: productInCart.quantity + 1,
                    };
                  }
                  return productInCart;
                });
                return setCartProducts(newCartProducts);
              }
              // if not, add product to cart
              setCartProducts([
                ...cartProducts,
                {
                  ...product,
                  quantity: 1,
                },
              ]);
            }}
          >
            <p className="text-lg font-semibold text-white p-2">COMPRAR</p>
          </button>
        </div>
      </div>
      <div className="flex content-between justify-between m-4">
        <button onClick={goBack}>
          <img src="../../assets/return.png" alt="regresar" width={25} />
        </button>
        <button
          onClick={() =>
            window.open(
              `https://wa.me/593983736422?text=Hola! Estoy interesado en ${product.name}`
            )
          }
        >
          <img src="../../assets/share.png" alt="compartir" width={25} />
        </button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={closeSnackbar}
        message={`${product.name} añadido al carrito`}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
}

export default ProductDetail;
