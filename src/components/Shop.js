import image from "../assets/frontimage.webp";
import image1 from "../assets/down-arrow.png";

import { useContext, useEffect, useState } from "react";
import { DataContext } from "../components/ProductContext";
import { useLocation } from "react-router-dom";

export default function Shop() {
  const { bestSellerProducts } = useContext(DataContext);
  const location = useLocation();

  const [filteredProducts, setFilteredProducts] = useState([]);

  // get search value from URL
  const searchValue = new URLSearchParams(location.search).get("search") || "";
useEffect(() => {
  console.log("Products:", bestSellerProducts);
  console.log("Search Value:", searchValue);

  if (!searchValue) {
    setFilteredProducts(bestSellerProducts);
    return;
  }

  const search = searchValue.toLowerCase();

  const result = bestSellerProducts.filter((product) => {
    return (
      product.name?.toLowerCase().includes(search) ||
      product.productname?.toLowerCase().includes(search)
    );
  });

  console.log("Filtered Result:", result);

  setFilteredProducts(result);
}, [searchValue, bestSellerProducts]);
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
        <p className="capitalize text-3xl sm:text-4xl font-display">
          skincare & bodycare
        </p>
      </div>

      {/* main section */}
      <div className="flex flex-col lg:flex-row px-6 py-10 lg:px-10 gap-10">
        {/* sidebar */}
        <div className="w-full lg:w-1/4 flex flex-col gap-8">
          <div className="border-t border-zinc-500 pt-6">
            <div className="flex justify-between items-center">
              <p className="text-lg lg:text-xl capitalize">Ingredient</p>
              <img src={image1} alt="dropdown" className="h-5 w-5" />
            </div>
          </div>

          <div className="border-t border-zinc-500 pt-6">
            <div className="flex justify-between items-center">
              <p className="text-lg lg:text-xl capitalize">Skin Goal</p>
              <img src={image1} alt="dropdown" className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* product grid */}
        <div className="lg:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.length === 0 ? (
            <p className="text-center col-span-full">No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative border shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300 overflow-hidden group bg-white"
              >
                {/* image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />

                  <img
                    src={product.hover}
                    alt={product.name}
                    className="w-full h-[300px] object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                {/* offer */}
                <span className="absolute top-0 right-0 text-white bg-black px-3 py-2 text-xs">
                  25% off
                </span>

                {/* details */}
                <div className="px-4 py-4">
                  <p className="text-center text-base font-bold line-clamp-2">
                    {product.name}
                  </p>

                  <p className="text-center text-sm line-clamp-2 py-2">
                    {product.productname}
                  </p>

                  {/* price */}
                  <div className="flex justify-center gap-3">
                    <p className="line-through text-gray-400">
                      ₹{product.price}
                    </p>
                    <p className="font-semibold">₹{product.offerPrice}</p>
                  </div>

                  {/* description */}
                  <p className="text-center text-gray-500 text-sm mt-2">
                    {product.description}
                  </p>

                  {/* button */}
                  <button className="w-full py-2 mt-4 bg-black text-white uppercase hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* info sections */}
      <div className="py-20 text-center">
        <p className="uppercase text-xl tracking-widest">deconstructing</p>
        <p className="capitalize pt-4 text-3xl">Skin Information</p>
      </div>

      {/* caution */}
      <div className="text-center px-6 md:px-28 py-10">
        <p className="font-bold uppercase">Caution Notice</p>
        <p>We never ask for OTP, password, or personal details.</p>
      </div>
    </div>
  );
}
