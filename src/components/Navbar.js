import  { useState } from "react";
import image from "../assets/logo.webp";
import logo from "../assets/search.png";
import login from "../assets/login.png";
import cart from "../assets/shopping-cart.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="w-full border-b border-gray-300 bg-white relative z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        
        <img src={image}
          className="w-36 sm:w-44  object-contain cursor-pointer"
          alt= "logo"
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu  hidden on mobile */}
        <div className="hidden md:flex items-center space-x-10 font-display text-md uppercase">
          <p onClick={() => navigate("/shop")} className="cursor-pointer">
            shop
          </p>
          <p
            onClick={() => navigate("/bestsellers")}
            className="cursor-pointer"
          >
            bestsellers
          </p>
          <p onClick={() => navigate("/offers")} className="cursor-pointer">
            offers
          </p>
          <p onClick={() => navigate("/blog")} className="cursor-pointer">
            blogs
          </p>
          <p onClick={() => navigate("/track")} className="cursor-pointer">
            track your order
          </p>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-6">
          <img src={logo} className="h-6 w-6 cursor-pointer" alt="search" />
          <img src={login} className="h-6 w-6 cursor-pointer" alt="login" />
          <img src={cart} className="h-6 w-6 cursor-pointer" alt="cart" />
        </div>

        {/* Hamburger (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <div className="space-y-1">
              <span
                className={`block w-6 h-0.5 bg-black transition ${open ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-black transition ${open ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-black transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer  */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg transform transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 font-display uppercase text-md">
          <button className="self-end text-xl" onClick={() => setOpen(false)}>
            ✕
          </button>

          <p onClick={() => handleNavigate("/shop")} className="cursor-pointer">
            shop
          </p>
          <p
            onClick={() => handleNavigate("/bestsellers")}
            className="cursor-pointer"
          >
            bestsellers
          </p>
          <p
            onClick={() => handleNavigate("/offers")}
            className="cursor-pointer"
          >
            offers
          </p>
          <p onClick={() => handleNavigate("/blog")} className="cursor-pointer">
            blogs
          </p>
          <p
            onClick={() => handleNavigate("/track")}
            className="cursor-pointer"
          >
            track your order
          </p>

          <div className="flex space-x-6 pt-4 border-t">
            <img src={logo} className="h-6 w-6 cursor-pointer" alt="search" />
            <img src={login} className="h-6 w-6 cursor-pointer" alt="login" />
            <img src={cart} className="h-6 w-6 cursor-pointer" alt="cart" />
          </div>
        </div>
      </div>
    </header>
  );
}
