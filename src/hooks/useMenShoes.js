import { useEffect, useState } from "react";

export const useMenShoes = () => {
  const [menShoes, setMenShoes] = useState([]);
  /**
   * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de los zapatos de hombre
   * del back-end en el primer renderizado.
   */
  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL);
    fetch(`${process.env.REACT_APP_BASE_URL}/ms-store-products/products?category=man`)
      .then((res) => res.json())
      .then((res) => setMenShoes(res["products"]));
  }, []);

  return menShoes;
};
