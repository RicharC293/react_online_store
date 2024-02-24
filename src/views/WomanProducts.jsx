import { useWomanShoes } from "../hooks/useWomanShoes";
import ProductCard from "../components/product/ProductCard";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useContext } from "react";
import { useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";

function WomanProducts() {
  const womanShoes = useWomanShoes();
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    setProducts(womanShoes);
  }, [womanShoes, setProducts]);

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
