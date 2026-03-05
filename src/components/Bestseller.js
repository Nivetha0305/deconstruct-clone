import { useContext } from "react";
import { DataContext } from "./ProductContext";
import image from "../assets/frontimage.webp";

export default function Bestseller() {
  const { bestSellerProducts } = useContext(DataContext);

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full">
        <img
          src={image}
          alt="banner"
          className="w-full h-[180px] sm:h-[260px] md:h-[360px] lg:h-[450px] "
        />
      </div>

      {/* Title */}
      <div className="py-10">
        <p className="text-center capitalize  text-2xl sm:text-3xl md:text-4xl font-display font-normal tracking-wide">
          Best Sellers
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bestSellerProducts.map((product) => (
            <div
              key={product.id}
              className="relative border shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden group bg-white"
            >
              {/* productimage */}
              <div className="relative overflow-hidden">
                {/* Main Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] sm:h-[320px] md:h-[340px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="w-full h-[300px] sm:h-[320px] md:h-[340px] object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Offer Tag */}
              <span className="absolute top-0 right-0  text-white bg-black px-3 py-2 text-xs sm:text-sm font-medium">
                25% off
              </span>

              {/* Product Details */}
              <div className="px-4 py-4">
                {/* Product Name */}
                <p className="text-center text-xs sm:text-sm md:text-base lg:text-xl font-bold  font-display leading-snug line-clamp-2 px-2 py-1">
                  {product.name}
                </p>
                <p className="text-center text-sm md:text-base font-medium font-display leading-snug line-clamp-2 py-2 ">
                  {product.productname}
                </p>

                {/* Price */}
                <div className="flex items-center justify-center gap-3  text-sm sm:text-base">
                  <p className="line-through text-gray-400">₹{product.price}</p>
                  <p className="font-semibold text-black">
                    ₹{product.offerPrice}
                  </p>
                </div>

                {/* Description */}
                <p className="text-center text-gray-500 text-xs sm:text-sm mt-2 capitalize">
                  {product.description}
                </p>

                {/* Button */}
                <button className="w-full py-2 mt-4 sm:py-3 bg-black text-white uppercase sm:text-sm tracking-wide hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
