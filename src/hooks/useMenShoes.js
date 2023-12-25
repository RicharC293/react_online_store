import { useEffect, useState } from "react";

export const useMenShoes = () => {
  const [menShoes, setMenShoes] = useState([]);
  /**
   * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de los zapatos de hombre
   * del back-end en el primer renderizado.
   */
  useEffect(() => {
    //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

    setTimeout(() => {
      setMenShoes([
        {
          id: "1",
          image: "../assets/shoes/shoes-1.png",
          name: "MYSTIC YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "99,99",
          type: "shoes",
        },
        {
          id: "2",
          image: "../assets/shoes/shoes-2.png",
          name: "MYSTIC YOUTH WHITE / YELLOW",
          description: "Zapatillas casual unisex",
          price: "199,99",
          type: "snikers",
        },
        {
          id: "3",
          image: "../assets/shoes/shoes-3.png",
          name: "MYSTIC YOUTH WHITE / BLACK 2",
          description: "Zapatillas casual unisex",
          price: "199,99",
          type: "boots",
        },
        {
          id: "4",
          image: "../assets/shoes/shoes-4.png",
          name: "MYSTIC YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "199,99",
          type: "shoes",
        },
        {
          id: "5",
          image: "../assets/shoes/shoes-5.png",
          name: "MYSTIC YOUTH WHITE / RAW 25",
          description: "Zapatillas de running neutras",
          price: "299,99",
          type: "shoes",
        },
        {
          id: "6",
          image: "../assets/shoes/shoes-6.png",
          name: "MYSTIC YOUTH WHITE / RANDOM",
          description: "Zapatillas de running neutras",
          price: "299,99",
          type: "snikers",
        },
        {
          id: "7",
          image: "../assets/shoes/shoes-7.png",
          name: "MYSTIC YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "199,99",
          type: "snikers",
        },
        {
          id: "8",
          image: "../assets/shoes/shoes-8.png",
          name: "MYSTIC SHOES WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "199,99",
          type: "snikers",
        },
        {
          id: "9",
          image: "../assets/shoes/shoes-9.png",
          name: "MYSTIC SNIKERS WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "199,99",
          type: "snikers",
        },
        {
          id: "10",
          image: "../assets/shoes/shoes-10.png",
          name: "SNIKERS YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "69,99",
          type: "snikers",
        },
        {
          id: "11",
          image: "../assets/shoes/shoes-11.png",
          name: "UNICORN YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "59,99",
          type: "boots",
        },
        {
          id: "12",
          image: "../assets/shoes/shoes-12.png",
          name: "DINOSAUR YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "49,99",
          type: "snikers",
        },
        {
          id: "13",
          image: "../assets/shoes/shoes-13.png",
          name: "MYSTIC YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "29,99",
          type: "snikers",
        },
        {
          id: "14",
          image: "../assets/shoes/shoes-14.png",
          name: "ELF YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "19,99",
          type: "snikers",
        },
        {
          id: "15",
          image: "../assets/shoes/shoes-15.png",
          name: "SINIKER YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "9,99",
          type: "snikers",
        },
      ]);
    }, 1000);
  }, []);

  return menShoes;
};
