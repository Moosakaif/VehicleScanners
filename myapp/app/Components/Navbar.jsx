"use client";

import React, { useState, useEffect } from "react";
import navLinks from "./data/navLinks";
import { font } from "./font/font";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
    
    // Set up scroll observation for sections
    const observeScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200; // Adding offset for better UX
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(`#${sectionId}`);
        }
      });
    };
    
    window.addEventListener('scroll', observeScroll);
    return () => window.removeEventListener('scroll', observeScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleMouseEnter = (index) => setDropdownOpen(index);
  const handleMouseLeave = () => setDropdownOpen(null);
  const toggleMobileDropdown = (index) =>
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);

  // Smooth scroll function
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset to account for the navbar height
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (isOpen) {
          setIsOpen(false);
        }
      }
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto md:w-[100%] bg-opacity-100 bg-black">
        <header
          className={`${font.className} flex items-center justify-between px-4 py-3 bg-darkGrey`}
        >
          <Link href="/">
            <div className="flex items-center">
              <img
                src="/Vehicles-Scanner-Logo.png"
                alt="Logo"
                className="w-auto h-10 sm:h-10 md:h-20 lg:h-24"
              />
            </div>
          </Link>
          <div className="hidden md:flex ml-8 space-x-8">
            {/* <div className="text-sm">
              <p className="font-medium text-md text-white">Call Us On:</p>
              <p className="text-white text-xl">(213) 536-0802</p>
            </div> */}
            <div className="text-sm">
              <p className="font-medium text-md text-white">Email Us At:</p>
              <p className="text-white text-xl">info@vehiclescanners.co.uk</p>
            </div>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-evenly bg-red-700 p-3">
          {navLinks.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`${
                    activeLink === item.href ? "text-white" : "text-white"
                  } mx-4 cursor-pointer flex items-center`}
                >
                  {item.label}
                  {item.subLinks && <FaChevronDown className="ml-2" />}
                </motion.span>
              </a>
              {item.subLinks && dropdownOpen === index && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg" style={{zIndex: 1000}}>
                  {item.subLinks.map((subItem) => (
                    <a 
                      key={subItem.label} 
                      href={subItem.href}
                      onClick={(e) => handleNavClick(e, subItem.href)}
                    >
                      <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        {subItem.label}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((item, index) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`${
                        activeLink === item.href ? "text-cyan-400" : "text-white"
                      } block px-3 py-2 text-base font-medium`}
                    >
                      <div className="flex justify-between items-center">
                        {item.label}
                        {item.subLinks && (
                          <button onClick={() => toggleMobileDropdown(index)}>
                            <FaChevronDown className={`transition-transform ${
                              mobileDropdownOpen === index ? "rotate-180" : ""
                            }`} />
                          </button>
                        )}
                      </div>
                    </a>
                    {item.subLinks && mobileDropdownOpen === index && (
                      <div className="pl-4 py-2">
                        {item.subLinks.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => handleNavClick(e, subItem.href)}
                            className="block px-3 py-2 text-gray-300 hover:text-white"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;