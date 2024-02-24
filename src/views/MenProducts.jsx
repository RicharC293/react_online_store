import { useMenShoes } from "../hooks/useMenShoes";
import ProductCard from "../components/product/ProductCard";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useContext } from "react";
import { useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";

function MenProducts() {
  const menShoes = useMenShoes();
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    setProducts(menShoes);
  }, [menShoes, setProducts]);

  return (
    <>
      {products?.length > 0 ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      ) : (
        <ProductSkeleton />
      )}
    </>
  );
}

export default MenProducts;
