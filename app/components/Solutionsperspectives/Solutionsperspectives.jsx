"use client"
import React, { useRef } from "react";
import "./Solutionsperspectives.css";

const Solutionsperspective = () => {
  // Array of card data
  const cardData = [
    {
      id: 1,
      title: "Evolving role of IT being a catalyst to a business driver in M & As",    
      image: "/assets/solutionsperspectives0.png",
      category: "IT",
      author: "Ranga Rajan",
      link:"/solutions/taxi-app",
    },
    {
      id: 2,
      title: "Liquid Template: The perfect tool for object transformation",   
      image: "/assets/solutionsperspectives1.png",
      category: "Technology",
      author: "Kumareswar kandimalia",
      link:"/solutions/healthcare-telemedicine",
    },
    {
      id: 3,
      title: "Servitization for manufacturing propels the industry in the era propels the industry in the era of hyper digitalization",
      image: "/assets/solutionsperspectives2.png",
      category: "Automation, Manufacturing",
      author: "Dinesh Gadade",
      link:"/solutions/digital-shop",
    },
    {
        id: 4,
        title: "Top seven tips so you can create a reliable embedded system",
        image: "/assets/solutionsperspectives3.png",
        category: "Embedded Systems",
        author: "Krenal Chauhan",
        link:"/coes/iot-embedded/embedded-systems",
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
          className="p-2  bg-gray-200 rounded-full text-purple-700 shadow-md hover:bg-gray-400"
        >
          ▶
        </button>
      </div>

      {/* Scrollable Section */}
      <div
            ref={scrollRef}
            className="flex just gap-4 sm: lg:gap-10  2xl:w-[1200px] m-4 lg:mx-40 overflow-x-hidden scroll-smooth scrollbar-hide"
          
          >
            {cardData.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 bg-purple-100 w-[220px] h-[400px] sm:w-1/2 lg:w-[370px] group"
              >
                <div className="bg-white">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-40 lg:h-48 object-cover w-64 mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <p className="text-sm px-2 text-purple-500 mb-2">{card.category}</p>
                <h3 className="text-lg px-2 font-semibold tracking-wide hover:underline cursor-pointer">{card.title}</h3>
                <p className="text-sm px-2 text-gray-500 mt-2">By, {card.author}</p>
              </div>
            ))}
                  </div>
    </div>
  );
};

export default Solutionsperspective;
