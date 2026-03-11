import { useContext, useState } from "react";

import heroImage from "../assets/frontpage.webp";
import whatsImage from "../assets/whatsapp.webp";
import logoImg from "../assets/down-arrow.png";

import { DataContext } from "./ProductContext";

export default function ProductPage() {
  const [open, setOpen] = useState("all");

  const { bestSellerProducts } = useContext(DataContext);

  return (
    <div>
      {/* HERO SECTION */}

      <div>
        <img
          src={heroImage}
          alt="Skincare Banner"
          className="w-full min-h-full object-cover"
        />
      </div>

      {/* TITLE */}

      <div>
        <p className="text-center pt-10 pb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">
          Skincare & Haircare Products
        </p>
      </div>

      {/* CATEGORY BUTTONS */}

      <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 space-x-0 md:space-x-5 md:px-10 px-4 font-display">
        <span
          className={`border px-2 py-1 rounded-md capitalize cursor-pointer ${
            open === "all" ? "bg-black text-white" : "border-zinc-400"
          }`}
          onClick={() => setOpen("all")}
        >
          all
        </span>

        <span
          className={`border px-2 py-1 rounded-md capitalize cursor-pointer ${
            open === "antiacne" ? "bg-black text-white" : "border-zinc-400"
          }`}
          onClick={() => setOpen("antiacne")}
        >
          anti-acne
        </span>

        <span
          className={`border px-2 py-1 rounded-md capitalize cursor-pointer ${
            open === "brightening" ? "bg-black text-white" : "border-zinc-400"
          }`}
          onClick={() => setOpen("brightening")}
        >
          brightening
        </span>

        <span
          className={`border px-2 py-1 rounded-md capitalize cursor-pointer ${
            open === "exfoliating" ? "bg-black text-white" : "border-zinc-400"
          }`}
          onClick={() => setOpen("exfoliating")}
        >
          exfoliating
        </span>

        <span
          className={`border px-2 py-1 rounded-md capitalize cursor-pointer ${
            open === "hydrating" ? "bg-black text-white" : "border-zinc-400"
          }`}
          onClick={() => setOpen("hydrating")}
        >
          hydrating
        </span>
      </div>

      {/* WHATSAPP BUTTON */}

      <img
        src={whatsImage}
        alt="whatsapp"
        className="w-16 h-16 fixed bottom-4 right-10 z-[9999] bg-white rounded-full"
      />

      {/* PRODUCT SECTION */}

      <div className="flex flex-col md:flex-row px-10 py-10 gap-8">
        {/* SIDEBAR */}

        <div className="md:w-1/4 w-full flex flex-col gap-12 px-4">
          <div className="border-t border-zinc-500 pt-7 mt-6">
            <div className="flex justify-between items-center">
              <p className="text-xl capitalize tracking-wide">Ingredient</p>

              <img
                src={logoImg}
                alt="logo"
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>

          <div className="border-t border-zinc-500 pt-7 mt-6">
            <div className="flex justify-between items-center">
              <p className="text-xl capitalize tracking-wide">Skin Goal</p>

              <img
                src={logoImg}
                alt="logo"
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}

        <div className="md:w-3/4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {bestSellerProducts
              .filter((product) => open === "all" || product.category === open)
              .map((product) => (
                <div
                  key={product.id}
                  className="relative border shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300 overflow-hidden group bg-white"
                >
                  {/* productimage */}

                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[300px] sm:h-[320px] md:h-[340px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />

                    {/* hoverimage */}
                    <img
                      src={product.hover}
                      alt={product.name}
                      className="w-full h-[300px] sm:h-[320px] md:h-[340px] object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>

                  {/* OFFER  tag*/}

                  <span className="absolute top-0 right-0 text-white bg-black px-3 py-2 text-xs sm:text-sm font-medium">
                    25% off
                  </span>

                  {/* PRODUCT DETAILS */}

                  <div className="px-4 py-4">
                    <p className="text-center text-xs sm:text-sm md:text-base lg:text-xl font-bold  font-display leading-snug line-clamp-2 px-2 py-1">
                      {product.name}
                    </p>

                    <p className="text-center text-sm md:text-base font-medium font-display leading-snug line-clamp-2 py-2 ">
                      {product.productname}
                    </p>

                    {/* PRICE */}

                    <div className="flex items-center justify-center gap-3  text-sm sm:text-base">
                      <p className="line-through text-gray-400">
                        ₹{product.price}
                      </p>

                      <p className="font-semibold text-black">
                        ₹{product.offerPrice}
                      </p>
                    </div>
                    {/* description */}

                    <p className="text-center text-gray-500 text-sm mt-2 capitalize">
                      {product.description}
                    </p>
        
                    {/* button */}
                    <button className="w-full py-2 mt-4 sm:py-3 bg-black text-white uppercase sm:text-sm tracking-wide hover:bg-gray-800 transition">
                  Add to Cart
                </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* CAUTION NOTICE */}

      <div className="text-center px-28 text-black leading-6 tracking-wide py-9">
        <p className="tracking-wider font-bold text-md uppercase">
          Caution Notice
        </p>

        <p>
          Deconstruct is committed to your security and satisfaction. We never
          ask for OTP, password, or personal details via phone.
        </p>

        <p className="font-semibold">
          If you receive such request, do not share any information.
        </p>

        <p>For accurate information, refer to our official website.</p>
      </div>
    </div>
  );
}
