// import React from 'react'
import logo from '../assets/down-arrow.png'
import frontimage from '../assets/frontpage.webp'

import { DataContext } from './ProductContext';
import { useContext } from 'react';

export default function Offers() {

  const { bestSellerProducts } = useContext(DataContext);

  

  return (
    <div>
      <div>
        <img
          src={frontimage}
          alt="frontbanner"
          className="w-full min-h-full object-cover"
        />
      </div>
      <div>
        <p className="text-center font-display capitalize pt-10 text-4xl pb-10 md:text-black text-red-700">
          offers
        </p>
      </div>
      <div className="flex flex-col md:flex-row  px-10  py-10 gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4 w-full flex flex-col gap-12 px-4">
          <div className="border-t border-zinc-500 pt-7 mt-6">
            <div className="flex justify-between items-center">
              <p className="text-xl capitalize tracking-wide">Ingredient</p>
              <img src={logo} alt="logo" className="h-6 w-6 object-contain" />
            </div>
          </div>
          <div className="border-t border-zinc-500 pt-7 mt-6">
            <div className="flex justify-between items-center">
              <p className="text-xl capitalize tracking-wide">Skin Goal</p>
              <img
                src={logo}
                alt="skin logo"
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8">
          {bestSellerProducts
            .filter(
              (product) =>
                product.category === "hydrating" ||
                product.category === "brightening",
            )
            .map((product) => (
              <div
                key={product.id}
                className="relative border shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300 overflow-hidden group bg-white"
              >
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
                  <button
                    className="w-full py-2 mt-4 sm:py-3 bg-black text-white uppercase sm:text-sm tracking-wide hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="text-center px-28 text-black leading-[40px] tracking-wide py-9 ">
        <p className="tracking-wider font-bold text-md uppercase ">
          Caution Notice
        </p>
        <p>
          Deconstruct is committed to your security and satisfaction. We never
          ask for your OTP, password, or personal details via phone or
          unsolicited communication.
        </p>
        <p className="font-semibold">
          If you receive such a request, do not share any information. We also
          do not require payments for contests, lucky draws, or promotions
          outside our official platform.
        </p>
        <p>
          For accurate information, refer to our official website or verified
          social media. This message is for your safety and public interest.
        </p>
      </div>
    </div>
  );
}
