import React, { useState } from 'react';

// Hero and WhatsApp
import heroImage from '../assets/frontpage.webp';
import whatsImage from '../assets/whatsapp.webp';


// antiacne
import vitamin from '../assets/vitaminc.webp'
import vitaminhover from '../assets/hovervitaminc.webp'


import sunscreen from '../assets/sunscreen.webp'
import sunscreenhover from '../assets/sunscreenhover.webp'

import bright from '../assets/brightfacewash.webp'
import brighthover from '../assets/brighthover.webp'


// brightening


import bodywash from '../assets/bodywash.webp'
import bodywashhover from '../assets/bodywashhover.webp'


import bodysun from '../assets/bodysun.webp'
import bodysunhover from '../assets/bodysunhover.webp'

import clear from '../assets/clear.webp'
import clearhover from '../assets/clearhover.webp'



import moisturizer from '../assets/moist.webp'
import moisturizerhover from '../assets/moisturizer.webp'


import pore from '../assets/poreserum.webp'
import porehover from '../assets/porehover.webp'

import hydrate from '../assets/hydrate.webp'
import hydratehover from '../assets/hoverhydrate.webp'




import alphahover from '../assets/alpha.webp'
import alpha from '../assets/alphahover.webp'



import acidserum from '../assets/acidserum.webp'
import acidserumhover from '../assets/acidserumhover.webp'


import soothing from '../assets/soothing.webp'
import soothinghover from '../assets/soothinghover.webp'


// ProductJS logo
import logoImg from '../assets/down-arrow.png';

export default function ProductPage() {
    const [open, setOpen] = useState('');

    return (
        <div>
            {/* Hero Section */}
            <div>
                <img src={heroImage} className="w-full min-h-full object-cover" />
            </div>

            {/* Section Title */}
            <div>
                <p className="text-center pt-10 pb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">
                    Skincare & Haircare Products
                </p>
            </div>

            {/* Category Buttons */}
            <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 space-x-0 md:space-x-5 md:px-10 px-4 font-display">
                <span
                    className="border border-zinc-400 px-2 py-1 rounded-md capitalize cursor-pointer"
                    onClick={() => setOpen('antiacne')}> anti-acne</span>
                <span
                    className="border border-zinc-400 px-2 py-1 rounded-md capitalize cursor-pointer"
                    onClick={() => setOpen('brightening')} >brightening</span>
                <span className="border border-zinc-400 px-2 py-1 rounded-md capitalize cursor-pointer" onClick={() => setOpen('exfoliating')} >exfoliating</span>
                <span className="border border-zinc-400 px-2 py-1 rounded-md capitalize cursor-pointer" onClick={() => setOpen('hydrating')}>hydrating</span>
            </div>


            {/* WhatsApp Button */}
            <img
                src={whatsImage}
                className="w-16  h-16 fixed bottom-4 right-10  z-[9999] bg-white rounded-full"
            />







            {/* productjs */}

            <div><div className="flex flex-col md:flex-row px-10  py-10 gap-8">
                {/* Sidebar */}
                <div className="md:w-1/4 w-full flex flex-col gap-12 px-4">
                    <div className="border-t border-zinc-500 pt-7 mt-6">
                        <div className="flex justify-between items-center">
                            <p className="text-xl capitalize tracking-wide">Ingredient</p>
                            <img src={logoImg} className="h-6 w-6 object-contain" />
                        </div>
                    </div>
                    <div className="border-t border-zinc-500 pt-7 mt-6">
                        <div className="flex justify-between items-center">
                            <p className="text-xl capitalize tracking-wide">Skin Goal</p>
                            <img src={logoImg} className="h-6 w-6 object-contain" />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="md:w-3/4  w-full">
                    {
                        open === '' && (
                            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                                {/* Card 1 */}
                                <div className="relative border shadow-md group">
                                    <img
                                        src={vitamin}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={vitaminhover}
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
                                        src={sunscreen}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={sunscreenhover}
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
                                        src={bright}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={brighthover}
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
                                        src={bodysun}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={bodysunhover}
                                        className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    />
                                    <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">25% off</span>
                                    <div className="px-4 py-2">
                                        <p className="py-2">
                                            Detan Sunscreen Body Lotion - 4% Niacinamide +1% Kojic Acid Dipalmitate

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
                                        src={bodywash}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={bodywashhover}
                                        className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    />
                                    <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                        25% off
                                    </span>
                                    <div className="px-4 py-2">
                                        <p className="py-2">
                                            Salicylic Acid Body Wash - 1% salicylic acid + 2% glycolic acid | Fights body acne
                                            <div className="flex items-center justify-center gap-3">
                                                <p className="line-through text-gray-500">₹349</p>
                                                <p className="text-right">₹279</p>
                                            </div>
                                        </p>
                                        <p className="text-center text-gray-500 capitalize pb-2">unclog pores & fades body acne</p>
                                        <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                {/* Card 6 */}
                                <div className="relative border shadow-md group">
                                    <img
                                        src={moisturizer}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={moisturizerhover}
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
                                        src={pore}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={porehover}
                                        className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    />
                                    <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">25% off</span>
                                    <div className="px-4 py-2">
                                        <p className="py-2">
                                            Salicylic Acid Face Serum for Pore Control - 2% Salicylic Acid + 3% Niacinamide
                                            <div className="flex items-center justify-center gap-3">
                                                <p className="line-through text-gray-500">₹799</p>
                                                <p className="text-right">₹659</p>
                                            </div>
                                        </p>
                                        <p className="text-center text-gray-500 capitalize pb-2">reduce pore appearance</p>
                                        <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                                {/* Card 8 */}
                                <div className="relative border shadow-md group">
                                    <img
                                        src={hydrate}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={hydratehover}
                                        className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    />
                                    <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">25% off</span>
                                    <div className="px-4 py-2">
                                        <p className="py-2">
                                            Hyaluronic Acid Hydrating Face Wash - 0.5% Amino Acids + 0.1% Hyaluronic acid

                                            <div className="flex items-center justify-center gap-3">
                                                <p className="line-through text-gray-500">₹299</p>
                                                <p className="text-right">₹232</p>
                                            </div>
                                        </p>
                                        <p className="text-center text-gray-500 capitalize pb-2"> Hydrates & Softens, Cleanses Gently</p>
                                        <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>


                                {/* card 9 */}
                                <div className="relative border shadow-md group">
                                    <img
                                        src={clear}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={clearhover}
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
                                        <p className="text-center text-gray-500 capitalize pb-2">Fade Dullness & Dark Spot</p>
                                        <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>


                                {/* card 10 */}

                                <div className="relative border shadow-md group">
                                    <img
                                        src={alpha}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={alphahover}
                                        className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    />
                                    <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                        25% off
                                    </span>
                                    <div className="px-4 py-2">
                                        <p className="py-2">
                                            Brightening Niacinamide Serum - 10% Niacinamide + 0.3% Alpha Arbutin


                                            <div className="flex items-center justify-center gap-3">
                                                <p className="line-through text-gray-500">₹749</p>
                                                <p className="text-right">₹632</p>
                                            </div>
                                        </p>
                                        <p className="text-center text-gray-500 capitalize pb-2">reduce Pigmentation & evens skin tone</p>
                                        <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>


                                {/* card 11 */}
                                <div className="relative border shadow-md group">
                                    <img
                                        src={acidserum}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={acidserumhover}
                                        className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    />
                                    <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                        25% off
                                    </span>
                                    <div className="px-4 py-2">
                                        <p className="py-2">
                                            2% Hyaluronic Acid Serum with 1% Niacinamide | Oil Free  Face serum


                                            <div className="flex items-center justify-center gap-3">
                                                <p className="line-through text-gray-500">₹799</p>
                                                <p className="text-right">₹649</p>
                                            </div>
                                        </p>
                                        <p className="text-center text-gray-500 capitalize pb-2">soothes,hydrates and smoothens</p>
                                        <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>



                                {/* card 12 */}

                                <div className="relative border shadow-md group">
                                    <img
                                        src={soothing}
                                        className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <img
                                        src={soothinghover}
                                        className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    />
                                    <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                        25% off
                                    </span>
                                    <div className="px-4 py-2">
                                        <p className="py-2">
                                            Soothing Cleansing balm - 0.1% bisabolol and 1% Avena sativa Oil (oats oil)

                                            <div className="flex items-center justify-center gap-3">
                                                <p className="line-through text-gray-500">₹799</p>
                                                <p className="text-right">₹649</p>
                                            </div>
                                        </p>
                                        <p className="text-center text-gray-500 capitalize pb-2">removes  makeup & soothes redness</p>
                                        <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>




                            </div>
                        )
                    }






                    {/* Anti-Acne Section */}
                    {open === 'antiacne' && (
                        <div className="  grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="relative border shadow-md group">
                                <img
                                    src={vitamin}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={vitaminhover}
                                    className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                                <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                    25% off
                                </span>
                                <div className="px-4 py-2">
                                    <p className="py-2">
                                        Vitamin C Serum For Face - 10% Vitamin C + 0.5% Ferulic Acid | Non-Irritating, Non-Sticky
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
                                    src={sunscreen}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={sunscreenhover}
                                    className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                                <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                    25% off
                                </span>
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
                                    src={bright}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={brighthover}
                                    className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                                <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                    25% off
                                </span>
                                <div className="px-4 py-2">
                                    <p className="py-2">
                                        Vitamin C Brightening Face Wash – 0.5% Vitamin C + 2% Niacinamide | Brightens Dull Skin & Reduce dark spots
                                        <div className="flex items-center justify-center gap-3">
                                            <p className="line-through text-gray-500">₹349</p>
                                            <p className="text-right">₹262</p>
                                        </div>
                                    </p>
                                    <p className="text-center text-gray-500 capitalize pb-2">Fade Dullness & Dark Spot</p>
                                    <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Brightening Section */}
                    {open === 'brightening' && (
                        <div className="grid md:grid-cols-3 grid-cols-1  gap-8">
                            {/* Card 1 */}
                            <div className="relative border shadow-md group">
                                <img
                                    src={bodywash}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0" />
                                <img
                                    src={bodywashhover}
                                    className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"/>
                                <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                    25% off
                                </span>
                                <div className="px-4 py-2">
                                    <p className="py-2">
                                        Salicylic Acid Body Wash - 1% salicylic acid + 2% glycolic acid | Fights body acne
                                        <div className="flex items-center justify-center gap-3">
                                            <p className="line-through text-gray-500">₹349</p>
                                            <p className="text-right">₹279</p>
                                        </div>
                                    </p>
                                    <p className="text-center text-gray-500 capitalize pb-2">unclog pores & fades body acne</p>
                                    <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative border shadow-md group">
                                <img
                                    src={bodysun}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={bodysunhover}
                                    className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                                <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                    25% off
                                </span>
                                <div className="px-4 py-2">
                                    <p className="py-2">
                                        Detan Sunscreen Body Lotion - 4% Niacinamide +1% Kojic Acid Dipalmitate
                                        <div className="flex items-center justify-center gap-3">
                                            <p className="line-through text-gray-500">₹449</p>
                                            <p className="text-right">₹362</p>
                                        </div>
                                    </p>
                                    <p className="text-center text-gray-500 capitalize pb-2">Fades Dark Spots & Brightens Body Skin</p>
                                    <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="relative border shadow-md group">
                                <img
                                    src={clear}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={clearhover}
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
                                    <p className="text-center text-gray-500 capitalize pb-2">Fade Dullness & Dark Spot</p>
                                    <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {open === 'exfoliating' && (
                        <div className="grid md:grid-cols-3 grid-cols-1  gap-8">

                            {/* card 1 */}
                            <div className="relative border shadow-md group">
                                <img
                                    src={moisturizer}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={moisturizerhover}
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



                            {/* card 2 */}
                            <div className="relative border shadow-md group">
                                <img
                                    src={pore}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={porehover}
                                    className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                                <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">25% off</span>
                                <div className="px-4 py-2">
                                    <p className="py-2">
                                        Salicylic Acid Face Serum for Pore Control - 2% Salicylic Acid + 3% Niacinamide
                                        <div className="flex items-center justify-center gap-3">
                                            <p className="line-through text-gray-500">₹799</p>
                                            <p className="text-right">₹659</p>
                                        </div>
                                    </p>
                                    <p className="text-center text-gray-500 capitalize pb-2">reduce pore appearance</p>
                                    <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="relative border shadow-md group">
                                <img
                                    src={hydrate}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={hydratehover}
                                    className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                                <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">25% off</span>
                                <div className="px-4 py-2">
                                    <p className="py-2">
                                        Hyaluronic Acid Hydrating Face Wash - 0.5% Amino Acids + 0.1% Hyaluronic acid

                                        <div className="flex items-center justify-center gap-3">
                                            <p className="line-through text-gray-500">₹299</p>
                                            <p className="text-right">₹232</p>
                                        </div>
                                    </p>
                                    <p className="text-center text-gray-500 capitalize pb-2"> Hydrates & Softens, Cleanses Gently</p>
                                    <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>



                        </div>
                    )}

                    {open === 'hydrating' && (


                        <div className="grid md:grid-cols-3 grid-cols-1  gap-8">

                            <div className="relative border shadow-md group">
                                <img
                                    src={alpha}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={alphahover}
                                    className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                                <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                    25% off
                                </span>
                                <div className="px-4 py-2">
                                    <p className="py-2">
                                        Brightening Niacinamide Serum - 10% Niacinamide + 0.3% Alpha Arbutin


                                        <div className="flex items-center justify-center gap-3">
                                            <p className="line-through text-gray-500">₹749</p>
                                            <p className="text-right">₹632</p>
                                        </div>
                                    </p>
                                    <p className="text-center text-gray-500 capitalize pb-2">reduce Pigmentation & evens skin tone</p>
                                    <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>


                            {/* card 11 */}
                            <div className="relative border shadow-md group">
                                <img
                                    src={acidserum}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={acidserumhover}
                                    className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                                <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                    25% off
                                </span>
                                <div className="px-4 py-2">
                                    <p className="py-2">
                                        2% Hyaluronic Acid Serum with 1% Niacinamide | Oil Free  Face serum


                                        <div className="flex items-center justify-center gap-3">
                                            <p className="line-through text-gray-500">₹799</p>
                                            <p className="text-right">₹649</p>
                                        </div>
                                    </p>
                                    <p className="text-center text-gray-500 capitalize pb-2">soothes,hydrates and smoothens</p>
                                    <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>



                            {/* card 12 */}

                            <div className="relative border shadow-md group">
                                <img
                                    src={soothing}
                                    className="w-full h-[380px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={soothinghover}
                                    className="w-full h-[380px] object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />
                                <span className="absolute top-0 right-0 text-white bg-black px-6 py-3 text-md font-medium">
                                    25% off
                                </span>
                                <div className="px-4 py-2">
                                    <p className="py-2">
                                        Soothing Cleansing balm - 0.1% bisabolol and 1% Avena sativa Oil (oats oil)

                                        <div className="flex items-center justify-center gap-3">
                                            <p className="line-through text-gray-500">₹799</p>
                                            <p className="text-right">₹649</p>
                                        </div>
                                    </p>
                                    <p className="text-center text-gray-500 capitalize pb-2">removes  makeup & soothes redness</p>
                                    <button className="py-3 text-white bg-black w-full uppercase text-center hover:bg-gray-800 active:bg-white focus:outline-none">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        </div>




                    )}




                </div>



            </div>

                <div className='text-center px-28 text-black leading-4 md:leading-[40px] tracking-normal md:tracking-wide py-9 '>
                    <p className='tracking-wider font-bold text-md uppercase '>Caution Notice</p>
                    <p >
                        Deconstruct is committed to your security and satisfaction. We never ask for your OTP, password, or personal details via phone or unsolicited communication.</p>
                    <p className='font-semibold'>If you receive such a request, do not share any information. We also do not require payments for contests, lucky draws, or promotions outside our official platform.</p>
                    <p>For accurate information, refer to our official website or verified social media. This message is for your safety and public interest.</p>
                </div>
            </div>


        </div>
    )
}
