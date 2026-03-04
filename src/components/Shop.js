// import React from 'react'
import image from '../assets/frontimage.webp'
import image1 from '../assets/down-arrow.png'


import bodywash from '../assets/bodywash.webp'
import bodywashhover from '../assets/bodywashhover.webp'


import bodysun from '../assets/bodysun.webp'
import bodysunhover from '../assets/bodysunhover.webp'

import clear from '../assets/clear.webp'
import clearhover from '../assets/clearhover.webp'



export default function Shop() {
  return (
    <div>
      {/* banner */}
      <div>
        <img
          src={image}
          alt="shopbanner"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover"
        />
      </div>

      {/* title */}
      <div className="text-center py-10">
        <p className="capitalize  text-3xl sm:text-4xl  font-display">
          {" "}
          skincare & bodycare
        </p>
      </div>

      {/* main section */}
      <div className="flex flex-col lg:flex-row px-6 py-10 lg:px-10 lg:py-10 gap-10">
        {/* sidebar */}
        <div className="w-full lg:w-1/4 flex flex-col  gap-8 ">
          <div className="border-t border-zinc-500 pt-6">
            <div className="flex justify-between items-center">
              <p className="text-lg lg:text-xl capitalize tracking-wide">
                Ingredient
              </p>
              <img src={image1} alt="dropdown" className="h-5 w-5" />
            </div>
          </div>
          <div className="border-t border-zinc-500 pt-6">
            <div className="flex justify-between items-center">
              <p className=" text-lg sm:text-xl capitalize tracking-wide">
                Skin Goal
              </p>
              <img src={image1} alt="dropdown" className="h-5 w-5" />
            </div>
          </div>
        </div>


        {/* card 7 */}

        {/* product grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* product card */}
          <div className="relative border shadow-md group overflow-hidden">
            <img
              src={bodywash}
              alt="bodywash"
              className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src={bodywashhover}
              alt="bodywashhover"
              className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            <span className="absolute top-0 right-0 text-white bg-black px-4 py-2 text-sm font-medium">
              25% off
            </span>
            <div className="px-4 py-4 text-center">
              <p className="mb-3">
                Salicylic Acid Body Wash - 1% salicylic acid + 2% glycolic acid
                | Fights body acne
                <div className="flex mb-3 justify-center gap-3">
                  <p className="line-through text-gray-500">₹349</p>
                  <p>₹279</p>
                </div>
              </p>
              <p className=" text-gray-500 capitalize  text-sm mb-4">
                unclog pores &fades body acne
              </p>
              <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>

          



          {/* card 8 */}
          {/* product card */}
          <div className="relative border shadow-md group overflow-hidden">
            <img
              src={bodysun}
              alt="bodysun"
              className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
            />

            <img
              src={bodysunhover}
              alt="bodysunhover"
              className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />

            <span className="absolute top-0 right-0 text-white bg-black px-4 py-2 text-sm font-medium">
              25% off
            </span>

            <div className="px-4 py-4 text-center">
              <p className="mb-3">
                Detan Sunscreen Body Lotion - 4% Niacinamide + 1% Kojic Acid
                Dipalmitate
              </p>

              {/* price */}
              <div className="flex mb-3 justify-center gap-3">
                <p className="line-through text-gray-500">₹449</p>
                <p>₹362</p>
              </div>

              <p className="text-gray-500 capitalize text-sm mb-4">
                Fades Dark Spots & Brightens Body Skin
              </p>

              <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Card 9 */}
          <div className="relative border shadow-md group">
            <img
              src={clear}
              alt="clear"
              className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src={clearhover}
              alt="clearhover"
              className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
              25% off
            </span>
            <div className="px-4 py-2">
              <p className="py-2">
                Niacinamide Face Serum | Fades Dark Spots, Pigmentation, Tanning
                <div className="flex items-center justify-center gap-3">
                  <p className="line-through text-gray-500">₹549</p>
                  <p className="text-right">₹462</p>
                </div>
              </p>
              <p className="text-center text-gray-500 capitalize pb-2">
                Fade Dullness & Dark Spot
              </p>
              <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* INFORMATION SECTIONS */}
        <div className=" py-20">
          {/* Section 1 */}
          <div className="py-20 text-center">
            <p className="uppercase text-xl tracking-widest font-display">
              deconstructing
            </p>
            <p className="capitalize pt-4 text-3xl font-display">
              Skin Information
            </p>

            <div className="flex justify-center pb-10">
              <div className="w-24 h-[1px] bg-black mt-2"></div>
            </div>

            <button className="text-center text-sm tracking-wide uppercase border border-black px-20 py-4 mt-10    hover:bg-black hover:text-white hover:cursor-pointer">
              view all
            </button>
          </div>

          {/* Section 2 */}
          <div className="pt-20 text-center">
            <p className="uppercase text-xl tracking-widest font-display">
              deconstructing
            </p>
            <p className="capitalize pt-4 text-3xl font-display">Ingredients</p>

            <div className="flex justify-center pb-10">
              <div className="w-24 h-[1px] bg-black mt-2"></div>
            </div>

            <button className="text-center text-sm tracking-wide uppercase border border-black px-20 py-3 mt-10 hover:bg-black hover:text-white hover:cursor-pointer">
              view all
            </button>
          </div>
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
