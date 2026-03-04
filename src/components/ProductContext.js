import  { createContext } from "react";
import vitamin from "../assets/vitaminc.webp";
import vitaminhover from "../assets/hovervitaminc.webp";
import sunscreen from "../assets/sunscreen.webp";
import sunscreenhover from "../assets/sunscreenhover.webp";
import brightface from "../assets/brightfacewash.webp";
import brightfacehover from "../assets/brighthover.webp";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const bestSellerProducts = [
    {
      id: 1,
      name: "Vitamin C Serum For Face",
      price: 799,
      offerPrice: 599,
      description: "brightens and evens skin tone",
      image: vitamin,
      hoverImage: vitaminhover,
    },
    {
      id: 2,
      name: "Gel Sunscreen SPF 55+",
      price: 349,
      offerPrice: 262,
      description: "no whitecast, sweat-resistant SPF",
      image: sunscreen,
      hoverImage: sunscreenhover,
    },
    {
      id: 3,
      name: "Vitamin C Brightening Face Wash",
      price: 349,
      offerPrice: 262,
      description: "Fade Dullness & Dark Spot",
      image: brightface,
      hoverImage: brightfacehover,
    },
  ];

  return (
    <ProductContext.Provider value={{ bestSellerProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
