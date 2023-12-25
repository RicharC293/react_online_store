import { useAllShoes } from "../hooks/useAllShoes";
import ProductCard from "../components/product/ProductCard";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useContext } from "react";
import { useEffect } from "react";
import { CurrentProductsContext } from "../context/CurrentProductsContext";
import { ProductsContext } from "../context/ProductsContext";

function AllProducts() {
  const allShoes = useAllShoes();
  const { setCurrentProducts } = useContext(CurrentProductsContext);
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    setCurrentProducts(allShoes);
    setProducts(allShoes);
    
  }, [allShoes, setCurrentProducts, setProducts]);

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

export default AllProducts;
