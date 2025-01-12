"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to get the current pathname
import SocialLinks from "./SocialLinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isActive = (path) => pathname === path; // Function to check active link

  return (
    <header className="border-b-2 border-green-400 bg-bodyColor text-white sticky top-0 z-50">
      <div className="py-5 flex items-center justify-between bg-bodyColor max-w-screen-xl mx-auto pl-5">
        {/* Left Logo */}
        <div className="group pl-10 text-2xl font-bold">
          <span className="hover:text-green-400">Sheraz</span>&nbsp;
          <span className="hoverEffect text-green-400 hover:text-green-400">.</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden group md:flex pr-10 gap-8 text-sm">
          <Link href="/">
            <span
              className={`cursor-pointer ${
                isActive("/") ? "text-green-400 underline" : ""
              } hover:underline`}
            >
              HOME
            </span>
          </Link>
          <Link href="/services">
            <span
              className={`cursor-pointer ${
                isActive("/services") ? "text-green-400 underline" : ""
              } hover:underline`}
            >
              SERVICES
            </span>
          </Link>
          <Link href="/resume">
            <span
              className={`cursor-pointer ${
                isActive("/resume") ? "text-green-400 underline" : ""
              } hover:underline`}
            >
              RESUME
            </span>
          </Link>
          <Link href="/work">
            <span
              className={`cursor-pointer ${
                isActive("/work") ? "text-green-400 underline" : ""
              } hover:underline`}
            >
              WORK
            </span>
          </Link>
          <Link href="/contact">
            <span
              className={`cursor-pointer ${
                isActive("/contact") ? "text-green-400 underline" : ""
              } hover:underline`}
            >
              CONTACT
            </span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="cursor-pointer bg-green-700 text-white text-sm font-bold py-2 px-10 rounded hover:bg-green-500 hover:text-black hoverEffect"
          >
            HIRE ME
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
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
          <Link href="/">
            <span
              className={`cursor-pointer text-sm ${
                isActive("/") ? "text-green-400 underline" : ""
              } hover:underline`}
              onClick={toggleMenu}
            >
              HOME
            </span>
          </Link>
          <Link href="/services">
            <span
              className={`cursor-pointer text-sm ${
                isActive("/services") ? "text-green-400 underline" : ""
              } hover:underline`}
              onClick={toggleMenu}
            >
              SERVICES
            </span>
          </Link>
          <Link href="/resume">
            <span
              className={`cursor-pointer text-sm ${
                isActive("/resume") ? "text-green-400 underline" : ""
              } hover:underline`}
              onClick={toggleMenu}
            >
              RESUME
            </span>
          </Link>
          <Link href="/work">
            <span
              className={`cursor-pointer text-sm ${
                isActive("/work") ? "text-green-400 underline" : ""
              } hover:underline`}
              onClick={toggleMenu}
            >
              WORK
            </span>
          </Link>
          <Link href="/contact">
            <span
              className={`cursor-pointer text-sm ${
                isActive("/contact") ? "text-green-400 underline" : ""
              } hover:underline`}
              onClick={toggleMenu}
            >
              CONTACT
            </span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="cursor-pointer bg-green-700 text-white text-sm font-bold py-2 px-20 rounded hover:bg-green-500 hover:text-black hoverEffect"
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
