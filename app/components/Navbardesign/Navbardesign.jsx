"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import Searchbarpage from '../../components/searchbarpage/Searchbarpage'; // Adjust the path as necessary
import { usePathname } from "next/navigation"; // Import usePathname to track route changes
import { useState, useEffect } from "react";
import "./Navbar.css"

const Navbardesign = ({menuItems,
    }) => {
      
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({}); // Track expanded menu items
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered item index
  const [showSubMenu, setShowSubMenu] = useState(false);
  const pathname = usePathname(); // Detect route changes
 

 
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(pathname); // Update activePage based on current route
  }, [pathname]);

  const toggleMenu = (index) => {
    setExpandedItems((prev) => {
      const newState = {};
      menuItems.forEach((_, idx) => {
        newState[idx] = idx === index ? !prev[idx] : false;
      });
      return newState;
    });
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setShowSubMenu(true); // Keep submenu visible
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
    setHoveredIndex(null); // Reset hovered index
  };

  const toggleItem = (index) => {
    setExpandedItems((prev) => {
      // If clicking the already open submenu, close it
      if (prev[index]) {
        return {}; // Close all submenus
      } else {
        return { [index]: true }; // Open only the clicked submenu
      }
    });
  };
  

  // Close the submenu when navigating to a different page
  useEffect(() => {
    setHoveredIndex(null);
    setShowSubMenu(false);
  }, [pathname]); // Runs whenever the URL path changes



  // Automatically close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false); // Close the menu when navigating to another page
    setExpandedItems({}); // Close all submenus
  }, [pathname]); // Runs whenever the URL path changes


  
  return (
  
       <nav className="flex px-2 sticky top-0 z-30 lg:px-4 2xl:px-6 bg-white shadow-lg ">
      <div className="container  mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="text-xl font-bold py-3">
          <Link href="/">
            <motion.img src="/assets/Kalven-logo.png"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="h-12" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden  lg:flex   text-sm">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className=" group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Parent Menu Item */}
              <Link href={item.href} className={`px-4 py-7 ${
                activePage === item.href
                  ? "text-gray-400 "
                  : "hover:text-purple-700"
              }`}
              onClick={(e) => activePage === item.href && e.preventDefault()} >
                {item.label}
              </Link>


              {/* Submenu */}
              {item.subItems && showSubMenu && hoveredIndex === index && (
                <div
                  className="absolute top-full left-0 bg-gray-100 shadow-lg z-10 overflow-y-auto"
                  style={{
                    width: "98.5vw", // Stretching submenu across viewport

                    left: "0",
                    right: "0",
                    maxHeight: "80vh", // Limit height to 90% of viewport
                  }}
                >
                  <div className="columns-4 gap-4 p-4 px-40 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:underline break-inside-avoid ${subItem.className || ""}`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>

                </div>
              )}

            </div>
          ))}
        </div>



        {/* Search and Contact */}
        <div className="search-container flex gap-4">
          <Searchbarpage menuItems={menuItems}></Searchbarpage>
          <div className="p-2 border bg-purple-500 rounded-full hover:shadow-lg hover:bg-white hover:text-purple-500 transition duration-300">
            <Link
              href="/contact"
              className=" text-xs px-2  block md:px-4 md:text-sm text-white hover:text-gray-600"
            >
              Contact Us
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6  text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-black text-white text-sm fixed  flex flex-col divide-y divide-gray-700 z-20 lg:hidden top-[72px] right-0 transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index} onClick={() => toggleItem(index)}
            className="relative flex justify-between items-center py-4 px-6"
            // onMouseEnter={() => setHoveredIndex(index)}
            // onMouseLeave={() => setHoveredIndex(null)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Menu Item */}
            <Link href={item.href} className="hover:text-gray-300">
              {item.label}
            </Link>

            {/* Submenu Toggle Button */}
            {item.subItems && (
              <button

                className="focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}

            {/* Submenu */}
            {item.subItems && expandedItems[index] && (
              <div
                className="absolute top-full left-0 h-80 w-full  bg-gray-100 shadow-lg  z-10 overflow-y-auto"
                style={{ maxHeight: '537px', scrollbarWidth: 'none', }} // Set a maximum height for the submenu
                onMouseEnter={() => setHoveredIndex(index)} // Keep hover state when cursor enters submenu
                onMouseLeave={() => setHoveredIndex(null)} // Remove hover state when cursor leaves submenu
              >
                <div className="grid grid-cols-1 gap-1 p-3">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className={`block px-4 py-2 text-sm text-gray-800 hover:underline rounded ${subItem.className || ""}`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
    
  )
}

export default Navbardesign
