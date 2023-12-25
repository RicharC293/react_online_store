import { useMenShoes } from "../hooks/useMenShoes";
import ProductCard from "../components/product/ProductCard";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useContext } from "react";
import { useEffect } from "react";
import { CurrentProductsContext } from "../context/CurrentProductsContext";
import { ProductsContext } from "../context/ProductsContext";

function MenProducts() {
  const menShoes = useMenShoes();
  const { setCurrentProducts } = useContext(CurrentProductsContext);
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    setCurrentProducts(menShoes);
    setProducts(menShoes);
    
  }, [menShoes, setCurrentProducts, setProducts]);

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
