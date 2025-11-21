import React from 'react'
import image from '../assets/frontpage.webp'

import whatsimage from '../assets/whatsapp.webp'
import { useNavigate } from 'react-router-dom'
export default function () {

    const navigate=useNavigate()
    return (
        <div>
            <div>
                <img src={image} className='w-full min-h-full  md:w-full lg:w-full object-cover' />
            </div>

            <div>
                <p className='text-center pt-10  pb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black '>Skincare & Haircare Products</p>
            </div>

            <div className="space-x-6 px-16 pb-7 font-display">
                <span onClick={()=>navigate('/antiacne')} className="border border-zinc-400 px-2 py-1 rounded-md capitalize cursor-pointer"> anti acne</span>
                <span onClick={()=>navigate('/antiaging')} className="border border-zinc-400 px-2 py-1 rounded-md capitalize"> anti aging</span>
                <span className="border border-zinc-400 px-2 py-1 rounded-md capitalize"> brightening</span>
                <span className="border border-zinc-400 px-2 py-1 rounded-md capitalize"> exfoliating</span>
                <span className="border border-zinc-400 px-2 py-1 rounded-md capitalize"> hydrating</span>
            </div>
            <img src={whatsimage} className="w-16 h-14 fixed bottom-4 right-10 z-[9999]  bg-white  rounded-full" />




        </div>
    )
}
