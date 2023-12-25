import { useWomanShoes } from "../hooks/useWomanShoes";
import ProductCard from "../components/product/ProductCard";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useContext } from "react";
import { useEffect } from "react";
import { CurrentProductsContext } from "../context/CurrentProductsContext";
import { ProductsContext } from "../context/ProductsContext";

function WomanProducts() {
  const womanShoes = useWomanShoes();
  const { setCurrentProducts } = useContext(CurrentProductsContext);
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    setProducts(womanShoes);
    setCurrentProducts(womanShoes);
  }, [womanShoes, setCurrentProducts, setProducts]);

  return (
    <>
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      ) : (
        <ProductSkeleton />
      )}
    </>
  );
}

export default WomanProducts;
