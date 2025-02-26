"use client"
import React, { useRef } from "react";
import "./Industriesperspectives.css";
import Link from "next/link";

const Industriesperspectives = () => {
  // Array of card data
  const cardData = [
    {
      id: 1,
      title: "Challenges in SME/Corporate Client Onboarding ",    
      image: "/assets/industriesperspectives1.png",
      category: "Banking , Digital Transformation",
      author: "Sumeet Kulshreshth",
      link:"/industries/agribusiness",
    },
    {
      id: 2,
      title: "Embrace the future of customer onborading in banking",   
      image: "/assets/industriesperspectives2.png",
      category: "Automation , BFSI",
      author: "Sumeet Kulshreshth",
      link:"/industries/bfsi",
    },
    {
      id: 3,
      title: "Unified IT Experience Desk - Why you need it?",
      image: "/assets/industriesperspectives3.png",
      category: "Automation , BFSI",
      author: "Rakesh Kumar Jain",
      link:"/industries/logistics"
    },
    {
        id: 4,
        title: "Top seven tips so you can create a reliable embedded system",
        image: "/assets/industriesperspectives4.png",
        category: "Infrastructure Management Services",
        author: "Krenal Chauhan",
        link:"/industries/manufacturing",
      },
      
  ];

  // Reference to the scrollable container
  const scrollRef = useRef(null);

  // Scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mb-10 -mt-20">
      <h2 className="text-3xl mx-4 mb-10 lg:px-20">
        KALVEN Perspectives <span className="text-red-500 font-semibold">.</span>
      </h2>
      <div className="flex items-center m-4 mb-8 lg:mx-40 justify-between">
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll("left")}
          className="p-2 bg-gray-200 text-purple-700 rounded-full shadow-md hover:bg-gray-400"
        >
          ◀
        </button>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll("right")}
          className="p-2 bg-gray-200 rounded-full text-purple-700 shadow-md hover:bg-gray-400"
        >
          ▶
        </button>
      </div>

      {/* Scrollable Section */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm: lg:gap-10 2xl:w-[1200px] m-4 lg:mx-40 overflow-x-hidden scroll-smooth scrollbar-hide"
      >
        {cardData.map((card) => (
          <Link href={card.link} key={card.id} className="flex-shrink-0 w-[220px] h-[400px] sm:w-1/2 lg:w-[370px] group">
            <div className="bg-purple-100">
              <div className="bg-white">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-40 lg:h-48 object-cover w-64 mb-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm px-2 text-purple-500 mb-2">{card.category}</p>
              <h3 className="text-lg px-2 font-semibold tracking-wide hover:underline cursor-pointer">
                {card.title}
              </h3>
              <p className="text-sm px-2 text-gray-500 mt-2">By, {card.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Industriesperspectives;
