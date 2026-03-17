import { useState } from "react";
import image from "../assets/logo.webp";
import logo from "../assets/search.png";
import login from "../assets/login.png";
import cart from "../assets/shopping-cart.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // const handleNavigate = (path) => {
  //   navigate(path);
  //   setOpen(false);
  // };

const handleSearch = () => {
  if (searchTerm.trim() !== "") {
    navigate(`/shop?search=${encodeURIComponent(searchTerm.toLowerCase())}`);
    setShowSearch(false);
  }
};

  return (
    <header className="w-full border-b border-gray-300 bg-white relative z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <img
          src={image}
          className="w-36 sm:w-44 cursor-pointer"
          alt="logo"
          onClick={() => navigate("/")}
        />

        <div className="hidden md:flex items-center space-x-10 uppercase font-display">
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

        <div className="hidden md:flex space-x-6">
          <img
            src={logo}
            alt="logo"
            className="h-6 w-6 cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />
          <img src={login} alt="login" className="h-6 w-6 cursor-pointer" />
          <img src={cart} alt="cart" className="h-6 w-6 cursor-pointer" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>

      {/* Search */}
      {showSearch && (
        <div className="flex justify-center py-4 border-t">
          <div className="flex items-center border rounded-full px-4 py-2 w-[250px] sm:w-[400px] font-display">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="flex-1 outline-none"
            />
            <img
              src={logo}
              alt="logo1"
              className="w-5 h-5 cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        </div>
      )}
    </header>
  );
}
