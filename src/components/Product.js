import React from 'react'
import logo from '../assets/down-arrow.png'

import image from '../assets/vitaminc.webp'

import hoverimage from '../assets/hovervitaminc.webp'
import image1 from '../assets/sun.webp'
import hoverimage1 from '../assets/sunscreen.webp'
import image2 from '../assets/moisturizer.webp'
import hoverimage2 from '../assets/moist.webp'


import image3 from '../assets/antiacne.webp'
import hoverimage3 from '../assets/antihover.webp'


import image4 from '../assets/hydrate.webp'
import hoverimage4 from '../assets/hoverhydrate.webp'


import image5 from '../assets/antiface.webp'
import hoverimage5 from '../assets/antifacehover.webp'

import image7 from '../assets/exfoliate.webp'
import hoverimage7 from '../assets/exfoliatehover.webp'



import image8 from '../assets/exfoliate1.webp'
import hoverimage8 from '../assets/hoverexfoliate1.webp'


import image9 from '../assets/clearhover.webp'
import hoverimage9 from '../assets/clear.webp'




export default function () {


    return (
        <div><div className="flex  px-10  py-10 gap-8">
            {/* Sidebar */}
            <div className="w-1/4 flex flex-col gap-12 px-4">
                <div className="border-t border-zinc-500 pt-7 mt-6">
                    <div className="flex justify-between items-center">
                        <p className="text-xl capitalize tracking-wide">Ingredient</p>
                        <img src={logo} className="h-6 w-6 object-contain" />
                    </div>
                </div>
                <div className="border-t border-zinc-500 pt-7 mt-6">
                    <div className="flex justify-between items-center">
                        <p className="text-xl capitalize tracking-wide">Skin Goal</p>
                        <img src={logo} className="h-6 w-6 object-contain" />
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="w-3/4 grid grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="relative border shadow-md group">
                    <img
                        src={image}
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

                {/* Row 2: Card 4 */}
                <div className="relative border shadow-md group">
                    <img
                        src={image3}
                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                        src={hoverimage3}
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

                {/* Card 5 */}
                <div className="relative border shadow-md group">
                    <img
                        src={image4}
                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                        src={hoverimage4}
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

                {/* Card 6 */}
                <div className="relative border shadow-md group">
                    <img
                        src={image2}
                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                        src={hoverimage2}
                        className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    />
                    <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">25% off</span>
                    <div className="px-4 py-2">
                        <p className="py-2">
                            Oil-Free Moisturizer for Oily Skin - 3% NMF Complex + 0.2% Panthenol | Non Sticky, Fast absorbing
                            <div className="flex items-center justify-center gap-3">
                                <p className="line-through text-gray-500">₹349</p>
                                <p className="text-right">₹262</p>
                            </div>
                        </p>
                        <p className="text-center text-gray-500 capitalize pb-2">hydrates and softens skin</p>
                        <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                            Add to Cart
                        </button>
                    </div>
                </div>












                {/* card 7 */}
                <div className="relative border shadow-md group">
                    <img
                        src={image7}
                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                        src={hoverimage7}
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

                {/* Card 8 */}
                <div className="relative border shadow-md group">
                    <img
                        src={image8}
                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                        src={hoverimage8}
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

                {/* Card 9 */}
                <div className="relative border shadow-md group">
                    <img
                        src={image9}
                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                        src={hoverimage9}
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

                {/* Row 2: Card 10 */}
                <div className="relative border shadow-md group">
                    <img
                        src={image3}
                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                        src={hoverimage3}
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

                {/* Card 11 */}
                <div className="relative border shadow-md group">
                    <img
                        src={image4}
                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                        src={hoverimage4}
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

                {/* Card 12 */}
                <div className="relative border shadow-md group">
                    <img
                        src={image2}
                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                        src={hoverimage2}
                        className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    />
                    <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">25% off</span>
                    <div className="px-4 py-2">
                        <p className="py-2">
                            Oil-Free Moisturizer for Oily Skin - 3% NMF Complex + 0.2% Panthenol | Non Sticky, Fast absorbing
                            <div className="flex items-center justify-center gap-3">
                                <p className="line-through text-gray-500">₹349</p>
                                <p className="text-right">₹262</p>
                            </div>
                        </p>
                        <p className="text-center text-gray-500 capitalize pb-2">hydrates and softens skin</p>
                        <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>




        </div>
            
            <div className='text-center px-28 text-black leading-[40px] tracking-wide py-9 '>
                <p className='tracking-wider font-bold text-md uppercase '>Caution Notice</p>
                <p>
                    Deconstruct is committed to your security and satisfaction. We never ask for your OTP, password, or personal details via phone or unsolicited communication.</p>
                <p className='font-semibold'>If you receive such a request, do not share any information. We also do not require payments for contests, lucky draws, or promotions outside our official platform.</p>
                <p>For accurate information, refer to our official website or verified social media. This message is for your safety and public interest.</p>
            </div>
</div>
            )
}
