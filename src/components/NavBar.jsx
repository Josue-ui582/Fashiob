import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center relative">
      
      <div>
        <img src="logo.png" alt="Logo Fashion" width="100" height="100" />
      </div>

      <div className="lg:hidden">
        {isOpen ? (
          <FiX className="text-3xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      <ul
        className={`lg:flex overflow-hidden flex-col lg:flex-row lg:gap-6 items-start lg:items-center absolute lg:static top-16 right-4 bg-white shadow-lg lg:shadow-none rounded-md overflow-hidden transition-all duration-300 z-100 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="font-medium font-poppins p-2">
          <Link to="/" onClick={toggleMenu}>Catalogue</Link>
        </li>
        <li className="font-medium font-poppins p-2">
          <Link to="/" onClick={toggleMenu}>Fashion</Link>
        </li>
        <li className="font-medium font-poppins p-2">
          <Link to="/" onClick={toggleMenu}>Favorite</Link>
        </li>
        <li className="font-medium font-poppins p-2">
          <Link to="/" onClick={toggleMenu}>Lifestyle</Link>
        </li>
        <li className="font-medium bg-black text-white rounded p-2 m-2 border border-solid border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black">
          <Link to="/" onClick={toggleMenu}>Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;