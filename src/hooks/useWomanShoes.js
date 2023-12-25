import { useEffect, useState } from "react";

export const useWomanShoes = () => {
  const [womanShoes, setwomanShoes] = useState([]);
  /**
   * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de los zapatos de hombre
   * del back-end en el primer renderizado.
   */
  useEffect(() => {
    //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

    setTimeout(() => {
      setwomanShoes([
        {
          id: "16",
          image: "../assets/shoes/shoes-16.png",
          name: "MYSTIC YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "99,99",
          type: "shoes",
        },
        {
          id: "17",
          image: "../assets/shoes/shoes-17.png",
          name: "MYSTIC YOUTH WHITE / YELLOW",
          description: "Zapatillas casual unisex",
          price: "199,99",
          type: "snikers",
        },
        {
          id: "18",
          image: "../assets/shoes/shoes-18.png",
          name: "MYSTIC YOUTH WHITE / BLACK 2",
          description: "Zapatillas casual unisex",
          price: "199,99",
          type: "boots",
        },
        {
          id: "19",
          image: "../assets/shoes/shoes-19.png",
          name: "MYSTIC YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "199,99",
          type: "shoes",
        },
        {
          id: "20",
          image: "../assets/shoes/shoes-20.png",
          name: "MYSTIC YOUTH WHITE / RAW 25",
          description: "Zapatillas de running neutras",
          price: "299,99",
          type: "shoes",
        },
        {
          id: "21",
          image: "../assets/shoes/shoes-21.png",
          name: "MYSTIC YOUTH WHITE / RANDOM",
          description: "Zapatillas de running neutras",
          price: "299,99",
          type: "snikers",
        },
        {
          id: "22",
          image: "../assets/shoes/shoes-22.png",
          name: "MYSTIC YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "199,99",
          type: "snikers",
        },
        {
          id: "23",
          image: "../assets/shoes/shoes-23.png",
          name: "MYSTIC SHOES WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "199,99",
          type: "snikers",
        },
        {
          id: "24",
          image: "../assets/shoes/shoes-24.png",
          name: "MYSTIC SNIKERS WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "199,99",
          type: "snikers",
        },
        {
          id: "25",
          image: "../assets/shoes/shoes-25.png",
          name: "SNIKERS YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "69,99",
          type: "snikers",
        },
        {
          id: "26",
          image: "../assets/shoes/shoes-26.png",
          name: "UNICORN YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "59,99",
          type: "boots",
        },
        {
          id: "27",
          image: "../assets/shoes/shoes-27.png",
          name: "DINOSAUR YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "49,99",
          type: "snikers",
        },
        {
          id: "28",
          image: "../assets/shoes/shoes-28.png",
          name: "MYSTIC YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "29,99",
          type: "snikers",
        },
        {
          id: "29",
          image: "../assets/shoes/shoes-29.png",
          name: "ELF YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "19,99",
          type: "snikers",
        },
        {
          id: "30",
          image: "../assets/shoes/shoes-30.png",
          name: "SINIKER YOUTH WHITE / SILVER",
          description: "Zapatillas de running neutras",
          price: "9,99",
          type: "snikers",
        },
      ]);
    }, 1000);
  }, []);

  return womanShoes;
};
