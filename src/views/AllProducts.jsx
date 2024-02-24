import { useAllShoes } from "../hooks/useAllShoes";
import ProductCard from "../components/product/ProductCard";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import { useContext } from "react";
import { useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";

function AllProducts() {
  const allShoes = useAllShoes();
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    setProducts(allShoes);
    
  }, [allShoes, setProducts]);

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
