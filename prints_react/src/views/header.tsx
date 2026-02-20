import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import type { MenuItem } from "../lib/types";
import { FaUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FiMenu, FiX } from "react-icons/fi"; // Ajouté

const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "All Products", link: "/all-products" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Account", link: "/account", icon: <FaUser size={20} /> },
];


export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // On garde le header en pleine largeur pour le fond blanc et l'ombre
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm px-6">
      
      {/* CONTENEUR DE CENTRAGE :
        - max-w-7xl : Définit une largeur max (ex: 1280px)
        - mx-auto : Centre ce bloc horizontalement
      */}
      <div className="max-w-7xl mx-auto flex items-center py-5">
        
        {/* 1. LOGO */}
        <div className="shrink-0">
          <Link to="/">
            <img src="/images/imgi_1_site-logo-free-img-1.png" alt="Logo" className="w-full" /> 
          </Link>
        </div>

        {/* 2. NAVIGATION + ACTIONS - Poussés ensemble vers la droite */}
        <div className="ml-auto flex items-center gap-8">
          
          <nav className={`
            absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent
            ${isMenuOpen ? "flex" : "hidden md:flex"}
          `}>
            <ul className="flex flex-col md:flex-row items-center gap-8 py-4 md:py-0">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink 
                    to={item.link} 
                    className={({ isActive }) => `
                      flex items-center gap-2 font-semibold uppercase text-sm tracking-widest transition-all duration-300
                      ${isActive ? "text-red-600" : "text-gray-800 hover:text-red-600"}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. PANIER */}
          <div className="flex items-center gap-5 border-l pl-8 border-gray-200">
            <Link to="/cart" className="relative text-gray-800 hover:text-red-600 transition-colors">
              <SlBasket size={22} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Toggle Mobile */}
            <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
        
      </div>
    </header>
  );
}