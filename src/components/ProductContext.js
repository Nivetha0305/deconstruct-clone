import { createContext } from "react";

import vitamin from "../assets/vitaminc.webp";
import vitaminhover from "../assets/hovervitaminc.webp";
import sunscreen from "../assets/sunscreen.webp";
import sunscreenhover from "../assets/sunscreenhover.webp";
import brightface from "../assets/brightfacewash.webp";
import brightfacehover from "../assets/brighthover.webp";

export const DataContext = createContext();

 export function ProductContext({ children }) {
  const bestSellerProducts = [
    {
      id: 1,
      name: "Vitamin C Serum For Face",
      price: 799,
      offerPrice: 599,
      productname:  "Vitamin C Serum For Face - 10% Vitamin C + 0.5 % Ferulic Acid | Non-Irritating  Non-Sticky",
      description: "Brightens and evens skin tone",
      image: vitamin,
      hoverImage: vitaminhover,
    },
    {
      id: 2,
      name: "Gel Sunscreen SPF 55+",
      price: 449,
      offerPrice: 349,
      productname:"  Gel Sunscreen for Oily Skin - SPF 55+ and PA+++ | Water Resistant Sunscreen (50 Gms)",
      description: "No whitecast, sweat-resistant SPF",
      image: sunscreen,
      hoverImage: sunscreenhover,
    },
    {
      id: 3,
      name: "Vitamin C Brightening Face Wash",
      price: 349,
      offerPrice: 262,
      description: "Fade dullness & dark spots",
      productname:"Vitamin C Brightening Face Wash | Brighten Skin & Reduce darkspots",
      image: brightface,
      hoverImage: brightfacehover,
    },
  ];

  const data = { bestSellerProducts };

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}
