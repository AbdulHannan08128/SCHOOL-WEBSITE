"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { COLORS, TEXTS } from "@/constants";

const Navbar_Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Add or remove the overflow-hidden class on the body when the menu is toggled
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup by removing the class when the component is unmounted or menu is closed
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <nav
      style={{ backgroundColor: COLORS.bg, padding: "16px 0" }}
      className="w-full md:w-[80vw] mx-auto rounded-xl overflow-hidden"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 w-14 h-14 bg-white overflow-hidden p-1 rounded-md"
          style={{ border: "3px solid", borderColor: COLORS.primary }}
        >
          <Image
            src="/logo/logo.svg"
            alt="Logo"
            width={50}
            height={50}
          />
        </div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links - Desktop */}
        <div className={`hidden lg:flex space-x-6`}>
          {TEXTS.navItems.map((item, index) => (
            <Link key={index} href={item.action} passHref>
              <span
                className="transition duration-300 hover:text-pink-500"
                style={{ color: COLORS.link }}
              >
                {item.text}
              </span>
            </Link>
          ))}
        </div>

        {/* Call to Action Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {TEXTS.buttons.map((button, index) => (
            <button
              key={index}
              className="py-2 px-6 rounded-full shadow-lg transition duration-300 font-semibold text-white"
              style={{ backgroundColor: index === 0 ? COLORS.secondary : COLORS.primary }}
              onClick={() => window.location.href = button.action}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu - Drawer Style */}
      <div
        className={`md:flex fixed top-0 left-0 h-full w-64 shadow-lg z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
        style={{ backgroundColor: COLORS.bg }}
      >
        <div className="flex flex-col justify-start h-full">
          {/* Menu Title */}
          <div className="p-6 text-center">
            <h2
              className="text-3xl font-extrabold bg-clip-text bg-gradient-to-r rounded-2xl text-white"
            >
              MENU
            </h2>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start space-y-4 p-6 justify-start">
            {TEXTS.navItems.map((item, index) => (
              <Link key={index} href={item.action} passHref>
                <span
                  className="text-lg font-medium transition duration-300 hover:text-pink-500"
                  style={{ color: COLORS.link }}
                >
                  {item.text}
                </span>
              </Link>
            ))}
          </div>

          {/* Buttons at Bottom */}
          <div className="flex flex-col space-y-4 p-6 absolute bottom-1 w-full">
            {TEXTS.buttons.map((button, index) => (
              <button
                key={index}
                className="py-2 px-6 rounded-full shadow-lg transition duration-300 font-semibold text-white"
                style={{ backgroundColor: index === 0 ? COLORS.primary : COLORS.secondary }}
                onClick={() => window.location.href = button.action}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar_Hero;
