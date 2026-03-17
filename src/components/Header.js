// import React from 'react'
// import { useContext } from "react";
// import { CartContext } from "./CartContext";



export default function Header() {

  // const { cart } =useContext(CartContext)
    return (
      <header className="w-full bg-black text-white">
        <div className="  max-w-[1400px] mx-auto text-center py-3 px-4 font-display">
          <p className=" uppercase  tracking-wider text-xs sm:text-sm md:text-lg lg:text-xl font-semibold">
            Flat 25% Off On Combos & Routines
          </p>

          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base mt-1 opacity-80">
            No Code Required
          </p>

          {/* Cart Count */}
         
        </div>
      </header>
    );
}
