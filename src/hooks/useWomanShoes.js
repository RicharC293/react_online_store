import { useEffect, useState } from "react";

export const useWomanShoes = () => {
  const [womanShoes, setwomanShoes] = useState([]);
  /**
   * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de los zapatos de hombre
   * del back-end en el primer renderizado.
   */
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/ms-store-products/products?category=women`)
      .then((res) => res.json())
      .then((res) => setwomanShoes(res["products"]));
  }, []);

  return womanShoes;
};
