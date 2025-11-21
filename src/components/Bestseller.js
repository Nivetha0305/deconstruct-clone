import React from 'react'
import image from '../assets/frontimage.webp'
import image3 from '../assets/vitaminc.webp'
import hoverimage from '../assets/hovervitaminc.webp'
import image1 from '../assets/sun.webp'
import hoverimage1 from '../assets/sunscreen.webp'

import image5 from '../assets/antiface.webp'
import hoverimage5 from '../assets/antifacehover.webp'

export default function Bestseller() {
  return (
      <div>
          <div>
              <img src={image} className='w-full min-h-full object-cover'/>
      </div>
      <div>
        <p className='text-center capitalize pt-10 text-4xl pb-10 font-display'>best sellers</p>


      </div>


      {/* Product Grid */}
      <div className="px-20 grid grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="relative border shadow-md group">
          <img
            src={image3}
            className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={hoverimage}
            className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
          <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">25% off</span>
          <div className="px-4 py-2">
            <p className="py-2">
              Vitamin C Serum For Face - 10% Vitamin C + 0.5 % Ferulic Acid | Non-Irritating , Non-Sticky
              <div className="flex items-center justify-center gap-3">
                <p className="line-through text-gray-500">₹599</p>
                <p className="text-right">₹799</p>
              </div>
            </p>
            <p className="text-center text-gray-500 capitalize pb-2">brightens and evens skin tone</p>
            <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative border shadow-md group">
          <img
            src={image1}
            className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={hoverimage1}
            className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
          <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">25% off</span>
          <div className="px-4 py-2">
            <p className="py-2">
              Gel Sunscreen for Oily Skin - SPF 55+ and PA+++ | Water Resistant Sunscreen (50 Gms)
              <div className="flex items-center justify-center gap-3">
                <p className="line-through text-gray-500">₹349</p>
                <p className="text-right">₹262</p>
              </div>
            </p>
            <p className="text-center text-gray-500 capitalize pb-2">no whitecast, sweat-resistant SPF</p>
            <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative border shadow-md group">
          <img
            src={image5}
            className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={hoverimage5}
            className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
          <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">25% off</span>
          <div className="px-4 py-2">
            <p className="py-2">

              Vitamin C Brightening Face Wash – 0.5% Vitamin C + 2% Niacinamide | Brightens Dull Skin & Reduce dark spots
              <div className="flex items-center justify-center gap-3">
                <p className="line-through text-gray-500">₹349</p>
                <p className="text-right">₹262</p>
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
  )
}
