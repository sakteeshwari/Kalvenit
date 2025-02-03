import React, { useRef } from "react";
import "./Coespageperspectives.css"

const Coesperspectives = () => {
  // Array of card data
  const cardData = [
    {
      id: 1,
      title: "Think, Work Manage Globally with Oracle E-Business Suite Applications both On-premis...",    
      image: "/assets/coesperspectives1.png",
      category: "Cloud, Enterprise Services, Oracle",
      author: "Vrunda Sunil Kamat",
    },
    {
      id: 2,
      title: "Robotic Process Automation for SAP Integration Like Never Before",   
      image: "/assets/coesperspectives2.png",
      category: "Automation, SAP",
      author: "Suresh Suravarapu",
    },
    {
      id: 3,
      title: "Kickstart integration with MuleSoft",
      image: "/assets/coesperspectives3.png",
      category: "Technology",
      author: "Kriti Gujar",
    },
    {
        id: 4,
        title: "Mobility and IoT Adoption in Healthcare Industry",
        image: "/assets/coesperspectives4.png",
        category: "Technolgy",
        author: "Samrat Bhave",
      },
      {
        id: 5,
        title: "How AI will transform Infrastructure...",
        image: "/assets/coesperspectives5.png",
        category: "Infrastructure Management Services",
        author: "Sanjay Reddy Kakulavaram",
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
          <div className="flex items-center m-4 mb-8 lg:mx-40 justify-between transform transition-all duration-500 ease-in-out">
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

export default Coesperspectives;
