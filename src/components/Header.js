import React from 'react'


export default function Header() {
    return (
      <div className="w-full">
        <div className="bg-black text-white uppercase text-center tracking-wider py-2 px-4">
          <p className="text-xs sm:text-sm md:text-lg lg:text-2xl font-medium">
            Flat 25% Off On Combos & Routines
          </p>

          <p className="text-[10px] sm:text-xs md:text-sm lg:text-lg mt-1 opacity-90">
            No Code Required
          </p>
        </div>
      </div>
    );
}
