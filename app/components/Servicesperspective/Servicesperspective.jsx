"use client"
import React, { useRef } from "react";
import "./Servicesperspective.css";
import Link from "next/link";

const Servicesperspective = () => {
  // Array of card data
  const cardData = [
    {
      id: 1,
      title: "Digital Transformation Scenario in Higher Education",    
      image: "/assets/perspectiveservices1.png",
      category: "Automation, SAP",
      author: "Hussain Sab",
      link: "/coes/sap",
    },
    {
      id: 2,
      title: "Modernization as a Service - Create a new legacy",   
      image: "/assets/perspectiveservices2.png",
      category: "Automation",
      author: "Brian C. Joseph",
      link: "/services/modernization",
    },
    {
      id: 3,
      title: "Connected Common Sense",
      image: "/assets/perspectiveservices3.png",
      category: "Automation",
      author: "Shishir Choudhary",
      link: "/services/digitalization/ai-automation",
    },
    {
      id: 4,
      title: "Emergence of Artificial Intelligence and Big Data in Healthcare",
      image: "/assets/perspectiveservices4.png",
      category: "Automation, Big Data, Cloud, Healthcare, Mobility",
      author: "Damian Bonadonna",
      link: "/services/intelligence/conversational-ai",
    },
    {
      id: 5,
      title: "Customer Co-creation, Steppingstone to Customer Success...",
      image: "/assets/perspectiveservices5.png",
      category: "Customer Management, Enterprise Services",
      author: "Lakshmi Nanduri",
      link: "/services/customer-ecosystem/customer-experience",
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
            <Link href={card.link}>
              <h3 className="text-lg px-2 font-semibold tracking-wide hover:underline cursor-pointer">
                {card.title}
              </h3>
            </Link>
            <p className="text-sm px-2 text-gray-500 mt-2">By, {card.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicesperspective;