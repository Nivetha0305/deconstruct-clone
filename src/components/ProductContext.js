import { createContext } from "react";

import vitamin from "../assets/vitaminc.webp";
import vitaminhover from "../assets/hovervitaminc.webp";
import sunscreen from "../assets/sunscreen.webp";
import sunscreenhover from "../assets/sunscreenhover.webp";
import brightface from "../assets/brightfacewash.webp";
import brightfacehover from "../assets/brighthover.webp";

import bodywash from "../assets/bodywash.webp";
import bodywashhover from "../assets/bodywashhover.webp";

import bodysun from "../assets/bodysun.webp";
import bodysunhover from "../assets/bodysunhover.webp";

import clear from "../assets/clear.webp";
import clearhover from "../assets/clearhover.webp";

import moisturizer from "../assets/moist.webp";
import moisturizerhover from "../assets/moisturizer.webp";

import pore from "../assets/poreserum.webp";
import porehover from "../assets/porehover.webp";

import hydrate from "../assets/hydrate.webp";
import hydratehover from "../assets/hoverhydrate.webp";

import alpha from "../assets/alphahover.webp";
import alphahover from "../assets/alpha.webp";

import acidserum from "../assets/acidserum.webp";
import acidserumhover from "../assets/acidserumhover.webp";

import soothing from "../assets/soothing.webp";
import soothinghover from "../assets/soothinghover.webp";

export const DataContext = createContext();

export const ProductContext = ({ children }) => {
  const bestSellerProducts = [
    {
      id: 1,
      category: "antiacne",
      name: "Vitamin C Serum For Face",
      price: 799,
      offerPrice: 599,
      productname:
        "Vitamin C Serum For Face - 10% Vitamin C + 0.5 % Ferulic Acid | Non-Irritating  Non-Sticky",
      description: "Brightens and evens skin tone",
      image: vitamin,
      hover: vitaminhover,
    },
    {
      id: 2,
      category: "antiacne",
      name: "Gel Sunscreen SPF 55+",
      price: 449,
      offerPrice: 349,
      productname:
        "  Gel Sunscreen for Oily Skin - SPF 55+ and PA+++ | Water Resistant Sunscreen (50 Gms)",
      description: "No whitecast, sweat-resistant SPF",
      image: sunscreen,
      hover: sunscreenhover,
    },
    {
      id: 3,
      category: "antiacne",
      name: "Vitamin C Brightening Face Wash",
      price: 349,
      offerPrice: 262,
      description: "Fade dullness & dark spots",
      productname:
        "Vitamin C Brightening Face Wash | Brighten Skin & Reduce darkspots",
      image: brightface,
      hover: brightfacehover,
    },

    {
      id: 4,
      category: "brightening",
      name: "Salicylic Acid Body Wash",
      price: 279,
      offerPrice: 349,
      productname:
        "Salicylic Acid Body Wash - 1% salicylic acid + 2% glycolic acid | Fights body acne",
      description: " unclogs pores and reduces body acne.",
      image: bodywash,
      hover: bodywashhover,
    },

    {
      id: 5,
      category: "brightening",
      name: "Detan Sunscreen Body Lotion",
      price: 362,
      offerPrice: 449,
      productname:
        "  Detan Sunscreen Body Lotion - 4% Niacinamide +1% KojicAcid Dipalmitate",
      description: "brightens and protects skin tone.",
      image: bodysun,
      hover: bodysunhover,
    },

    {
      id: 6,
      category: "brightening",
      name: "Niacinamide Face Serum",
      price: 462,
      offerPrice: 549,
      productname:
        " Niacinamide Face Serum | Fades Dark Spots, Pigmentation ,Tanning",
      description: "Reduces  tan and dark spots for clear skin.",
      image: clear,
      hover: clearhover,
    },

    {
      id: 7,
      category: "exfoliating",
      name: "Oil Free Moisturizer",
      price: 262,
     offerPrice: 349,
      productname:
        "   Oil-Free Moisturizer for Oily Skin - 3% NMF Complex +  0.2% Panthenol | Non Sticky, Fast absorbing",
      description:
        "Lightweight moisturizer with NMF complex and Panthenol for oily skin.",
      image: moisturizer,
      hover: moisturizerhover,
    },

    {
      id: 8,
      category: "exfoliating",
      name: "Salicylic Acid Face Serum",
      price: 659,
      offerPrice: 799,
      productname:
        " Salicylic Acid Face Serum for Pore Control - 2%  Salicylic Acid + 3% Niacinamide",
      description:
        "2% Salicylic acid serum that minimizes pores and controls oil.",
      image: pore,
      hover: porehover,
    },

    {
      id: 9,
      category: "exfoliating",
      name: "Hyaluronic Acid Face Wash",
      price: 232,
      offerPrice: 299,
      productname:  "Hyaluronic Acid Hydrating Face Wash - 0.5% Amino Acids + 0.1% Hyaluronic acid",
      description:  "Hydrating cleanser with hyaluronic acid that gently cleanses skin.",
      image: hydrate,
      hover: hydratehover,
    },

    {
      id: 10,
      category: "hydrating",
      name: "Niacinamide  Serum",
      price: 632,
      offerPrice: 749,
      productname:
        "Niacinamide Serum - 10% Niacinamide + 0.3% Alpha Arbutin",
      description:
        "Brightening serum that reduces pigmentation and evens skin tone.",
      image: alpha,
      hover: alphahover,
    },

    {
      id: 11,
      category: "hydrating",
      name: "Hyaluronic Acid Serum",
      productname:
        "2% Hyaluronic Acid Serum with 1% Niacinamide | Oil Free Face serum",
      price: 649,
      offerPrice: 799,
      description:
        "Deep hydrating serum with hyaluronic acid that smoothens skin.",
      image: acidserum,
      hover: acidserumhover,
    },

    {
      id: 12,
      category: "hydrating",
      name: "Soothing Cleansing Balm",
      productname:
        "Soothing Cleansing balm - 0.1% bisabolol and 1% Avena sativa Oil (oats oil)",
      price: 649,
      offerPrice: 799,
      description:
        "Makeup removing balm with oat oil that soothes and nourishes skin.",
      image: soothing,
      hover: soothinghover,
    },
  ];

  const data = { bestSellerProducts };

  return<DataContext.Provider value={data}>
    {children}
  </DataContext.Provider>;
}
