"use client"; // 👈 Required for Next.js if you're using hooks

import React, { useState } from "react";
import Link from "next/link"; 
import SocialLinks from"./SocialLinks"// ✅ Import Link from Next.js
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for opening/closing the menu

  const toggleMenu = () => setMenuOpen(!menuOpen); // Function to toggle menu open/close

  return (
    <header className="border-b-2 border-green-400  bg-bodyColor text-white sticky top-0 z-50">
      <div className="py-5 flex items-center justify-between bg-bodyColor max-w-screen-xl mx-auto pl-5">
        {/* Left Logo */}
        <div className="group pl-10 text-2xl font-bold">
          <span className="hover:text-green-400 ">Sheraz</span>&nbsp;
          <span className=" hoverEffect text-green-400 hover:text-green-400 ">.</span>
        </div>

        {/* Desktop Menu (Visible on large screens only) */}
        <nav className="hidden group md:flex pr-10 gap-8 text-sm">
          <Link href="/">
            <span className="cursor-pointer text-green-400 underline font-semibold  hover:text-green-400 ">HOME</span>
          </Link>
          <Link href="/services">
            <span className="cursor-pointer hover:text-green-400 ">
              SERVICES
            </span>
          </Link>
          <Link href="/resume">
            <span className="cursor-pointer hover:text-green-400 ">RESUME</span>
          </Link>
          <Link href="/work">
            <span className="cursor-pointer hover:text-green-400 ">WORK</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer hover:text-green-400 ">
              CONTACT
            </span>
          </Link>
          <Link
  // href="https://drive.google.com/file/d/1lEh9RV0BBOlKyijNIWiuKdJXA1RAVAeA/view?usp=sharing "
    href="/"
  target="_blank"
     className="cursor-pointer bg-green-700 text-white text-sm font-bold py-2 px-10 rounded hover:bg-green-500 hover:text-black  hoverEffect "
>
  HIRE ME
</Link>




        </nav>
        {/* Mobile Hamburger Button (Visible on small screens only) */}
        <button
          className="md:hidden mr-5 flex flex-col items-center justify-center w-10 h-10"
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-bodyColor text-white z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold"
          onClick={toggleMenu}
        >
          ✕
        </button>

        {/* Mobile Navigation Menu */}
        <nav className="mt-16 flex group flex-col gap-6 items-start pl-4">

  <div className="group pl-0 text-xl font-bold items-start ">
    <span className="hover:text-green-400">Sheraz</span>&nbsp;
    <span className="hoverEffect text-green-400 hover:text-green-400">.</span>
  </div>

  <Link href="/">
    <span
      className="cursor-pointer hover:text-green-400 text-sm"
      onClick={toggleMenu}
    >
      HOME
    </span>
  </Link>
  <Link href="/services">
    <span
      className="cursor-pointer hover:text-green-400 text-sm"
      onClick={toggleMenu}
    >
      SERVICES
    </span>
  </Link>
  <Link href="/resume">
    <span
      className="cursor-pointer hover:text-green-400 text-sm"
      onClick={toggleMenu}
    >
      RESUME
    </span>
  </Link>
  <Link href="/work">
    <span
      className="cursor-pointer hover:text-green-400 text-sm"
      onClick={toggleMenu}
    >
      WORK
    </span>
  </Link>
  <Link href="/contact">
    <span
      className="cursor-pointer hover:text-green-400 text-sm"
      onClick={toggleMenu}
    >
      CONTACT
    </span>
  </Link>
  
  <Link
  // href="https://drive.google.com/file/d/1lEh9RV0BBOlKyijNIWiuKdJXA1RAVAeA/view?usp=sharing "
  href="/"
  target="_blank"
     className="cursor-pointer bg-green-700 text-white text-sm font-bold py-2 px-20 rounded hover:bg-green-500 hover:text-black  hoverEffect "
>
  HIRE ME
</Link>




    <SocialLinks />




</nav>

      </div>
    </header>
  );
};

export default Header;
